import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain, GitFork } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "BCA @ DRBCCC Hindu College", sub: "CGPA: 8.0" },
  { icon: Code2, label: "Full Stack Developer", sub: "TypeScript · React · Node.js" },
  { icon: Brain, label: "AI & Data Science", sub: "Python · ML · Analytics" },
  { icon: GitFork, label: "Open Source", sub: "EWOC · Kestra · OSCG" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-8" />

        <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
          I'm a BCA student at DRBCCC Hindu College, Chennai, with a CGPA of 8.0.
          I'm passionate about Full Stack Development, AI, and Data Science. I have
          a strong background in Data Structures & Algorithms and love contributing
          to open-source projects that make a real impact.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glow-card p-5 group"
            >
              <h.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">{h.label}</h3>
              <p className="text-xs text-muted-foreground">{h.sub}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
