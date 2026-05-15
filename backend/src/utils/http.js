const MAX_BODY_SIZE = 1024 * 64

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload)

  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
  })
  res.end(body)
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk

      if (Buffer.byteLength(body) > MAX_BODY_SIZE) {
        reject(new Error('Request body too large'))
      }
    })

    req.on('end', () => {
      if (!body) {
        resolve({})
        return
      }

      try {
        resolve(JSON.parse(body))
      } catch {
        resolve({})
      }
    })

    req.on('error', reject)
  })
}

module.exports = { readJsonBody, sendJson }
