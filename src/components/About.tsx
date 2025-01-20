import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            À Propos de Moi
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Développeur Passionné
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Je suis un développeur web passionné par la création d'expériences numériques 
              innovantes et intuitives. Mon parcours m'a permis d'acquérir une solide 
              expertise en développement front-end et back-end.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Je m'efforce constamment d'apprendre de nouvelles technologies et de 
              rester à jour avec les dernières tendances du développement web.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
              >
                React
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
              >
                TypeScript
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
              >
                Tailwind CSS
              </motion.div>
              {/* Ajoutez d'autres technologies que vous maîtrisez */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              {/* Remplacez le src par le chemin vers votre photo */}
              <img
                src="https://via.placeholder.com/600x400"
                alt="Photo de profil"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
