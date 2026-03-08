import { motion } from "framer-motion";
import { useMemo } from "react";

const GitHubGraph = () => {
  const weeks = useMemo(() => {
    const data: number[][] = [];
    for (let w = 0; w < 52; w++) {
      const week: number[] = [];
      for (let d = 0; d < 7; d++) {
        const r = Math.random();
        if (r < 0.25) week.push(0);
        else if (r < 0.5) week.push(1);
        else if (r < 0.75) week.push(2);
        else if (r < 0.92) week.push(3);
        else week.push(4);
      }
      data.push(week);
    }
    return data;
  }, []);

  const totalContributions = useMemo(
    () => weeks.flat().reduce((a, b) => a + b * 3, 0),
    [weeks]
  );

  const getColor = (level: number) => {
    const colors = [
      "bg-muted/50",
      "bg-primary/15",
      "bg-primary/35",
      "bg-primary/60",
      "bg-primary",
    ];
    return colors[level];
  };

  return (
    <section className="section-padding relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-[2px] bg-gradient-primary rounded-full" />
                <span className="text-primary font-mono text-sm">GitHub</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Contribution <span className="text-gradient">graph</span>
              </h2>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-gradient">{totalContributions}</span>
              <p className="text-xs text-muted-foreground font-mono">contributions this year</p>
            </div>
          </div>

          <div className="glow-card p-6 md:p-8 overflow-x-auto">
            <div className="flex gap-[3px] min-w-[700px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((level, di) => (
                    <motion.div
                      key={`${wi}-${di}`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: wi * 0.008 + di * 0.003, duration: 0.3 }}
                      className={`w-[13px] h-[13px] rounded-[3px] ${getColor(level)} hover:ring-2 hover:ring-primary/30 transition-all cursor-pointer`}
                      title={`${level * 3} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-6 text-xs text-muted-foreground font-mono">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <div key={l} className={`w-[13px] h-[13px] rounded-[3px] ${getColor(l)}`} />
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
