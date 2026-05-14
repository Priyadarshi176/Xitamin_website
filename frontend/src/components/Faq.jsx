import { useState } from 'react'
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
      className="relative overflow-hidden bg-[#fcfcf8] px-5 py-24 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-lime-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers to common growth and marketplace questions"
          description="Everything you need to know about Xitamin services, operations, marketplace growth systems, and onboarding workflows."
          align="center"
        />

        <div className="mt-16 grid items-start gap-5 lg:grid-cols-2">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index

            return (
              <article
                key={faq.question}
                className={`motion-card group overflow-hidden rounded-3xl border bg-white/80 backdrop-blur-xl transition-all duration-500 ${
                  isActive
                    ? 'border-emerald-300 shadow-2xl shadow-emerald-100/40'
                    : 'border-zinc-200 hover:border-emerald-200 hover:shadow-xl hover:shadow-zinc-900/5'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-start gap-5 p-6 text-left"
                >
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-300/40'
                        : 'bg-zinc-100 text-zinc-700 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.2}
                      stroke="currentColor"
                      className="h-7 w-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18h.01M9.09 9a3 3 0 115.82 1c0 2-3 3-3 3"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className={`text-xl font-black leading-snug transition-colors duration-300 ${
                          isActive
                            ? 'text-emerald-700'
                            : 'text-zinc-950'
                        }`}
                      >
                        {faq.question}
                      </h3>

                      {/* Plus / Minus */}
                      <div
                        className={`relative mt-1 h-6 w-6 shrink-0 transition-transform duration-500 ${
                          isActive ? 'rotate-180' : ''
                        }`}
                      >
                        <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"></span>

                        {!isActive && (
                          <span className="absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"></span>
                        )}
                      </div>
                    </div>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-500 ${
                        isActive
                          ? 'mt-5 grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pr-6 text-base leading-8 text-zinc-600">
                          {faq.answer}
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

                          <span className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">
                            Marketplace Growth Support
                          </span>
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
    </section>
  )
}