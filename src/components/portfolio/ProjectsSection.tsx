import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  tech: string[];
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Student Management System",
    tech: ["Java", "MySQL", "JDBC"],
    description:
      "Console-based application to manage student records with CRUD operations and persistent database storage.",
    tags: ["Java", "Backend", "Database"],
  },
  {
    title: "Web Attendance App",
    tech: ["TypeScript", "Node.js", "MongoDB"],
    description:
      "Web application to track and manage student attendance efficiently with real-time updates.",
    tags: ["TypeScript", "Full Stack", "Database"],
  },
  {
    title: "Portfolio Website",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Responsive portfolio website optimized for performance and SEO with Lighthouse score above 90.",
    tags: ["Frontend", "JavaScript"],
  },
];

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-8" />

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  filter === tag
                    ? "bg-gradient-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary/30 hover:text-primary"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glow-card p-6 flex flex-col group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Github size={20} className="text-primary-foreground" />
                    </div>
                    <ExternalLink
                      size={18}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
