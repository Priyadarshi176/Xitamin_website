function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function leadNotificationTemplate(lead) {
  const rows = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Phone', lead.phone || 'Not provided'],
    ['Company', lead.company || 'Not provided'],
    ['Service', lead.service],
    ['Budget', lead.budget || 'Not provided'],
    ['Source', lead.source],
    ['Created', lead.createdAt],
    ['Lead ID', lead.id],
  ]

  const text = [
    'New Xitamin website inquiry',
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    lead.message,
  ].join('\n')

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #e4e4e7;color:#52525b;font-weight:700;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #e4e4e7;color:#18181b;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join('')

  const html = `
    <div style="font-family:Arial,sans-serif;background:#f7f6ef;padding:24px;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
        <div style="background:#09090b;color:#ffffff;padding:22px 24px;">
          <p style="margin:0;color:#6ee7b7;font-size:12px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;">Xitamin Website</p>
          <h1 style="margin:8px 0 0;font-size:24px;">New growth inquiry</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
        <div style="padding:22px 24px;">
          <p style="margin:0 0 8px;color:#52525b;font-weight:800;">Message</p>
          <p style="margin:0;color:#18181b;line-height:1.6;">${escapeHtml(lead.message)}</p>
        </div>
      </div>
    </div>
  `

  return {
    subject: `New Xitamin inquiry from ${lead.name}`,
    text,
    html,
  }
}

function autoReplyTemplate(lead) {
  const text = [
    `Hi ${lead.name},`,
    '',
    'Thank you for contacting Xitamin. We received your inquiry and our team will review it soon.',
    '',
    `Requested service: ${lead.service}`,
    '',
    'Regards,',
    'Team Xitamin',
  ].join('\n')

  const html = `
    <div style="font-family:Arial,sans-serif;background:#f7f6ef;padding:24px;">
      <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e7;border-radius:12px;padding:26px;">
        <p style="margin:0;color:#059669;font-size:12px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;">Xitamin</p>
        <h1 style="margin:8px 0 14px;color:#18181b;font-size:24px;">We received your inquiry</h1>
        <p style="color:#3f3f46;line-height:1.7;">Hi ${escapeHtml(lead.name)}, thank you for contacting Xitamin. Our team will review your request and contact you soon.</p>
        <p style="color:#3f3f46;line-height:1.7;"><strong>Requested service:</strong> ${escapeHtml(lead.service)}</p>
        <p style="margin-top:24px;color:#18181b;font-weight:800;">Team Xitamin</p>
      </div>
    </div>
  `

  return {
    subject: 'Xitamin received your inquiry',
    text,
    html,
  }
}

module.exports = { autoReplyTemplate, escapeHtml, leadNotificationTemplate }
