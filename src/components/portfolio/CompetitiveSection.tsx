import { motion } from "framer-motion";
import { Trophy, Target, Flame } from "lucide-react";

const platforms = [
  { name: "LeetCode", icon: Target, stat: "100+ Problems" },
  { name: "GeeksforGeeks", icon: Flame, stat: "Active Contributor" },
  { name: "HackerRank", icon: Trophy, stat: "Problem Solver" },
];

const CompetitiveSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Competitive <span className="text-gradient">Programming</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

        <div className="glow-card p-8">
          <p className="text-muted-foreground mb-8">
            Solved <span className="text-primary font-semibold">100+ DSA problems</span> across
            multiple platforms, strengthening algorithmic thinking and problem-solving skills.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <p.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">{p.name}</h4>
                  <p className="text-xs text-muted-foreground">{p.stat}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CompetitiveSection;
