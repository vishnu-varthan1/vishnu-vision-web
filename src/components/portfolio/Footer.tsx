import { Github, Linkedin, Code2, Heart } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com", label: "LeetCode" },
];

const Footer = () => (
  <footer className="border-t border-border/50 py-10 px-4 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Built with</span>
        <Heart size={14} className="text-rose fill-rose" />
        <span>by</span>
        <span className="text-gradient font-semibold">Vishnu Varthan R</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
      <div className="flex items-center gap-4">
        {socials.map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
          >
            <s.icon size={18} />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
