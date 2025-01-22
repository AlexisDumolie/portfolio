import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';
import * as Si from 'react-icons/si';
import * as Bs from 'react-icons/bs';

interface Skill {
  category: string;
  items: {
    name: string;
    icon: string;
  }[];
}

const Skills = () => {
  const skills: Skill[] = skillsData.skills;

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      ...Si,
      ...Bs,
    };
    return icons[iconName];
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-text sm:text-4xl mb-4">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-accent max-w-2xl mx-auto">
            Technologies et compétences que j'utilise au quotidien
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-background rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-text mb-4 border-b border-accent/20 pb-2">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillCategory.items.map((skill, skillIndex) => {
                  const IconComponent = getIcon(skill.icon);
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-primary/10 rounded-lg text-primary border border-primary/20 
                               hover:bg-primary/20 transition-all duration-300 cursor-default
                               flex items-center gap-2"
                    >
                      {IconComponent && <IconComponent className="text-lg" />}
                      {skill.name}
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
