const { config } = require('../config/env')
const { autoReplyTemplate, leadNotificationTemplate } = require('./mailTemplates')
const { sendSmtpMail } = require('./smtpClient')

function isMailConfigured() {
  return Boolean(config.mail.enabled && config.mail.host && config.mail.from && config.mail.to.length)
}

async function sendMail(mail) {
  if (!isMailConfigured()) {
    console.info('[mail] skipped: SMTP is not configured or MAIL_ENABLED=false')
    return { skipped: true }
  }

  await sendSmtpMail(
    {
      host: config.mail.host,
      port: config.mail.port,
      secure: config.mail.secure,
      startTls: config.mail.startTls,
      user: config.mail.user,
      pass: config.mail.pass,
    },
    {
      from: config.mail.from,
      replyTo: mail.replyTo || config.mail.replyTo,
      ...mail,
    },
  )

  return { skipped: false }
}

async function sendLeadEmails(lead) {
  const notification = leadNotificationTemplate(lead)
  const results = []

  results.push(
    await sendMail({
      to: config.mail.to,
      replyTo: lead.email,
      ...notification,
    }),
  )

  if (config.mail.sendAutoReply && lead.email) {
    const autoReply = autoReplyTemplate(lead)

    results.push(
      await sendMail({
        to: lead.email,
        replyTo: config.mail.replyTo,
        ...autoReply,
      }),
    )
  }

  return results
}

module.exports = { isMailConfigured, sendLeadEmails, sendMail }
