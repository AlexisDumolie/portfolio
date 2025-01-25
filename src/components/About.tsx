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
            Développeur passionné en quête de nouveaux défis technologiques
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
              Bonjour !
            </h3>
            <p className="text-accent leading-relaxed">
              Je m'appelle Alexis Dumolié, étudiant en BUT Informatique à l'IUT de Bayonne et du Pays Basque. 
              Depuis mes débuts en NSI au lycée, je me suis plongé avec enthousiasme dans l'univers du développement logiciel, 
              de la programmation web et de la gestion de projets.
            </p>
            <p className="text-accent leading-relaxed">
              Mon parcours en informatique m'a permis d'acquérir des compétences solides en développement web (HTML/CSS, JavaScript), 
              en programmation système (C++, Python) et en gestion de projet. J'ai également eu l'opportunité de mettre en pratique 
              mes connaissances lors d'un stage au Conseil Départemental du Gers, où j'ai développé un module pour une application 
              existante (SOLIS), renforçant ainsi mes compétences en bases de données et PHP.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-text mb-2">Mes objectifs</h4>
                <p className="text-accent leading-relaxed">
                  Je suis actuellement à la recherche d'un stage pour finaliser ma formation et me préparer à intégrer une école 
                  d'ingénieur dans des domaines comme la cybersécurité, l'intelligence artificielle ou les jeux vidéo. Mon ambition 
                  est de travailler sur des projets innovants qui combinent performance technique et impact positif.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-text mb-2">Mes valeurs</h4>
                <ul className="list-disc list-inside text-accent space-y-2">
                  <li><span className="font-semibold">Autonomie :</span> J'aime prendre des initiatives et chercher des solutions de manière proactive.</li>
                  <li><span className="font-semibold">Polyvalence :</span> Je m'adapte facilement aux nouveaux outils et technologies.</li>
                  <li><span className="font-semibold">Rigueur :</span> Je suis soucieux de produire un travail de qualité et de respecter les délais.</li>
                  <li><span className="font-semibold">Esprit d'équipe :</span> Extraverti, je favorise la collaboration et la bonne communication dans les projets.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-text mb-2">Ce qui me passionne</h4>
                <p className="text-accent leading-relaxed">
                  En dehors de mes projets académiques, je développe actuellement un logiciel, Ecofloc, pour mesurer la consommation 
                  énergétique des processus sur CPU, GPU et autres composants. J'aime relever ce type de défis, car ils combinent 
                  programmation, optimisation et conscience écologique.
                </p>
              </div>
            </div>
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
                Programmation Système
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-primary-light text-primary rounded-full"
              >
                Gestion de Projet
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
