const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000'
const REQUEST_TIMEOUT_MS = 12000

export async function submitContactLead(payload) {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        ...payload,
        source: 'xitamin-website',
      }),
    })

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      const message = data.errors ? Object.values(data.errors).join(' ') : data.error || 'Unable to submit request.'
      throw new Error(message)
    }

    return data
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('The request timed out. Please try again or contact Xitamin on WhatsApp.', { cause: error })
    }

    if (error instanceof TypeError) {
      throw new Error('Cannot reach the backend API. Please start the backend server and try again.', { cause: error })
    }

    throw error
  } finally {
    window.clearTimeout(timeout)
  }
}
