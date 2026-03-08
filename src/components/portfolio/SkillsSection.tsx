import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  skills: { name: string; level: number }[];
};

const categories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "Python", level: 80 },
      { name: "C++", level: 75 },
      { name: "Java", level: 70 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "UI/UX Design", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 60 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm mb-1.5">
      <span className="font-mono text-foreground">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="skill-bar">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Tech <span className="text-gradient">Stack</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15, duration: 0.5 }}
              className="glow-card p-6"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 font-mono">
                {`// ${cat.title}`}
              </h3>
              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} {...s} delay={ci * 0.15 + si * 0.05} />
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
