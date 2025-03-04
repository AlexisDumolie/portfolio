import { motion } from 'framer-motion';
import photoProfil from '../assets/projects/photoDeProfil.jpg';
import photoProfilRetro from '../assets/projects/photoDeProfil-retro.jpg';
import useKonamiCode from '../hooks/useKonamiCode';

const Hero = () => {
  const isRetro = useKonamiCode();

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-transparent overflow-hidden relative">
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6"
            >
              Alexis Dumolie
            </h1>
            <p 
              className="text-xl sm:text-2xl text-accent mb-8"
            >
              Développeur Passionné !
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-[var(--color-coffee)] text-white px-8 py-3 rounded-full text-lg font-medium
                         transition-all duration-300 hover:bg-[var(--color-mocha)]"
              >
                Voir mes projets
              </motion.a>
              <motion.a
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: isRetro ? 'var(--color-primary)' : 'var(--color-coffee)',
                  color: 'white'
                }}
                initial={false}
                animate={{ 
                  color: isRetro ? 'var(--color-primary)' : 'var(--color-coffee)',
                  borderColor: isRetro ? 'var(--color-primary)' : 'var(--color-coffee)'
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 rounded-full text-lg font-medium transition-all duration-100 border-2"
              >
                Me contacter
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <img 
              src={ isRetro ? photoProfilRetro : photoProfil} 
              alt="Alexis Dumolie" 
              className="w-[80%] h-[80%] object-cover rounded-full border-none profile-picture"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
