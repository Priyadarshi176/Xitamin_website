// src/components/about/AboutOverview.jsx

import {
  ArrowUpRight,
  BookOpenText,
  HandCoins,
  Layers3,
  Sparkles,
} from 'lucide-react'

import Reveal from '../motion/Reveal'

const cards = [
  {
    icon: HandCoins,
    title: 'Organic marketplace growth',
    description:
      'Listing quality, ranking work, catalog hygiene, content, and campaign discipline built to improve durable sales momentum.',
  },
  {
    icon: BookOpenText,
    title: 'Transparent execution',
    description:
      'Clear scopes, written commitments, timelines, reporting rhythms, and accountable teams keep every engagement easy to track.',
  },
  {
    icon: Layers3,
    title: 'Connected service teams',
    description:
      'Marketplace, marketing, website, finance, legal, and compliance support work together so growth does not get fragmented.',
  },
]

export default function AboutOverview() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] px-5 py-20 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#ff6200]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16">
        {/* Top Section */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1fr]">
          {/* Heading */}
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#ff6200] shadow-sm">
                <Sparkles size={14} />
                Overview
              </div>

              <h2 className="mt-6 max-w-md text-4xl font-black leading-[1.05] tracking-tight text-black sm:text-5xl">
                From storefront fixes to full growth operations.
              </h2>
            </div>
          </Reveal>

          {/* Description Card */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-xl shadow-black/5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6200]/5 via-transparent to-red-500/5" />

              <div className="relative z-10">
                <p className="text-base leading-8 text-zinc-700">
                  Xitamin is an end-to-end e-commerce partner for sellers who
                  need more than isolated tasks. We combine marketplace
                  operations, SEO, content, digital marketing, web development,
                  accounting, legal support, and account management into one
                  practical operating rhythm.
                </p>

                <p className="mt-5 text-base leading-8 text-zinc-700">
                  The goal is simple: better visibility, cleaner operations,
                  stronger conversion, and a team that keeps improving the
                  system after launch.
                </p>

                {/* Tags */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    'SEO',
                    'Organic Growth',
                    'Marketplace',
                    'Web Development',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-zinc-200 bg-[#fafafa] px-4 py-2 text-xs font-bold text-zinc-700 transition hover:border-[#ff6200] hover:text-[#ff6200]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Cards */}
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon

            return (
              <Reveal key={card.title} delay={index * 120}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-lg shadow-black/5">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6200]/5 to-red-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white transition duration-300 group-hover:bg-[#ff6200]">
                      <Icon size={30} strokeWidth={2.2} />
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-2xl font-black leading-tight text-black">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-base leading-8 text-zinc-700">
                      {card.description}
                    </p>

                    {/* Bottom Link */}
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#ff6200]">
                      Learn More
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
