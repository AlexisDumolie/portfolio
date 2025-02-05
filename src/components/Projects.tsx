import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

// Import des images
import codeQuestImg from '../assets/projects/CodeQuest.png';
import ecoFlocImg from '../assets/projects/EcoFloc4Win.png';
import portfolioImg from '../assets/projects/portfolio.png';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

// Map des noms de projets aux images
const projectImages: { [key: string]: string } = {
  'CodeQuest': codeQuestImg,
  'EcoFloc4Win': ecoFlocImg,
  'Portfolio Personnel': portfolioImg
};

const projects: Project[] = projectsData.projects;

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-t[var(--color-text)]">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--color-text)] sm:text-4xl mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-8"></div>
          <p className="text-xl text-[var(--color-accent)] max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus significatifs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[var(--color-sand)] rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <a href={project.githubLink} target="_blank" className="hover:cursor">
                <div className="relative group">
                  <img
                    src={projectImages[project.title]}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 relative z-10"
                  />
                  <div className="absolute inset-0 bg-[var(--color-primary-light)] bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20 z-0"></div>
                </div>
              </a>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--color-accent)] mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[var(--color-cream)] text-[var(--color-text)] text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 justify-center">
                  
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors flex flex-row gap-1">
                    <svg className="w-6 h-6" fill="currentColor"  viewBox="0 0 24 24" >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
