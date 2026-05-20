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
        </div>

        <div>
          <LogoModel/>
        </div>
      </div>
    </section>
  )
}
