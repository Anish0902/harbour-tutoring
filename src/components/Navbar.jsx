import { useEffect, useState } from 'react'
import Logo from './Logo'
import { CloseIcon, MenuIcon } from './icons'

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

// Highlights whichever section currently sits under the navbar.
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

const sectionIds = NAV_LINKS.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? 'border-harbour-200 shadow-sm' : 'border-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="rounded-lg" onClick={() => setOpen(false)}>
          <Logo />
          <span className="sr-only">Harbour Tutoring home</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === link.id
                    ? 'bg-harbour-100 text-navy-900'
                    : 'text-slate-600 hover:bg-harbour-50 hover:text-navy-900'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-700 lg:inline-block"
        >
          Book a Free Assessment
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-900 hover:bg-harbour-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-harbour-200 bg-white md:hidden">
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={`block rounded-lg px-4 py-3 text-base font-semibold ${
                    active === link.id ? 'bg-harbour-100 text-navy-900' : 'text-slate-700 hover:bg-harbour-50'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-navy-900 px-5 py-3 text-center font-semibold text-white hover:bg-navy-700"
              >
                Book a Free Assessment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
