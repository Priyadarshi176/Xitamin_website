const net = require('node:net')
const tls = require('node:tls')

function encodeAddress(address) {
  const match = String(address).match(/<([^>]+)>/)
  return match ? match[1] : String(address).trim()
}

function dotStuff(message) {
  return message.replace(/^\./gm, '..')
}

function formatHeaders(headers) {
  return Object.entries(headers)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${String(value).replace(/\r?\n/g, ' ')}`)
    .join('\r\n')
}

function createMimeMessage({ from, to, replyTo, subject, text, html }) {
  const boundary = `xitamin-${Date.now()}-${Math.random().toString(16).slice(2)}`
  const recipients = Array.isArray(to) ? to.join(', ') : to

  const headers = formatHeaders({
    From: from,
    To: recipients,
    'Reply-To': replyTo,
    Subject: subject,
    Date: new Date().toUTCString(),
    'MIME-Version': '1.0',
    'Content-Type': `multipart/alternative; boundary="${boundary}"`,
  })

  return [
    headers,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    text || '',
    '',
    `--${boundary}`,
    'Content-Type: text/html; charset=utf-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    html || '',
    '',
    `--${boundary}--`,
  ].join('\r\n')
}

function readResponse(socket) {
  return new Promise((resolve, reject) => {
    let buffer = ''

    function cleanup() {
      socket.off('data', onData)
      socket.off('error', onError)
    }

    function onError(error) {
      cleanup()
      reject(error)
    }

    function onData(chunk) {
      buffer += chunk.toString('utf8')
      const lines = buffer.split(/\r?\n/).filter(Boolean)
      const lastLine = lines.at(-1)

      if (lastLine && /^\d{3} /.test(lastLine)) {
        cleanup()
        resolve({
          code: Number(lastLine.slice(0, 3)),
          message: buffer,
        })
      }
    }

    socket.on('data', onData)
    socket.on('error', onError)
  })
}

async function sendCommand(socket, command, expectedCodes) {
  socket.write(`${command}\r\n`)
  const response = await readResponse(socket)

  if (!expectedCodes.includes(response.code)) {
    throw new Error(`SMTP command failed: ${command} -> ${response.message}`)
  }

  return response
}

function connectSmtp({ host, port, secure }) {
  return new Promise((resolve, reject) => {
    const socket = secure ? tls.connect(port, host) : net.connect(port, host)

    socket.setEncoding('utf8')
    socket.once('error', reject)
    socket.once(secure ? 'secureConnect' : 'connect', () => resolve(socket))
  })
}

function upgradeToTls(socket, host) {
  return new Promise((resolve, reject) => {
    const secureSocket = tls.connect({
      socket,
      servername: host,
    })

    secureSocket.setEncoding('utf8')
    secureSocket.once('error', reject)
    secureSocket.once('secureConnect', () => resolve(secureSocket))
  })
}

async function sendSmtpMail(options, mail) {
  const recipients = Array.isArray(mail.to) ? mail.to : [mail.to]
  let socket = await connectSmtp(options)

  await readResponse(socket)
  await sendCommand(socket, 'EHLO xitamin.co.in', [250])

  if (!options.secure && options.startTls) {
    await sendCommand(socket, 'STARTTLS', [220])
    socket = await upgradeToTls(socket, options.host)
    await sendCommand(socket, 'EHLO xitamin.co.in', [250])
  }

  if (options.user && options.pass) {
    const token = Buffer.from(`\0${options.user}\0${options.pass}`).toString('base64')
    await sendCommand(socket, `AUTH PLAIN ${token}`, [235])
  }

  await sendCommand(socket, `MAIL FROM:<${encodeAddress(mail.from)}>`, [250])

  for (const recipient of recipients) {
    await sendCommand(socket, `RCPT TO:<${encodeAddress(recipient)}>`, [250, 251])
  }

  await sendCommand(socket, 'DATA', [354])
  socket.write(`${dotStuff(createMimeMessage(mail))}\r\n.\r\n`)

  const dataResponse = await readResponse(socket)

  if (![250].includes(dataResponse.code)) {
    throw new Error(`SMTP DATA failed: ${dataResponse.message}`)
  }

  await sendCommand(socket, 'QUIT', [221])
  socket.end()
}

module.exports = { createMimeMessage, sendSmtpMail }
