import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import ProjectGrid from './components/ProjectGrid.jsx'
import Reviews from './components/Reviews.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import { projects } from './data/projects.js'



function ScrollProgress() {
  const dotRef = React.useRef(null)

  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? (window.scrollY / h) : 0
      const track = document.querySelector('.scroll-progress')
      if (!track || !dotRef.current) return
      const trackH = track.clientHeight
      const y = Math.max(0, Math.min(trackH - 10, p * (trackH - 10)))
      dotRef.current.style.top = y + 'px'
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [])

  return (
    <div className="scroll-progress">
      <div ref={dotRef} className="scroll-progress-dot" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-600 selection:text-white">
      <Header />
      <ScrollProgress />
      <main>
        <Hero />
        <Section id="projects" title="Projects" subtitle="Things I’ve built & shipped">
          <ProjectGrid projects={projects} />
        </Section>
        <Section id="reviews" title="Reviews" subtitle="Words from folks I’ve worked with">
          <Reviews />
        </Section>
        <Section id="about" title="About Me" subtitle="Who I am & how I work">
          <About />
        </Section>
      </main>
      <Footer />
    </div>
  )
}