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
    <div className={`relative min-h-screen w-full ${isRetroMode ? 'retro' : ''}`}>
        {!isRetroMode}
        <div className="relative z-10 bg-transparent">
          <Navbar />
          <main className="bg-transparent">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
  );
}

export default App
