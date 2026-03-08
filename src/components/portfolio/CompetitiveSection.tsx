import { motion } from "framer-motion";
import { Trophy, Target, Flame } from "lucide-react";

const platforms = [
  { name: "LeetCode", icon: Target, stat: "100+ Problems", color: "text-warm" },
  { name: "GeeksforGeeks", icon: Flame, stat: "Active Contributor", color: "text-primary" },
  { name: "HackerRank", icon: Trophy, stat: "Problem Solver", color: "text-accent" },
];

const CompetitiveSection = () => (
  <section className="section-padding relative">
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-[2px] bg-gradient-primary rounded-full" />
          <span className="text-primary font-mono text-sm">05. Competitive</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Problem <span className="text-gradient">solving</span>
        </h2>

        <div className="glow-card p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Solved <span className="text-4xl font-bold text-gradient inline-block mx-1">100+</span> DSA problems
                across multiple competitive platforms, building strong algorithmic thinking.
              </motion.p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-border/50 hover:border-primary/20 bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <p.icon className={`w-6 h-6 ${p.color}`} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{p.name}</h4>
                  <p className="text-xs text-muted-foreground font-mono">{p.stat}</p>
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
