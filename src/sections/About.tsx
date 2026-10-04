import { education, languages } from '../data'

export default function About() {
  return (
    <section id="about" className="px-5 sm:px-8 py-20 sm:py-28 scroll-mt-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="hairline-t pt-4 reveal">
          <h2 className="label !text-[color:var(--ink)]">About</h2>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <figure className="reveal lg:col-span-4">
            <div className="overflow-hidden bg-[color:var(--ink)]/5">
              <img
                src={`${import.meta.env.BASE_URL}photos/olivier-plante.jpg`}
                alt="Portrait of Olivier Plante"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <figcaption className="mt-3 label">London, United Kingdom</figcaption>
          </figure>

          <div className="lg:col-span-8">
            <p
              className="reveal font-display font-light text-2xl sm:text-3xl lg:text-[2.4rem] leading-[1.3] tracking-[-0.01em] max-w-[26ch]"
              style={{ ['--reveal-delay' as string]: '80ms' }}
            >
              I take a product from the roadmap to the user stories to the team
              that ships it — and I keep the person using it at the center of
              every trade-off.
            </p>

            {/* Education */}
            <div className="mt-14 reveal" style={{ ['--reveal-delay' as string]: '140ms' }}>
              <h3 className="label mb-6">Education</h3>
              <ul>
                {education.map((e) => (
                  <li
                    key={e.degree}
                    className="grid sm:grid-cols-[10rem_1fr_auto] gap-1 sm:gap-6 py-5 border-b border-[color:var(--line)] items-baseline"
                  >
                    <span className="label !text-[color:var(--accent)]">{e.period}</span>
                    <span>
                      <span className="block font-medium">{e.school}</span>
                      <span className="block text-sm text-[color:var(--ink-3)] mt-1 leading-relaxed">
                        {e.degree}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="mt-12 reveal" style={{ ['--reveal-delay' as string]: '200ms' }}>
              <h3 className="label mb-6">Languages</h3>
              <ul className="flex flex-wrap gap-x-10 gap-y-4">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-baseline gap-3">
                    <span className="font-medium">{l.name}</span>
                    <span className="label">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
