import { services } from '../data/siteContent'
import SectionHeader from './SectionHeader'

export default function Services() {
  return (
    <section id="services" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="E-commerce services designed for search, sales, and scale"
          description="From marketplace management to web development, every service is positioned around visibility, conversion, compliance, and measurable growth."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="motion-card group rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-2xl hover:shadow-zinc-900/10"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-zinc-950 text-sm font-black text-white transition group-hover:bg-emerald-600">
                  0{index + 1}
                </span>
                <span className="h-px flex-1 bg-zinc-200" />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-600">{service.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-black text-zinc-950">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">{service.description}</p>
              <p className="mt-6 border-l-2 border-emerald-500 pl-3 text-sm font-black text-zinc-950">{service.metric}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span key={item} className="rounded-md bg-zinc-100 px-3 py-2 text-sm font-semibold text-zinc-700">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
