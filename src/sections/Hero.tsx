import { useEffect, useState } from 'react'
import { CALENDAR_URL, LINKEDIN_URL } from '../data'

const lines = ['Product manager for', 'input, operating systems,', 'and interfaces.']

export default function Hero() {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const t = requestAnimationFrame(() => setInView(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <section id="top" className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 px-5 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <p className="label mb-8 sm:mb-10">Olivier Plante — London</p>

        <h1 className="font-display font-light tracking-[-0.02em] leading-[1.04] text-[12.5vw] sm:text-[8vw] lg:text-[6.4vw]">
          {lines.map((line, i) => (
            <span
              key={line}
              className={`mask-line ${inView ? 'is-in' : ''}`}
              style={{ ['--reveal-delay' as string]: `${i * 120}ms` }}
            >
              <span>{line}</span>
            </span>
          ))}
        </h1>

        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <p className="max-w-md text-[color:var(--ink-2)] text-base sm:text-lg leading-relaxed">
            Fourteen years shipping input technologies, mobile keyboards, and
            operating-system software — from roadmap to user stories to the team
            that ships it.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noreferrer"
              className="label link-sweep !text-[color:var(--ink)]"
            >
              Book a meeting ↗
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="me noreferrer"
              className="label link-sweep !text-[color:var(--ink-3)]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
