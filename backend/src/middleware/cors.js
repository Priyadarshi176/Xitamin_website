const { config } = require('../config/env')

function applyCors(req, res) {
  const origin = req.headers.origin
  const allowedOrigin = config.allowedOrigins.includes(origin) ? origin : config.allowedOrigins[0]

  res.setHeader('Access-Control-Allow-Origin', allowedOrigin)
  res.setHeader('Vary', 'Origin')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return true
  }

  return false
}

module.exports = { applyCors }
