// src/components/Services.jsx

import { useEffect, useState } from 'react'

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Megaphone,
  ShieldCheck,
  Store,
} from 'lucide-react'

import { services } from '../../data/siteContent'
import SectionHeader from '../common/SectionHeader'

const serviceIcons = [
  Store,
  ShieldCheck,
  Megaphone,
  Globe,
]

const gradients = [
  'from-orange-500 via-orange-400 to-orange-300',
  'from-violet-500 via-fuchsia-400 to-red-300',
  'from-sky-500 via-cyan-400 to-blue-300',
  'from-orange-500 via-orange-400 to-orange-300',
]

export default function Services() {
  const [activeSlide, setActiveSlide] = useState(0)

  const sliderServices = [...services, services[0]]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev >= services.length - 1 ? 0 : prev + 1,
      )
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  function nextSlide() {
    setActiveSlide((prev) =>
      prev >= services.length - 1 ? 0 : prev + 1,
    )
  }

  function prevSlide() {
    setActiveSlide((prev) =>
      prev === 0 ? services.length - 1 : prev - 1,
    )
  }

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-5 py-24 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
      <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Growth systems designed for modern e-commerce brands"
          description="From marketplace scaling to branding, marketing, finance, and technology — every service is built to increase visibility, sales, and long-term growth."
          align="center"
        />

        {/* Slider */}
        <div className="relative mt-12 overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${activeSlide * 50}%)`,
            }}
          >
            {sliderServices.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length]

              return (
                <div
                  key={`${service.title}-${index}`}
                  className="min-w-full px-2 lg:min-w-1/2"
                >
                  <article className="group relative h-full overflow-hidden rounded-[1.6rem] border border-zinc-200 bg-zinc-950 shadow-xl shadow-zinc-900/10 transition duration-500 hover:-translate-y-2">

                    {/* Glow */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${gradients[index % gradients.length]
                        } opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`}
                    />

                    <div className="relative grid min-h-[360px] items-center gap-6 p-5 lg:p-7">

                      {/* Top */}
                      <div className="flex items-start justify-between gap-5">

                        <div>
                          <div
                            className={`inline-flex rounded-full bg-linear-to-r ${gradients[index % gradients.length]
                              } px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-950`}
                          >
                            {service.eyebrow}
                          </div>

                          <h2 className="mt-4 max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                            {service.title}
                          </h2>
                        </div>

                        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-zinc-950 shadow-xl">
                          <Icon size={28} strokeWidth={2.2} />
                        </div>

                      </div>

                      {/* Description */}
                      <p className="max-w-xl text-sm leading-6 text-zinc-300">
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2.5">
                        {service.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white backdrop-blur-xl"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Bottom */}
                      <div className="mt-auto flex items-center justify-between gap-5 border-t border-white/10 pt-5">

                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                            Core Metric
                          </p>

                          <p className="mt-1 text-base font-black text-orange-300">
                            {service.metric}
                          </p>
                        </div>

                        <button className="premium-button inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-black text-zinc-950 transition hover:-translate-y-1 hover:bg-orange-300">
                          Explore
                          <ArrowRight size={16} />
                        </button>

                      </div>
                    </div>
                  </article>
                </div>
              )
            })}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-2xl border border-zinc-200 bg-white text-zinc-950 shadow-xl transition hover:scale-110 hover:bg-orange-300 lg:grid"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-2xl border border-zinc-200 bg-white text-zinc-950 shadow-xl transition hover:scale-110 hover:bg-orange-300 lg:grid"
          >
            <ChevronRight size={22} />
          </button>

          {/* Indicators */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === index
                    ? 'w-10 bg-orange-500'
                    : 'w-2.5 bg-zinc-300 hover:bg-zinc-400'
                  }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}