import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.png";

const roles = [
  "Full Stack Developer",
  "AI & ML Enthusiast",
  "Open Source Contributor",
  "Problem Solver",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 noise-bg"
    >
      {/* Epic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full hero-glow" />
        <div className="absolute top-1/3 left-1/6 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[130px] floating-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/[0.03] animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/[0.03] animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-mono text-xs text-primary">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 leading-[1.05] tracking-tight"
            >
              <span className="block">Vishnu</span>
              <span className="block text-gradient">Varthan R</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="h-10 mb-6 overflow-hidden"
            >
              <motion.h2
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light font-mono"
              >
                {`> ${roles[roleIndex]}_`}
              </motion.h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed text-lg"
            >
              Building intelligent web applications and scalable backend systems
              that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                Resume
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-muted-foreground font-semibold text-sm hover:border-primary/30 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={16} /> Contact
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image - Legendary style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="relative"
          >
            {/* Outer rings */}
            <div className="absolute -inset-8 rounded-full border border-primary/10 animate-spin-slow" />
            <div className="absolute -inset-16 rounded-full border border-accent/5" style={{ animation: "border-spin 25s linear infinite reverse" }} />
            
            {/* Floating orbs */}
            <motion.div
              animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-primary/40 blur-sm"
            />
            <motion.div
              animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-2 -left-6 w-4 h-4 rounded-full bg-accent/40 blur-sm"
            />
            <motion.div
              animate={{ y: [3, -7, 3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 -right-8 w-3 h-3 rounded-full bg-warm/40 blur-sm"
            />

            {/* Glow behind image */}
            <div className="absolute inset-0 w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-primary opacity-15 blur-3xl" style={{ animation: "pulse-ring 4s ease-in-out infinite" }} />

            {/* Image container with gradient border */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 p-1 rounded-full bg-gradient-primary">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img
                  src={profileImg}
                  alt="Vishnu Varthan R"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-mono">scroll down</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={20} className="text-primary/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
