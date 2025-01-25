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
    <section id="projects" className="py-20 bg-background">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-text sm:text-4xl mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-accent max-w-2xl mx-auto">
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
              className="bg-background rounded-xl shadow-lg overflow-hidden"
            >
              <a href={project.githubLink} target="_blank" className="hover:cursor">
                <div className="relative group">
                  <img
                    src={projectImages[project.title]}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-0"></div>
                </div>
              </a>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-accent mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 justify-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
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
