import Header from '../sections/Header'
import Hero from '../sections/Hero'
import WorkIndex from '../sections/WorkIndex'
import CaseStudy from '../sections/CaseStudy'
import Stats from '../sections/Stats'
import About from '../sections/About'
import Awards from '../sections/Awards'
import Footer from '../sections/Footer'
import { cases } from '../data'
import { useRevealRoot } from '../hooks/useReveal'

export default function Home() {
  const ref = useRevealRoot<HTMLDivElement>()

  return (
    <div ref={ref}>
      <Header />
      <main>
        <Hero />
        <WorkIndex />
        {cases.map((c, i) => (
          <CaseStudy key={c.id} data={c} flip={i % 2 === 1} />
        ))}
        <Stats />
        <About />
        <Awards />
      </main>
      <Footer />
    </div>
  )
}
