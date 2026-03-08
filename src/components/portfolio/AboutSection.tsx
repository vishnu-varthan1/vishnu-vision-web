import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain, GitFork, Zap } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "BCA @ DRBCCC Hindu College", sub: "CGPA: 8.0", color: "text-primary" },
  { icon: Code2, label: "Full Stack Developer", sub: "TypeScript · React · Node.js", color: "text-accent" },
  { icon: Brain, label: "AI & Data Science", sub: "Python · ML · Analytics", color: "text-warm" },
  { icon: GitFork, label: "Open Source", sub: "EWOC · Kestra · OSCG", color: "text-sky" },
];

const stats = [
  { value: "8.0", label: "CGPA", icon: Zap },
  { value: "100+", label: "DSA Problems", icon: Code2 },
  { value: "3+", label: "OS Contributions", icon: GitFork },
  { value: "5+", label: "Certifications", icon: GraduationCap },
];

const AboutSection = () => (
  <section id="about" className="section-padding relative">
    <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-[2px] bg-gradient-primary rounded-full" />
          <span className="text-primary font-mono text-sm">01. About Me</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
          Crafting digital <br />
          <span className="text-gradient">experiences</span> with code
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-3">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I'm a BCA student at DRBCCC Hindu College, Chennai, with a CGPA of 8.0.
              I'm passionate about building scalable applications and exploring the intersection
              of <span className="text-primary font-medium">Artificial Intelligence</span> and{" "}
              <span className="text-accent font-medium">web development</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              With a strong background in Data Structures & Algorithms and experience
              contributing to open-source projects, I love solving complex problems
              and turning ideas into elegant, performant solutions.
            </p>
          </div>

          {/* Stats grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glow-card p-5 text-center"
              >
                <span className="text-3xl font-bold text-gradient block mb-1">{s.value}</span>
                <span className="text-xs text-muted-foreground font-mono">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glow-card p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <h.icon className={`w-6 h-6 ${h.color}`} />
              </div>
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
