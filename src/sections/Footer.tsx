import { CALENDAR_URL, LINKEDIN_URL } from '../data'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[color:var(--ink)] text-[color:var(--paper)] px-5 sm:px-8 pt-20 sm:pt-28 pb-10 scroll-mt-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="label !text-white/40 reveal">Contact</p>

        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noreferrer"
          className="reveal group mt-8 block font-display font-light tracking-[-0.02em] leading-[1.05] text-[13vw] sm:text-[9vw] lg:text-[7vw]"
          style={{ ['--reveal-delay' as string]: '80ms' }}
        >
          <span className="inline-block transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-4">
            Book a meeting
            <span className="text-[color:var(--accent)]">.</span>
            <span className="ml-4 align-top text-[0.5em] text-white/40 transition-colors duration-300 group-hover:text-[color:var(--accent)]">
              ↗
            </span>
          </span>
        </a>

        <div className="mt-14 sm:mt-20 border-t border-white/15 pt-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <p className="label !text-white/40">© {new Date().getFullYear()} Olivier Plante — London</p>
          <div className="flex items-center gap-8">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="me noreferrer"
              className="label link-sweep !text-white/70"
            >
              LinkedIn ↗
            </a>
            <a href="#top" className="label link-sweep !text-white/70">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
