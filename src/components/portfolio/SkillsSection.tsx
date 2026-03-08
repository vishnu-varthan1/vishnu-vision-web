import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  emoji: string;
  skills: { name: string; level: number }[];
};

const categories: SkillCategory[] = [
  {
    title: "Languages",
    emoji: "⚡",
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
    emoji: "🎨",
    skills: [
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "UI/UX Design", level: 75 },
    ],
  },
  {
    title: "Backend",
    emoji: "🔧",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Database & Tools",
    emoji: "🗄️",
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
  <div className="mb-5 group">
    <div className="flex justify-between text-sm mb-2">
      <span className="font-mono text-foreground group-hover:text-primary transition-colors">{name}</span>
      <motion.span
        className="text-muted-foreground font-mono text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.5 }}
      >
        {level}%
      </motion.span>
    </div>
    <div className="skill-bar">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="section-padding relative">
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-[2px] bg-gradient-primary rounded-full" />
          <span className="text-primary font-mono text-sm">02. Skills</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          My tech <span className="text-gradient">arsenal</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15, duration: 0.6 }}
              className="glow-card p-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="text-lg font-bold font-mono text-gradient">
                  {cat.title}
                </h3>
              </div>
              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} {...s} delay={ci * 0.15 + si * 0.08} />
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
