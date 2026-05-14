import { reasons, testimonial } from '../data/siteContent'
import SectionHeader from './SectionHeader'

export default function WhyChoose() {
  return (
    <section className="bg-zinc-950 px-5 py-24 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionHeader
            eyebrow="Why Xitamin"
            title="Built for long-term marketplace outcomes"
            description="Instead of selling isolated tasks, the experience is positioned around accountable growth systems for ambitious e-commerce brands."
            tone="dark"
          />
          <figure className="mt-10 border-l-2 border-emerald-300 pl-5">
            <blockquote className="text-xl font-semibold leading-8 text-white">{testimonial.quote}</blockquote>
            <figcaption className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">
              {testimonial.author} / {testimonial.role}
            </figcaption>
          </figure>
        </div>

        <div className="grid gap-4">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="motion-card grid gap-5 rounded-lg border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:border-emerald-300/50 hover:bg-white/[0.09] sm:grid-cols-[4rem_1fr]"
            >
              <div className="grid h-14 w-14 place-items-center rounded-lg bg-emerald-300 text-lg font-black text-zinc-950">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-xl font-black">{reason.title}</h3>
                <p className="mt-2 leading-7 text-zinc-300">{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
