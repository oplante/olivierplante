import { awards, awardPhotos } from '../data'

export default function Awards() {
  const [first, ...rest] = awardPhotos

  return (
    <section id="awards" className="px-5 sm:px-8 py-20 sm:py-28 scroll-mt-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="hairline-t pt-4 flex items-baseline justify-between reveal">
          <h2 className="label !text-[color:var(--ink)]">Awards & Recognition</h2>
          <span className="label">2016 — 2024</span>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Award list */}
          <div className="lg:col-span-4">
            <ul className="reveal">
              {awards.map((a) => (
                <li
                  key={a.name}
                  className="py-4 border-b border-[color:var(--line)] flex items-baseline justify-between gap-4"
                >
                  <span className="font-display text-xl sm:text-2xl font-light">{a.name}</span>
                  {a.detail && <span className="label text-right">{a.detail}</span>}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo record: asymmetric editorial grid */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-4 sm:gap-5 auto-rows-min">
            <figure className="reveal group col-span-2 sm:col-span-1 sm:row-span-2 overflow-hidden">
              <div className="overflow-hidden bg-[color:var(--ink)]/5 h-full">
                <img
                  src={first.src}
                  alt={first.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 label">{first.caption}</figcaption>
            </figure>
            {rest.map((p, i) => (
              <figure
                key={p.src}
                className="reveal group overflow-hidden"
                style={{ ['--reveal-delay' as string]: `${(i + 1) * 70}ms` }}
              >
                <div className="overflow-hidden bg-[color:var(--ink)]/5">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 label">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
