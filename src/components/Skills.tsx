import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

// Import uniquement des icônes nécessaires
import { 
  SiAngular, SiTailwindcss, SiReact, SiHtml5, 
  SiTypescript, SiJavascript, SiPhp, 
  SiSymfony, SiLaravel, SiMysql, SiPython,
  SiCplusplus, SiMongodb 
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

import { 
  BsBraces, BsLightbulb, BsFileText,
  BsKanban, BsGlobe, BsGlobe2 
} from 'react-icons/bs';

// Interface pour définir la structure des compétences
interface Skill {
  category: string;
  items: {
    name: string;
    icon: string;
  }[];
}

const Skills = () => {
  // Récupération des compétences depuis le fichier JSON
  const skills: Skill[] = skillsData.skills;

  // Map des icônes avec uniquement celles dont nous avons besoin
  const iconMap: { [key: string]: any } = {
    SiAngular, SiTailwindcss, SiReact, SiHtml5,
    SiTypescript, SiJavascript, SiPhp,
    SiSymfony, SiLaravel, SiMysql, SiPython,
    SiCplusplus, SiMongodb,
    DiJava,
    BsBraces, BsLightbulb, BsFileText,
    BsKanban, BsGlobe, BsGlobe2
  };

  // Fonction pour récupérer l'icône correspondante au nom fourni
  const getIcon = (iconName: string) => {
    return iconMap[iconName];
  };

  return (
    <section id="skills" className="py-24 bg-[var(--color-cream)] relative">
      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold text-[var(--color-text)] mb-4">
            Mes Compétences
          </h2>
          <div className="w-12 h-[1px] bg-[var(--color-coffee)] mx-auto mb-6 opacity-40"></div>
          <p className="text-lg text-[var(--color-text-soft)] max-w-2xl mx-auto">
            Technologies et compétences que j'utilise au quotidien
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-[var(--color-sand)] p-8 rounded-2xl group hover:shadow-sm transition-shadow duration-300 skill-div"
            >
              <h3 className="text-lg font-medium text-[var(--color-text-soft)] mb-6 
                           group-hover:text-[var(--color-coffee)] transition-colors duration-300">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skillCategory.items.map((skill, skillIndex) => {
                  const IconComponent = getIcon(skill.icon);
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="px-4 py-2 bg-[var(--color-cream)] text-[var(--color-text)]
                               rounded-full transition-all duration-300 flex items-center gap-2 text-sm shadow-sm">
                      {IconComponent && (
                        <IconComponent 
                          className="text-base text-[var(--color-coffee)] opacity-80 transition-opacity" 
                        />
                      )}
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
