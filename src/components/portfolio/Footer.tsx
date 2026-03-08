import { Github, Linkedin, Code2 } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com", label: "LeetCode" },
];

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Vishnu Varthan R. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <s.icon size={20} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
