import { motion } from "framer-motion";
import { GitPullRequest, Users, Bug } from "lucide-react";

const experiences = [
  {
    icon: GitPullRequest,
    title: "EWOC'26 Contributor",
    description: "Contributed code and resolved issues in collaborative open-source projects.",
  },
  {
    icon: Bug,
    title: "Kestra Contributor",
    description: "Improved workflow debugging tools and log-copy functionality.",
  },
  {
    icon: Users,
    title: "Mentor @OSCG'26",
    description: "Guided developers by reviewing pull requests and mentoring contributors.",
  },
];

const OpenSourceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Open Source <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glow-card p-6 group"
            >
              <e.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default OpenSourceSection;
