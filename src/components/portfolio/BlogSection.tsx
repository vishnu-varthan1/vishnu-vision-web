import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  gradient: string;
};

const posts: BlogPost[] = [
  {
    title: "Getting Started with TypeScript in 2026",
    excerpt:
      "A comprehensive guide to setting up TypeScript projects with modern tooling and best practices for type-safe code.",
    date: "Mar 2026",
    readTime: "8 min read",
    tags: ["TypeScript", "Tutorial"],
    gradient: "from-primary/20 to-sky/20",
  },
  {
    title: "Building Scalable REST APIs with Node.js",
    excerpt:
      "Patterns and practices for building production-ready APIs that handle millions of requests with ease.",
    date: "Feb 2026",
    readTime: "12 min read",
    tags: ["Node.js", "Backend"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Introduction to Machine Learning with Python",
    excerpt:
      "My journey into ML — key concepts, libraries, and the first model I built from scratch.",
    date: "Jan 2026",
    readTime: "10 min read",
    tags: ["Python", "AI/ML"],
    gradient: "from-warm/20 to-accent/20",
  },
];

const BlogSection = () => (
  <section id="blog" className="section-padding relative">
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
          <span className="text-primary font-mono text-sm">07. Blog</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Latest <span className="text-gradient">writings</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glow-card flex flex-col group cursor-pointer"
            >
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-br ${post.gradient} rounded-t-2xl flex items-end p-5`}>
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-primary/70 bg-primary/[0.08] px-3 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default BlogSection;
