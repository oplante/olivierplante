import { useEffect, useState } from 'react'
import { CALENDAR_URL } from '../data'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      // Hide on scroll down past 400px, reveal on scroll up
      setHidden(y > 400 && y > last)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
        hidden && !open ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div
        className={`transition-colors duration-500 ${
          scrolled || open
            ? 'bg-[color:var(--paper)]/90 backdrop-blur-md border-b border-[color:var(--line)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8 h-16">
          <a
            href="#top"
            className="font-display text-lg tracking-tight"
            onClick={() => setOpen(false)}
          >
            Olivier Plante
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Site">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="label link-sweep !text-[color:var(--ink-2)]">
                {l.label}
              </a>
            ))}
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noreferrer"
              className="label rounded-full border border-[color:var(--line-strong)] px-4 py-2 !text-[color:var(--ink)] transition-colors duration-300 hover:bg-[color:var(--ink)] hover:!text-[color:var(--paper)]"
            >
              Book a meeting
            </a>
          </nav>

          {/* Mobile menu button: >=44px touch target */}
          <button
            className="md:hidden -mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-px w-5 bg-[color:var(--ink)] transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-[color:var(--ink)] transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[color:var(--paper)] transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-5 pt-10" aria-label="Mobile">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl py-5 border-b border-[color:var(--line)] flex items-baseline gap-4"
            >
              <span className="label !text-[color:var(--accent)]">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--line-strong)] label !text-[color:var(--ink)]"
          >
            Book a meeting
          </a>
        </nav>
      </div>
    </header>
  )
}
