import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import { SkillsMarquee, Experience, Education, Contact } from './components/index.jsx'

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <Nav dark={dark} setDark={setDark} />
      <main style={{ paddingTop: 62 }}>
        <Hero />
        <SkillsMarquee dark={dark} />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer style={{ padding: '1.5rem', textAlign: 'center', fontSize: '.72rem', color: 'var(--text2)', borderTop: '1px solid var(--border)' }}>
        Giri Dontala · Frontend Developer © 2026
      </footer>
    </>
  )
}
