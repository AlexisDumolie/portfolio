import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    title: "CodeQuest",
    description: "Application innovante dédiée à l'apprentissage du code. Une approche interactive et engageante pour maîtriser la programmation.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "TypeScript", "Node.js"],
    githubLink: "https://github.com/CodeQuestApp/main"
  },
  {
    title: "ecoFloc4Win",
    description: "Fork du projet ecoFloc adapté pour Windows. Une solution écologique optimisée pour l'environnement Windows.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["C++", "Windows API"],
    githubLink: "https://github.com/Mattis40/ecofloc4win"
  },
  {
    title: "Portfolio Personnel",
    description: "Site web personnel présentant mes projets et compétences, créé avec des technologies modernes.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/AlexisDumolie/portfolio",
    demoLink: "https://alexisdumolie.github.io/portfolio/"
  }
];

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
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-10 transition-opacity duration-300 hover:bg-opacity-0"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-accent mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-hover transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-hover transition-colors"
                    >
                      Demo
                    </a>
                  )}
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
