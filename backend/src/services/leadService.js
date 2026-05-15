const crypto = require('node:crypto')
const fs = require('node:fs/promises')
const path = require('node:path')
const { config } = require('../config/env')

async function appendJsonLine(filePath, record) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
  await fs.appendFile(filePath, `${JSON.stringify(record)}\n`, 'utf8')
}

async function saveLead(data, type = 'contact') {
  const lead = {
    id: crypto.randomUUID(),
    type,
    createdAt: new Date().toISOString(),
    ...data,
  }

  const filePath = type === 'newsletter' ? config.storage.newsletterFile : config.storage.leadsFile
  await appendJsonLine(filePath, lead)

  return lead
}

module.exports = { saveLead }
