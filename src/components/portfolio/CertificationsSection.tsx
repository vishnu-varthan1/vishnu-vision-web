import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { name: "Career Essentials in Generative AI", org: "Microsoft & LinkedIn" },
  { name: "GitHub Completion Certificate", org: "GitHub" },
  { name: "Python Web Pro", org: "Professional Certification" },
  { name: "SQL Mastery", org: "Database Certification" },
  { name: "Core Java Bootcamp", org: "Java Certification" },
];

const CertificationsSection = () => (
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
          <span className="text-primary font-mono text-sm">06. Certifications</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          <span className="text-gradient">Credentials</span> & certs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glow-card p-6 flex items-start gap-4 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold leading-snug mb-1 group-hover:text-primary transition-colors">{c.name}</h3>
                <p className="text-xs text-muted-foreground font-mono">{c.org}</p>
              </div>
              <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
