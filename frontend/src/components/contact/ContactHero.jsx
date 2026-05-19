import { ArrowRight, MessageCircle, PhoneCall, Send } from 'lucide-react'

import { contact } from '../../data/siteContent'

const highlights = [
  'Marketplace account growth',
  'Website and SEO support',
  'Legal, tax, and finance help',
]

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 text-white lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff6200]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-orange-300">
            <Send size={13} />
            Contact Xitamin
          </p>

          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Tell us where your business needs momentum.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
            Share your marketplace, website, marketing, or compliance challenge.
            The Xitamin team will review it and connect with a practical next
            step for your brand.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#ff6200] px-6 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-red-600"
            >
              Send inquiry
              <ArrowRight size={16} />
            </a>

            <a
              href={contact.whatsapp}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-black text-white transition duration-300 hover:border-orange-300/50 hover:bg-white/[0.08]"
            >
              <MessageCircle size={16} />
              WhatsApp now
            </a>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-zinc-950">
            <PhoneCall size={26} />
          </div>

          <h2 className="mt-6 text-2xl font-black">Fastest ways to reach us</h2>

          <div className="mt-5 grid gap-3">
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-orange-300/50"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">
                Call
              </p>
              <p className="mt-1 font-black text-white">{contact.phone}</p>
            </a>

            <a
              href={contact.emailHref}
              className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-orange-300/50"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">
                Email
              </p>
              <p className="mt-1 font-black text-white">{contact.email}</p>
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
