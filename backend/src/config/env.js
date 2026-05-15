const path = require('node:path')
const fs = require('node:fs')

const rootDir = path.resolve(__dirname, '..', '..')
const envFile = path.resolve(rootDir, '.env')

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return
  }

  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/)

  for (const line of lines) {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith('#')) {
      continue
    }

    const separatorIndex = trimmed.indexOf('=')

    if (separatorIndex === -1) {
      continue
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, '')

    if (!process.env[key]) {
      process.env[key] = value
    }
  }
}

function toBoolean(value, fallback = false) {
  if (value === undefined) {
    return fallback
  }

  return ['1', 'true', 'yes', 'on'].includes(String(value).toLowerCase())
}

loadEnvFile(envFile)

const config = {
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 5000),
  allowedOrigins: (process.env.ALLOWED_ORIGINS || 'http://localhost:5173,http://127.0.0.1:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  storage: {
    leadsFile: path.resolve(rootDir, process.env.LEADS_FILE || 'storage/leads.jsonl'),
    newsletterFile: path.resolve(rootDir, process.env.NEWSLETTER_FILE || 'storage/newsletter.jsonl'),
  },
  mail: {
    enabled: toBoolean(process.env.MAIL_ENABLED, false),
    host: process.env.SMTP_HOST || '',
    port: Number(process.env.SMTP_PORT || 587),
    secure: toBoolean(process.env.SMTP_SECURE, false),
    startTls: toBoolean(process.env.SMTP_STARTTLS, true),
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
    from: process.env.MAIL_FROM || 'Xitamin Website <no-reply@xitamin.co.in>',
    to: (process.env.MAIL_TO || 'connect@xitamin.co.in')
      .split(',')
      .map((email) => email.trim())
      .filter(Boolean),
    replyTo: process.env.MAIL_REPLY_TO || 'connect@xitamin.co.in',
    sendAutoReply: toBoolean(process.env.MAIL_SEND_AUTO_REPLY, true),
  },
}

module.exports = { config, rootDir }
