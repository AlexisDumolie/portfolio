import { motion } from 'framer-motion';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 0 à 100
  }[];
}

const skills: Skill[] = [
  {
    category: "Front-end",
    items: [
      { name: "Angular", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "TailwindCSS", level: 85 },
    ],
  },
  {
    category: "Back-end",
    items: [
      { name: "Symfony", level: 80 },
      { name: "Laravel", level: 80 },
      { name: "PHP", level: 85 },
      { name: "Java", level: 75 },
    ],
  },
  {
    category: "Autres Technologies",
    items: [
      { name: "Python", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "SQL", level: 85 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Résolution de problèmes", level: 90 },
      { name: "Veille technologique", level: 85 },
      { name: "Documentation technique", level: 80 },
      { name: "Méthodes agiles", level: 75 },
    ],
  },
  {
    category: "Langues",
    items: [
      { name: "Français", level: 100 },
      { name: "Anglais (Compréhension)", level: 85 },
      { name: "Anglais (Expression)", level: 70 },
    ],
  },
];

const Skills = () => {
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
            Un aperçu de mes compétences techniques et non techniques
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
              className="bg-background rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-text mb-6">
                {skillCategory.category}
              </h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-accent">{skill.name}</span>
                      <span className="text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
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
