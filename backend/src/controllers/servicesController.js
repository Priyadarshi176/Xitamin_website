const { services } = require('../data/services')

function getServices() {
  return {
    success: true,
    data: services,
  }
}

module.exports = { getServices }
