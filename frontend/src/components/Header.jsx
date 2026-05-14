import { useEffect, useState } from 'react'
import { navItems } from '../data/siteContent'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 18)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all  duration-500 ${isScrolled
          ? 'border-b border-zinc-200/70 bg-white/10 shadow-lg shadow-zinc-900/5 backdrop-blur-xl'
          : 'bg-transparent'
        }`}
    >
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav
        className="mx-auto flex max-w-7xl items-center  justify-between px-5 py-4 lg:px-8"
        aria-label="Primary"
      >
        {/* Logo */}
        <div className='h-15 w-60 border-black'>
          <img className='w-full h-full object-cover' src="blackLogo.png" alt="" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 rounded-2xl border border-zinc-200/80 bg-white/10 p-1.5 shadow-sm backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-2.5 text-sm font-bold text-zinc-600 transition-all duration-300 hover:bg-zinc-950 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* CTA */}
          <a
            href="#contact"
            className="premium-button hidden rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-zinc-950/15 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 lg:inline-flex"
          >
            Request Callback
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-950 shadow-sm transition hover:border-emerald-300 hover:text-emerald-600 lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition duration-300 ${mobileMenu ? 'translate-y-2 rotate-45' : ''
                  }`}
              ></span>

              <span
                className={`h-0.5 w-5 rounded-full bg-current transition duration-300 ${mobileMenu ? 'opacity-0' : ''
                  }`}
              ></span>

              <span
                className={`h-0.5 w-5 rounded-full bg-current transition duration-300 ${mobileMenu ? '-translate-y-2 -rotate-45' : ''
                  }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${mobileMenu
            ? 'max-h-125 border-t border-zinc-200 bg-white/95 opacity-100 backdrop-blur-2xl'
            : 'max-h-0 opacity-0'
          }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              className="rounded-2xl px-4 py-3 text-sm font-bold text-zinc-700 transition-all duration-300 hover:bg-zinc-950 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileMenu(false)}
            className="mt-3 rounded-2xl bg-zinc-950 px-5 py-3 text-center text-sm font-black text-white transition-all duration-300 hover:bg-emerald-600"
          >
            Get a plan
          </a>
        </div>
      </div>
    </header>
  )
}