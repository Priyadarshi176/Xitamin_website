const { saveLead } = require('../services/leadService')
const { sendLeadEmails } = require('../services/mailService')
const { validateContactPayload, validateNewsletterPayload } = require('../validators/contactValidator')

async function trySendLeadEmails(lead) {
  try {
    const results = await sendLeadEmails(lead)
    return {
      attempted: true,
      skipped: results.every((result) => result.skipped),
      delivered: results.some((result) => !result.skipped),
    }
  } catch (error) {
    console.error('[mail] failed:', error.message)
    return {
      attempted: true,
      skipped: false,
      delivered: false,
    }
  }
}

async function createContactLead(payload) {
  const validation = validateContactPayload(payload)

  if (!validation.valid) {
    return {
      status: 422,
      body: {
        success: false,
        errors: validation.errors,
      },
    }
  }

  const lead = await saveLead(validation.data)
  const mail = await trySendLeadEmails(lead)

  return {
    status: 201,
    body: {
      success: true,
      message: 'Thank you. Xitamin will contact you soon.',
      data: {
        id: lead.id,
        createdAt: lead.createdAt,
        mail,
      },
    },
  }
}

async function createNewsletterSubscriber(payload) {
  const validation = validateNewsletterPayload(payload)

  if (!validation.valid) {
    return {
      status: 422,
      body: {
        success: false,
        errors: validation.errors,
      },
    }
  }

  const lead = await saveLead(
    {
      ...validation.data,
      source: 'newsletter',
      service: 'newsletter',
      message: 'Newsletter subscription request',
    },
    'newsletter',
  )
  const mail = await trySendLeadEmails(lead)

  return {
    status: 201,
    body: {
      success: true,
      message: 'Subscription received.',
      data: {
        id: lead.id,
        createdAt: lead.createdAt,
        mail,
      },
    },
  }
}

module.exports = { createContactLead, createNewsletterSubscriber }
