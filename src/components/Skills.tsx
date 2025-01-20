import { motion } from 'framer-motion';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 0 à 100
    icon?: string;
  }[];
}

const skills: Skill[] = [
  {
    category: "Front-end",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    category: "Back-end",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "SQL", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    category: "Outils",
    items: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Webpack", level: 70 },
      { name: "Docker", level: 60 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et de mon expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {skillCategory.category}
              </h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
