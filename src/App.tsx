import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useKonamiCode from './hooks/useKonamiCode'
import './styles/RetroMode.css'

function App() {
  const isRetroMode = useKonamiCode();

  return (
    <div className={`min-h-screen w-full flex flex-col items-center bg-background ${isRetroMode ? 'retro' : ''}`}>
      <Navbar />
      <main className="w-full flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
