import { motion } from "framer-motion";
import { GitPullRequest, Users, Bug, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    icon: GitPullRequest,
    title: "EWOC'26 Contributor",
    org: "Extreme Winter of Code",
    description: "Contributed code and resolved issues in collaborative open-source projects.",
    tags: ["Open Source", "Collaboration"],
  },
  {
    icon: Bug,
    title: "Kestra Contributor",
    org: "Kestra.io",
    description: "Improved workflow debugging tools and log-copy functionality.",
    tags: ["DevTools", "Workflow"],
  },
  {
    icon: Users,
    title: "Mentor @OSCG'26",
    org: "Open Source Community Group",
    description: "Guided developers by reviewing pull requests and mentoring contributors.",
    tags: ["Mentoring", "Leadership"],
  },
];

const OpenSourceSection = () => (
  <section id="experience" className="section-padding relative">
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-[2px] bg-gradient-primary rounded-full" />
          <span className="text-primary font-mono text-sm">04. Experience</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Open source <span className="text-gradient">journey</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glow-card p-7 flex flex-col sm:flex-row items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                <e.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{e.title}</h3>
                    <p className="text-sm text-muted-foreground font-mono">{e.org}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{e.description}</p>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono text-primary/70 bg-primary/[0.08] px-3 py-1 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default OpenSourceSection;
