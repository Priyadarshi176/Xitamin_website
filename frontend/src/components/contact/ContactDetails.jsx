import { Building2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

import { contact } from '../../data/siteContent'

const channels = [
  {
    icon: Phone,
    label: 'Phone',
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: contact.emailHref,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with the growth desk',
    href: contact.whatsapp,
  },
]

const locations = ['Patna HQ', 'Delhi branch', 'Mumbai branch', 'Ahmedabad branch']

export default function ContactDetails() {
  return (
    <section className="bg-[#f5f5f5] px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
            Contact details
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-zinc-950 sm:text-5xl">
            Reach the right team without bouncing between vendors.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600">
            Whether you need Amazon SPN support, Flipkart growth, SEO, website
            development, finance, legal, or digital marketing, start with one
            conversation and we will route the work correctly.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-4 sm:grid-cols-3">
            {channels.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="motion-card rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:border-orange-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                    <Icon size={22} />
                  </div>
                  <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-orange-600">
                    {item.label}
                  </p>
                  <p className="mt-2 break-words text-sm font-black leading-6 text-zinc-950">
                    {item.value}
                  </p>
                </a>
              )
            })}
          </div>

          <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-lg shadow-black/5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-700">
                <Building2 size={22} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-600">
                  Presence
                </p>
                <h3 className="text-xl font-black text-zinc-950">
                  Multi-city support across India
                </h3>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {locations.map((location) => (
                <div
                  key={location}
                  className="flex items-center gap-3 rounded-2xl bg-[#f8f8f4] px-4 py-3 text-sm font-black text-zinc-800"
                >
                  <MapPin size={17} className="text-[#ff6200]" />
                  {location}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
