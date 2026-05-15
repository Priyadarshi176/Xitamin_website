const { createContactLead, createNewsletterSubscriber } = require('../controllers/contactController')
const { getHealth } = require('../controllers/healthController')
const { getServices } = require('../controllers/servicesController')
const { readJsonBody, sendJson } = require('../utils/http')

async function router(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const routeKey = `${req.method} ${url.pathname}`

  if (routeKey === 'GET /api/health') {
    sendJson(res, 200, getHealth())
    return
  }

  if (routeKey === 'GET /api/services') {
    sendJson(res, 200, getServices())
    return
  }

  if (routeKey === 'POST /api/contact') {
    const payload = await readJsonBody(req)
    const result = await createContactLead(payload)
    sendJson(res, result.status, result.body)
    return
  }

  if (routeKey === 'POST /api/newsletter') {
    const payload = await readJsonBody(req)
    const result = await createNewsletterSubscriber(payload)
    sendJson(res, result.status, result.body)
    return
  }

  sendJson(res, 404, {
    success: false,
    error: 'Route not found',
  })
}

module.exports = { router }
