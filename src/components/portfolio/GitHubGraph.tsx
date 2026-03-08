import { motion } from "framer-motion";
import { useMemo } from "react";

const GitHubGraph = () => {
  // Generate mock contribution data for 52 weeks
  const weeks = useMemo(() => {
    const data: number[][] = [];
    for (let w = 0; w < 52; w++) {
      const week: number[] = [];
      for (let d = 0; d < 7; d++) {
        // Weighted random - more likely to have low contributions
        const r = Math.random();
        if (r < 0.3) week.push(0);
        else if (r < 0.6) week.push(1);
        else if (r < 0.8) week.push(2);
        else if (r < 0.95) week.push(3);
        else week.push(4);
      }
      data.push(week);
    }
    return data;
  }, []);

  const getColor = (level: number) => {
    const colors = [
      "bg-muted",
      "bg-primary/20",
      "bg-primary/40",
      "bg-primary/70",
      "bg-primary",
    ];
    return colors[level];
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-8" />

          <div className="glow-card p-6 overflow-x-auto">
            <div className="flex gap-1 min-w-[700px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((level, di) => (
                    <motion.div
                      key={`${wi}-${di}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: wi * 0.01 + di * 0.005 }}
                      className={`w-3 h-3 rounded-sm ${getColor(level)} transition-colors`}
                      title={`${level} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <div key={l} className={`w-3 h-3 rounded-sm ${getColor(l)}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubGraph;
