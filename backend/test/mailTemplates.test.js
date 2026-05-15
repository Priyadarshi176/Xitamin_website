const test = require('node:test')
const assert = require('node:assert/strict')
const { autoReplyTemplate, escapeHtml, leadNotificationTemplate } = require('../src/services/mailTemplates')
const { createMimeMessage } = require('../src/services/smtpClient')

const lead = {
  id: 'lead-123',
  name: 'Amit Seller',
  email: 'amit@example.com',
  phone: '+91 90000 00000',
  company: 'Amit Store',
  service: 'E-commerce Growth',
  budget: '50000',
  source: 'website',
  message: 'I need help with Amazon and Flipkart growth.',
  createdAt: '2026-05-11T06:30:00.000Z',
}

test('escapes html in email templates', () => {
  assert.equal(escapeHtml('<script>alert("x")</script>'), '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;')
})

test('creates lead notification template', () => {
  const template = leadNotificationTemplate(lead)

  assert.match(template.subject, /Amit Seller/)
  assert.match(template.text, /Amazon and Flipkart/)
  assert.match(template.html, /New growth inquiry/)
})

test('creates auto reply template', () => {
  const template = autoReplyTemplate(lead)

  assert.equal(template.subject, 'Xitamin received your inquiry')
  assert.match(template.text, /Hi Amit Seller/)
})

test('creates multipart mime message', () => {
  const message = createMimeMessage({
    from: 'Xitamin <no-reply@xitamin.co.in>',
    to: 'amit@example.com',
    replyTo: 'connect@xitamin.co.in',
    subject: 'Hello',
    text: 'Plain',
    html: '<p>HTML</p>',
  })

  assert.match(message, /Content-Type: multipart\/alternative/)
  assert.match(message, /Subject: Hello/)
  assert.match(message, /Plain/)
  assert.match(message, /<p>HTML<\/p>/)
})
