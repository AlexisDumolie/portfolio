import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-text sm:text-4xl mb-4">
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
            <h3 className="text-2xl font-semibold text-text">
              Développeur Passionné
            </h3>
            <p className="text-accent leading-relaxed">
              Titulaire d'un Baccalauréat avec mention Très Bien, spécialisé en NSI (Numérique et Sciences Informatiques), 
              Mathématiques et SVT, je suis passionné par le développement web et la création d'applications.
            </p>
            <p className="text-accent leading-relaxed">
              Mon expérience inclut un stage enrichissant à la DOSIN (Département Informatique du Conseil Départemental du GERS), 
              où j'ai pu mettre en pratique mes connaissances et développer de nouvelles compétences dans un environnement professionnel.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-primary-light text-primary rounded-full"
              >
                Développement Web
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-primary-light text-primary rounded-full"
              >
                Applications
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-primary-light text-primary rounded-full"
              >
                Full Stack
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl bg-secondary flex items-center justify-center">
              {/* Placeholder en attendant votre photo */}
              <div className="text-gray-400 text-center p-8">
                <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>Photo à venir</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
