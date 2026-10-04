import { stats } from '../data'

export default function Stats() {
  return (
    <section className="bg-[color:var(--ink)] text-[color:var(--paper)] px-5 sm:px-8 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px]">
        <p className="label !text-white/40 mb-10 reveal">Impact in numbers</p>
        <dl className="grid grid-cols-2 lg:grid-cols-4 border-l border-t border-white/15">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal border-r border-b border-white/15 px-5 sm:px-8 py-8 sm:py-10"
              style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
            >
              <dd className="font-display font-light text-5xl sm:text-6xl lg:text-7xl tracking-[-0.02em]">
                {s.value}
              </dd>
              <dt className="mt-4 text-sm text-white/55 leading-snug">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
