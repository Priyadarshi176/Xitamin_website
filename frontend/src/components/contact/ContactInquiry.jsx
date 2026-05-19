import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'

import { services } from '../../data/siteContent'
import { submitContactLead } from '../../lib/api'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: 'E-commerce Growth',
  message: '',
}

const serviceOptions = [
  ...services.map((service) => service.title),
  'Amazon SPN Support',
  'Flipkart Management',
  'SEO and Digital Marketing',
  'Website Development',
]

export default function ContactInquiry() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    setFeedback('')

    try {
      await submitContactLead(form)
      setForm(initialForm)
      setStatus('success')
      setFeedback('Your inquiry has been received. Xitamin will contact you soon.')
    } catch (error) {
      setStatus('error')
      setFeedback(error.message)
    }
  }

  return (
    <section id="contact-form" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
            Growth inquiry
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-zinc-950 sm:text-5xl">
            Share the context. We will shape the next step.
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-600">
            A useful inquiry tells us where you sell today, what is slowing
            growth, and which support you need first. Short is fine. Specific is
            even better.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              'Marketplace or website URL',
              'Main platform and current issue',
              'Service you want to start with',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                <CheckCircle2 size={18} className="text-orange-600" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[1.5rem] border border-zinc-200 bg-[#fbfbf8] p-5 shadow-2xl shadow-black/8 sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Name
              <input
                required
                name="name"
                value={form.name}
                onChange={updateField}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 font-medium outline-orange-600 transition focus:border-orange-600"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 font-medium outline-orange-600 transition focus:border-orange-600"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Phone
              <input
                name="phone"
                value={form.phone}
                onChange={updateField}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 font-medium outline-orange-600 transition focus:border-orange-600"
                placeholder="+91..."
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Service
              <select
                name="service"
                value={form.service}
                onChange={updateField}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 font-medium outline-orange-600 transition focus:border-orange-600"
              >
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-800">
            Message
            <textarea
              required
              name="message"
              value={form.message}
              onChange={updateField}
              className="min-h-40 rounded-xl border border-zinc-300 bg-white px-4 py-3 font-medium outline-orange-600 transition focus:border-orange-600"
              placeholder="Tell us about your store, platform, challenge, and goal."
            />
          </label>

          <button
            type="submit"
            disabled={status === 'loading'}
            aria-busy={status === 'loading'}
            className="premium-button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-zinc-950/15 transition hover:-translate-y-0.5 hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            {status === 'loading' ? 'Submitting...' : 'Submit inquiry'}
          </button>

          {feedback ? (
            <p
              role="status"
              className={`mt-4 rounded-xl px-4 py-3 text-sm font-bold ${
                status === 'error' ? 'bg-red-50 text-red-700' : 'bg-orange-50 text-orange-700'
              }`}
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
