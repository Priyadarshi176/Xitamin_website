import { useState } from 'react'
import { contact, services } from '../data/siteContent'
import { submitContactLead } from '../lib/api'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: 'E-commerce Growth',
  message: '',
}

export default function ContactCta() {
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
      setFeedback('Your request has been received. Xitamin will contact you soon.')
    } catch (error) {
      setStatus('error')
      setFeedback(error.message)
    }
  }

  return (
    <section id="contact" className="bg-zinc-950 px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Start with an audit</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">Ready to make growth less random?</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            Share your marketplace or website challenge and get a practical plan for the next stage.
          </p>

          <div className="mt-8 grid gap-3 text-sm font-semibold text-zinc-300">
            <p className="border-l-2 border-emerald-300 pl-4">Response-first inquiry flow for seller brands.</p>
            <p className="border-l-2 border-emerald-300 pl-4">Your request is stored securely in the backend lead system.</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.whatsapp}
              className="premium-button rounded-lg bg-white px-6 py-3.5 text-center text-sm font-black text-zinc-950 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              WhatsApp now
            </a>
            {/* <a
              href={contact.emailHref}
              className="rounded-lg border border-white/20 px-6 py-3.5 text-center text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-zinc-950"
            >
              Email Xitamin
            </a> */}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-white p-5 shadow-2xl shadow-zinc-950/25 sm:p-6">
          <div className="mb-6 border-b border-zinc-200 pb-5">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-600">Growth inquiry</p>
            <h3 className="mt-2 text-2xl font-black text-zinc-950">Tell us where you want momentum.</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Name
              <input
                required
                name="name"
                value={form.name}
                onChange={updateField}
                className="rounded-lg border border-zinc-300 bg-[#fbfbf8] px-4 py-3 font-medium outline-emerald-600 transition focus:border-emerald-600 focus:bg-white"
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
                className="rounded-lg border border-zinc-300 bg-[#fbfbf8] px-4 py-3 font-medium outline-emerald-600 transition focus:border-emerald-600 focus:bg-white"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Phone
              <input
                name="phone"
                value={form.phone}
                onChange={updateField}
                className="rounded-lg border border-zinc-300 bg-[#fbfbf8] px-4 py-3 font-medium outline-emerald-600 transition focus:border-emerald-600 focus:bg-white"
                placeholder="+91..."
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Service
              <select
                name="service"
                value={form.service}
                onChange={updateField}
                className="rounded-lg border border-zinc-300 bg-[#fbfbf8] px-4 py-3 font-medium outline-emerald-600 transition focus:border-emerald-600 focus:bg-white"
              >
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
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
              className="min-h-32 rounded-lg border border-zinc-300 bg-[#fbfbf8] px-4 py-3 font-medium outline-emerald-600 transition focus:border-emerald-600 focus:bg-white"
              placeholder="Tell us what you want to improve."
            />
          </label>

          <button
            type="submit"
            disabled={status === 'loading'}
            aria-busy={status === 'loading'}
            className="premium-button mt-5 w-full rounded-lg bg-zinc-950 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-zinc-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' ? 'Submitting...' : 'Submit inquiry'}
          </button>

          {feedback ? (
            <p
              role="status"
              className={`mt-4 rounded-lg px-4 py-3 text-sm font-bold ${
                status === 'error' ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-700'
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
