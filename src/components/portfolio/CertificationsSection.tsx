import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "Career Essentials in Generative AI – Microsoft & LinkedIn",
  "GitHub Completion Certificate",
  "Python Web Pro",
  "SQL Mastery",
  "Core Java Bootcamp",
];

const CertificationsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Certifications</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glow-card p-5 flex items-start gap-3 group"
            >
              <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm leading-relaxed">{c}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
