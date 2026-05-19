import {
  ArrowRight,
  Award,
  Globe2,
  MapPin,
  Sparkles,
} from 'lucide-react'

import Reveal from '../motion/Reveal'

const stats = [
  {
    value: '2000+',
    label: 'Brands Supported',
  },
  {
    value: '50+',
    label: 'Experts',
  },
  {
    value: 'Top 10',
    label: 'SPN Provider',
  },
  {
    value: '2018',
    label: 'Founded',
  },
]

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 text-white lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff6200]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#ff6200] backdrop-blur-xl">
              <Sparkles size={13} />
              About Xitamin
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
              The operating partner behind ambitious
              <span className="block bg-gradient-to-r from-orange-300 via-white to-[#ff6200] bg-clip-text text-transparent">
                e-commerce brands.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              Xitamin helps sellers and D2C teams turn marketplace complexity
              into practical growth systems across Amazon, Flipkart, Myntra,
              Ajio, global marketplaces, SEO, websites, content, and compliance.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#ff6200] px-6 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-red-600"
              >
                Plan my growth
                <ArrowRight size={16} />
              </a>

              <a
                href="#journey"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-black text-white transition duration-300 hover:border-[#ff6200]/40 hover:bg-white/[0.06]"
              >
                View journey
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-300">
                    Growth desk
                  </p>
                  <h2 className="mt-2 text-2xl font-black">Xitamin snapshot</h2>
                </div>
                <Award className="text-[#ff6200]" size={34} />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <h3 className="text-3xl font-black text-white">
                      {item.value}
                    </h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  { icon: Globe2, text: 'Amazon SPN partner and Unicommerce associate' },
                  { icon: MapPin, text: 'Patna HQ with Delhi, Mumbai, and Ahmedabad presence' },
                ].map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.text}
                      className="flex items-start gap-3 rounded-2xl bg-white/[0.04] p-4 text-sm font-semibold leading-6 text-zinc-300"
                    >
                      <Icon size={18} className="mt-0.5 shrink-0 text-[#ff6200]" />
                      {item.text}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
