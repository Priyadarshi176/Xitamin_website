import { useState } from 'react'
import {
  HelpCircle,
  Sparkles,
  ShieldCheck,
  MessagesSquare,
  ArrowRight,
} from 'lucide-react'

import { faqs } from '../data/siteContent'
import SectionHeader from './SectionHeader'

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0)

  function toggleFaq(index) {
    setActiveIndex((current) => (current === index ? null : index))
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f8f8f4] px-5 py-24 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-lime-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.42fr_0.58fr]">
          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="FAQ"
              title="Questions before scaling your marketplace business"
              description="Everything sellers usually ask about onboarding, operations, SEO, ads, compliance, websites, and growth systems."
            />

            {/* Main Support Card */}
            <div className="motion-card relative mt-10 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/80 p-8 shadow-2xl shadow-zinc-900/5 backdrop-blur-2xl">
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-400/10 via-lime-200/5 to-transparent"></div>

              {/* Decorative circles */}
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-emerald-200/40"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-zinc-950 text-white shadow-xl shadow-zinc-900/15">
                    <MessagesSquare size={30} />
                  </div>

                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-600">
                      Dedicated support
                    </p>

                    <h3 className="mt-1 text-3xl font-black tracking-tight text-zinc-950">
                      Need direct guidance?
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-zinc-600">
                  Connect with Xitamin specialists for marketplace management,
                  Amazon SPN support, SEO, ads, finance, legal compliance, and
                  web development solutions.
                </p>

                {/* Features */}
                <div className="mt-8 grid gap-4">
                  {[
                    'Marketplace growth experts',
                    'Fast onboarding process',
                    'Performance-focused execution',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                        <ShieldCheck size={18} />
                      </div>

                      <span className="text-sm font-bold text-zinc-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="premium-button mt-8 inline-flex items-center gap-3 rounded-2xl bg-zinc-950 px-6 py-3.5 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-emerald-600"
                >
                  Talk with team
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Floating mini cards */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="motion-card rounded-3xl border border-zinc-200 bg-white/70 p-5 shadow-lg shadow-zinc-900/5 backdrop-blur-xl">
                <p className="text-3xl font-black text-zinc-950">500+</p>

                <p className="mt-2 text-sm font-bold text-zinc-600">
                  Seller brands supported
                </p>
              </div>

              <div className="motion-card rounded-3xl border border-zinc-200 bg-white/70 p-5 shadow-lg shadow-zinc-900/5 backdrop-blur-xl">
                <p className="text-3xl font-black text-zinc-950">24/7</p>

                <p className="mt-2 text-sm font-bold text-zinc-600">
                  Growth support system
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FAQ */}
          <div className="grid gap-5">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index

              return (
                <article
                  key={faq.question}
                  className={`motion-card group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                    isActive
                      ? 'border-emerald-300 bg-white shadow-2xl shadow-emerald-100/50'
                      : 'border-zinc-200 bg-white/80 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-zinc-900/5'
                  }`}
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br from-emerald-400/10 via-lime-200/5 to-transparent transition duration-500 ${
                      isActive
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  <button
                    onClick={() => toggleFaq(index)}
                    className="relative z-10 flex w-full items-start gap-4 p-5 text-left"
                  >
                    {/* Icon */}
                    <div className="relative shrink-0">
  {/* Glow */}
  <div
    className={`absolute inset-0 rounded-2xl blur-xl transition duration-500 ${
      isActive
        ? 'bg-emerald-300/40'
        : 'bg-zinc-200/40 group-hover:bg-emerald-200/40'
    }`}
  />

  {/* Main Icon */}
  <div
    className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-500 ${
      isActive
        ? 'border-emerald-200 bg-white shadow-xl shadow-emerald-100'
        : 'border-zinc-200 bg-white/90'
    }`}
  >
    {/* Animated Ring */}
    <div className="absolute inset-0 rounded-2xl border border-emerald-300/40 animate-ping opacity-30"></div>

    {/* Question Icon */}
    <div
      className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
        isActive
          ? 'bg-emerald-600 text-white'
          : 'bg-zinc-950 text-white group-hover:bg-emerald-600'
      }`}
    >
      <HelpCircle size={15} strokeWidth={2.8} />
    </div>
  </div>
</div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="mb-3 inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-600">
                            Question {String(index + 1).padStart(2, '0')}
                          </span>

                          <h3
                            className={`max-w-2xl text-base font-black leading-7 transition-colors duration-300 sm:text-lg ${
                              isActive
                                ? 'text-emerald-700'
                                : 'text-zinc-950'
                            }`}
                          >
                            {faq.question}
                          </h3>
                        </div>

                        {/* Toggle */}
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 ${
                            isActive
                              ? 'rotate-180 border-emerald-200 bg-emerald-50 text-emerald-700'
                              : 'border-zinc-200 bg-white text-zinc-500'
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25L12 15.75 4.5 8.25"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Answer */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isActive
                            ? 'mt-6 grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-zinc-200 pt-4">
                            <p className="max-w-3xl text-sm leading-7 text-zinc-600">
                              {faq.answer}
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-700">
                                Trusted Support
                              </span>

                              <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-zinc-600">
                                Seller Growth
                              </span>

                              <span className="rounded-full bg-lime-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-lime-700">
                                Marketplace Experts
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}