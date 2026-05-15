const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+()\-\s0-9]{7,20}$/

function normalizeText(value) {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : ''
}

function validateContactPayload(payload) {
  const data = {
    name: normalizeText(payload.name),
    email: normalizeText(payload.email).toLowerCase(),
    phone: normalizeText(payload.phone),
    company: normalizeText(payload.company),
    service: normalizeText(payload.service || 'general inquiry'),
    budget: normalizeText(payload.budget),
    message: normalizeText(payload.message),
    source: normalizeText(payload.source || 'website'),
  }

  const errors = {}

  if (data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (data.phone && !PHONE_PATTERN.test(data.phone)) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    data,
  }
}

function validateNewsletterPayload(payload) {
  const data = {
    name: normalizeText(payload.name),
    email: normalizeText(payload.email).toLowerCase(),
  }

  const errors = {}

  if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = 'Enter a valid email address.'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    data,
  }
}

module.exports = { validateContactPayload, validateNewsletterPayload }
