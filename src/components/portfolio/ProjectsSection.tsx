import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

type Project = {
  title: string;
  tech: string[];
  description: string;
  tags: string[];
  color: string;
};

const projects: Project[] = [
  {
    title: "Student Management System",
    tech: ["Java", "MySQL", "JDBC"],
    description:
      "Console-based application to manage student records with CRUD operations and persistent database storage.",
    tags: ["Java", "Backend", "Database"],
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Web Attendance App",
    tech: ["TypeScript", "Node.js", "MongoDB"],
    description:
      "Web application to track and manage student attendance efficiently with real-time updates.",
    tags: ["TypeScript", "Full Stack", "Database"],
    color: "from-accent/20 to-rose/20",
  },
  {
    title: "Portfolio Website",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Responsive portfolio website optimized for performance and SEO with Lighthouse score above 90.",
    tags: ["Frontend", "JavaScript"],
    color: "from-sky/20 to-primary/20",
  },
];

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-gradient-primary rounded-full" />
            <span className="text-primary font-mono text-sm">03. Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
            Things I've <span className="text-gradient">built</span>
          </h2>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-5 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  filter === tag
                    ? "bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glow-card flex flex-col group cursor-pointer"
                >
                  {/* Colored header bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${p.color} rounded-t-2xl`} />
                  
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                        <Folder size={24} className="text-primary" />
                      </div>
                      <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Github size={18} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                        <ExternalLink size={18} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono text-primary/70 bg-primary/[0.08] px-3 py-1 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
