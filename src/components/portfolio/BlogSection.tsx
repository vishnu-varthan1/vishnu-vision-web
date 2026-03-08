import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
};

const posts: BlogPost[] = [
  {
    title: "Getting Started with TypeScript in 2026",
    excerpt:
      "A comprehensive guide to setting up TypeScript projects with modern tooling and best practices.",
    date: "Mar 2026",
    tags: ["TypeScript", "Tutorial"],
  },
  {
    title: "Building Scalable REST APIs with Node.js",
    excerpt:
      "Patterns and practices for building production-ready APIs that handle millions of requests.",
    date: "Feb 2026",
    tags: ["Node.js", "Backend"],
  },
  {
    title: "Introduction to Machine Learning with Python",
    excerpt:
      "My journey into ML—key concepts, libraries, and the first model I built from scratch.",
    date: "Jan 2026",
    tags: ["Python", "AI/ML"],
  },
];

const BlogSection = () => (
  <section id="blog" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Latest <span className="text-gradient">Blog Posts</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glow-card p-6 flex flex-col group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar size={12} />
                <span>{post.date}</span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default BlogSection;
