const test = require('node:test')
const assert = require('node:assert/strict')
const { validateContactPayload, validateNewsletterPayload } = require('../src/validators/contactValidator')

test('validates contact payloads', () => {
  const result = validateContactPayload({
    name: 'Xitamin Client',
    email: 'client@example.com',
    phone: '+91 90652 00137',
    message: 'I need help growing my Amazon store.',
  })

  assert.equal(result.valid, true)
  assert.equal(result.data.email, 'client@example.com')
})

test('rejects invalid contact payloads', () => {
  const result = validateContactPayload({
    name: 'A',
    email: 'wrong',
    message: 'short',
  })

  assert.equal(result.valid, false)
  assert.ok(result.errors.name)
  assert.ok(result.errors.email)
  assert.ok(result.errors.message)
})

test('validates newsletter payloads', () => {
  const result = validateNewsletterPayload({
    email: 'growth@example.com',
  })

  assert.equal(result.valid, true)
})
