import { cases } from '../data'

export default function WorkIndex() {
  return (
    <section id="work" className="px-5 sm:px-8 pb-20 sm:pb-28 scroll-mt-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="hairline-t pt-4 flex items-baseline justify-between reveal">
          <h2 className="label !text-[color:var(--ink)]">Selected Work</h2>
          <span className="label">2011 — Present</span>
        </div>

        <ol className="mt-8 sm:mt-12">
          {cases.map((c, i) => (
            <li key={c.id} className="reveal" style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}>
              <a
                href={`#case-${c.id}`}
                className="group grid grid-cols-[3rem_1fr] sm:grid-cols-[5rem_1fr_auto] items-baseline gap-x-4 py-6 sm:py-8 border-b border-[color:var(--line)] transition-colors duration-300 hover:bg-[color:var(--ink)]/[0.025]"
              >
                <span className="font-display text-sm sm:text-base text-[color:var(--ink-3)] transition-colors duration-300 group-hover:text-[color:var(--accent)]">
                  {c.num}
                </span>
                <span>
                  <span className="font-display font-light tracking-[-0.01em] leading-tight text-3xl sm:text-5xl lg:text-6xl block transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
                    {c.company}
                  </span>
                  <span className="mt-2 block label">
                    {c.role} · {c.period}
                  </span>
                </span>
                <span className="hidden sm:block font-display text-2xl text-[color:var(--ink-3)] transition-all duration-500 group-hover:text-[color:var(--ink)] group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
