// src/components/about/AboutMission.jsx

import { BadgeCheck, ChartNoAxesCombined, Goal, Handshake } from 'lucide-react'

const pillars = [
  {
    icon: Goal,
    title: 'Mission',
    text: 'Help businesses grow through scalable systems, strategic execution, and performance-driven support.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Vision',
    text: 'Build one of India’s most trusted growth ecosystems for marketplace-first and D2C brands.',
  },
  {
    icon: Handshake,
    title: 'Promise',
    text: 'Keep the work transparent with practical deliverables, regular communication, and measurable progress.',
  },
]

export default function AboutMission() {
  return (
    <section className="overflow-hidden bg-black px-5 py-24 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Mission & Vision
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            Built for brands that need consistent progress, not scattered tasks.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-300">
            At <span className="font-black text-white">Xitamin</span>, growth is
            treated like an operating system: strategy, execution, reporting,
            and improvement working in the same direction.
          </p>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <BadgeCheck className="mt-1 shrink-0 text-[#ff6200]" />
            <p className="text-sm font-semibold leading-6 text-zinc-300">
              Recognized by Amazon and Unicommerce, with work shaped around
              innovation, transparency, and long-term client value.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          {pillars.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="motion-card rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-white text-zinc-950">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-zinc-300">{item.text}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className="mx-auto mt-20 h-px max-w-7xl bg-linear-to-r from-transparent via-red-500 to-transparent" />
    </section>
  )
}
