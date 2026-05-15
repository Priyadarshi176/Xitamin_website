const { router } = require('./routes')
const { applyCors } = require('./middleware/cors')
const { sendJson } = require('./utils/http')

function createApp() {
  return async function app(req, res) {
    try {
      if (applyCors(req, res)) {
        return
      }

      await router(req, res)
    } catch (error) {
      console.error(error)
      sendJson(res, 500, {
        success: false,
        error: 'Internal server error',
      })
    }
  }
}

module.exports = { createApp }
