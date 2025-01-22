import { motion } from 'framer-motion';
import photoProfil from '../assets/projects/photoDeProfil.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-background">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
              Alexis Dumolie
            </h1>
            <p className="text-xl sm:text-2xl text-accent mb-8">
              Développeur Full Stack Passionné
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn-primary px-8 py-3 rounded-full text-lg font-medium"
              >
                Voir mes projets
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 rounded-full text-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-background transition-colors"
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
              src={photoProfil} 
              alt="Alexis Dumolie" 
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
