const { createServer } = require('node:http')
const { createApp } = require('./app')
const { config } = require('./config/env')

const app = createApp()
const server = createServer(app)

server.listen(config.port, () => {
  console.log(`Xitamin API running on http://localhost:${config.port}`)
})

process.on('SIGTERM', () => {
  server.close(() => process.exit(0))
})
