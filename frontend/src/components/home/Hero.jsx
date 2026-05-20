import { useEffect, useRef, useState } from 'react'
import heroGraphic from '../../assets/hero.png'
import { heroRotatingWords, heroServices, heroSignals, stats } from '../../data/siteContent'
import LogoModel from '../LogoModel'

export default function Hero() {
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const [panelStyle, setPanelStyle] = useState({})
  const panelRef = useRef(null)
  const wordCount = heroRotatingWords.length
  const activeWord = heroRotatingWords[activeWordIndex] || 'seller brands'

  useEffect(() => {
    if (wordCount < 2) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setActiveWordIndex((current) => (current + 1) % wordCount)
    }, 2100)

    return () => window.clearInterval(interval)
  }, [wordCount])

  function handlePanelMove(event) {
    const panel = panelRef.current

    if (!panel) {
      return
    }

    const rect = panel.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateY = ((x / rect.width) - 0.5) * 13
    const rotateX = ((0.5 - y / rect.height) * 13)

    setPanelStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
      '--spotlight-x': `${x}px`,
      '--spotlight-y': `${y}px`,
    })
  }

  function resetPanel() {
    setPanelStyle({
      transform: 'rotateX(0deg) rotateY(0deg) translateZ(0)',
      '--spotlight-x': '50%',
      '--spotlight-y': '50%',
    })
  }

  return (
    <section id="home" className="relative overflow-hidden bg-[#f7f6ef]">
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="hero-ambient hero-ambient-one" />
      <div className="hero-ambient hero-ambient-two" />
      <div className="relative mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div>
          <p className="hero-kicker inline-flex rounded-lg border border-orange-200 bg-white/90 px-3 py-1.5 text-sm font-semibold text-orange-700 shadow-sm">
            Amazon, Flipkart, SEO, finance, legal, and web development services
          </p>
          <h1 className="hero-title mt-6 max-w-4xl text-5xl font-black leading-[0.96] text-zinc-950 sm:text-6xl lg:text-7xl">
            E-commerce growth systems for{' '}
            <span className="dynamic-word-wrap" aria-live="polite">
              <span key={activeWord} className="dynamic-word">
                {activeWord}
              </span>
            </span>
          </h1>
          <p className="hero-copy mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
            Xitamin helps online sellers scale with Amazon management, Flipkart account support, marketplace SEO,
            digital marketing, accounting, legal compliance, and conversion-focused website development.
          </p>

          <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="premium-button rounded-lg bg-zinc-950 px-6 py-3.5 text-center text-sm font-bold text-white shadow-xl shadow-zinc-950/20 transition hover:-translate-y-0.5 hover:bg-zinc-800"
            >
              Explore growth services
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-zinc-300 bg-white/90 px-6 py-3.5 text-center text-sm font-bold text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-950"
            >
              Book a consultation
            </a>
          </div>

          {/* <div>
            <LogoModel/>
          </div> */}

          {/* <div className="hero-tags mt-10 flex flex-wrap gap-2" aria-label="Xitamin service keywords">
            {heroServices.map((service) => (
              <span key={service} className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-zinc-700 shadow-sm">
                {service}
              </span>
            ))}
          </div> */}
        </div>

        <div>
          <LogoModel/>
        </div>

        {/* <div className="hero-perspective relative">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div
            ref={panelRef}
            style={panelStyle}
            onMouseMove={handlePanelMove}
            onMouseLeave={resetPanel}
            className="hero-panel hero-panel-3d motion-card relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-5 text-white shadow-2xl shadow-zinc-950/25 sm:p-6"
          >
            <div className="hero-spotlight" />
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">Xitamin command center</p>
                <p className="mt-1 text-sm text-zinc-400">Seller growth overview</p>
              </div>
              <img
                src={heroGraphic}
                alt="Layered growth systems graphic for Xitamin"
                className="float-slow h-16 w-16 object-contain sm:h-20 sm:w-20"
                loading="eager"
              />
            </div>

            <div className="grid gap-5 py-6 lg:grid-cols-[1fr_0.82fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-300">Growth desk</p>
                <h2 className="mt-3 text-3xl font-black leading-tight">
                  One operating team for serious online sellers.
                </h2>
                <div className="mt-6 grid gap-3">
                  {heroSignals.map((signal) => (
                    <div key={signal.label} className="hero-signal flex items-center justify-between border-b border-white/10 pb-3">
                      <span>
                        <span className="block text-sm font-semibold text-zinc-300">{signal.label}</span>
                        <span className="mt-1 block text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                          {signal.state}
                        </span>
                      </span>
                      <span className="rounded-md bg-orange-400/10 px-2.5 py-1 text-xs font-black text-orange-300">
                        {signal.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-l border-orange-300/40 pl-4">
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-sm leading-5 text-zinc-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3" aria-label="Growth workflow">
              {['Audit', 'Optimize', 'Scale'].map((item, index) => (
                <div key={item} className="rounded-lg bg-white/5 p-4">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-orange-300">
                    0{index + 1}
                  </span>
                  <span className="font-black text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {['Amazon', 'Flipkart', 'SEO'].map((item) => (
              <div key={item} className="hero-mini-card rounded-lg border border-zinc-200 bg-white/85 p-3 text-center text-sm font-black text-zinc-900 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
