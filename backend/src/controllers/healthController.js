function getHealth() {
  return {
    success: true,
    status: 'ok',
    service: 'xitamin-api',
    timestamp: new Date().toISOString(),
  }
}

module.exports = { getHealth }
