import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Bonjour, je suis <span className="text-primary">Votre Nom</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12">
            Développeur Web Passionné
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me contacter
            </motion.a>
            <motion.a
              href="#projects"
              className="bg-white text-primary px-8 py-3 rounded-lg font-medium border-2 border-primary hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir mes projets
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
