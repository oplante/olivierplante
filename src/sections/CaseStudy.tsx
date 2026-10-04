import type { CaseStudy as CaseStudyData } from '../data'

export default function CaseStudy({ data, flip }: { data: CaseStudyData; flip: boolean }) {
  const hasImages = data.images.length > 0
  const twoUp = data.images.length === 2

  return (
    <article id={`case-${data.id}`} className="px-5 sm:px-8 py-16 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-[1400px]">
        {/* Meta header */}
        <div className="hairline-t pt-4 grid grid-cols-2 sm:grid-cols-4 gap-y-2 reveal">
          <span className="label !text-[color:var(--accent)]">{data.num}</span>
          <span className="label">{data.org}</span>
          <span className="label">{data.period}</span>
          <span className="label text-right sm:text-left">{data.place}</span>
        </div>

        {/* Title + body: asymmetric split */}
        <div
          className={`mt-10 sm:mt-14 grid gap-10 lg:gap-16 ${
            hasImages ? 'lg:grid-cols-12' : 'lg:grid-cols-12'
          }`}
        >
          <div className={`lg:col-span-5 ${flip && hasImages ? 'lg:order-2' : ''}`}>
            <h3 className="reveal font-display font-light tracking-[-0.015em] leading-[1.05] text-4xl sm:text-5xl lg:text-[3.6rem]">
              {data.company}
            </h3>
            <p className="reveal mt-3 label !text-[color:var(--ink-2)]" style={{ ['--reveal-delay' as string]: '80ms' }}>
              {data.role}
            </p>
          </div>

          <div className={`lg:col-span-7 ${flip && hasImages ? 'lg:order-1' : ''}`}>
            {data.paragraphs.map((p, i) => (
              <p
                key={i}
                className="reveal text-base sm:text-lg leading-relaxed text-[color:var(--ink-2)] max-w-[62ch] mb-5"
                style={{ ['--reveal-delay' as string]: `${120 + i * 80}ms` }}
              >
                {p}
              </p>
            ))}
            {data.note && (
              <p className="reveal mt-6 border-l-2 border-[color:var(--accent)] pl-4 text-sm leading-relaxed text-[color:var(--ink-3)] max-w-[56ch]">
                {data.note}
              </p>
            )}

            {data.logos && (
              <div className="reveal mt-10">
                <p className="label mb-5">{data.logosLabel}</p>
                <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
                  {data.logos.map((l) => (
                    <li key={l.alt}>
                      <img
                        src={l.src}
                        alt={l.alt}
                        loading="lazy"
                        className="h-6 sm:h-7 w-auto max-w-[120px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Imagery */}
        {hasImages && (
          <div
            className={`mt-12 sm:mt-16 grid gap-5 ${
              twoUp ? 'sm:grid-cols-2' : 'grid-cols-1'
            } ${twoUp ? '' : 'lg:px-[8%]'}`}
          >
            {data.images.map((img, i) => (
              <figure
                key={img.src}
                className="reveal group overflow-hidden"
                style={{ ['--reveal-delay' as string]: `${i * 100}ms` }}
              >
                <div className="overflow-hidden bg-[color:var(--ink)]/5">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
                {img.caption && (
                  <figcaption className="mt-3 label">{img.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
