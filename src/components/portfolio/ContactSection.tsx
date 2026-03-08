import { motion } from "framer-motion";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding relative">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[130px]" />
    </div>

    <div className="container mx-auto max-w-3xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-3 justify-center">
          <div className="w-10 h-[2px] bg-gradient-primary rounded-full" />
          <span className="text-primary font-mono text-sm">08. Contact</span>
          <div className="w-10 h-[2px] bg-gradient-primary rounded-full" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Let's build <br />
          <span className="text-gradient">something epic</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-lg mx-auto text-lg leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities
          to be part of something amazing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <motion.a
            href="mailto:vishnuvarthan814@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glow-card px-6 py-4 flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-mono">Email</p>
              <p className="text-sm font-medium group-hover:text-primary transition-colors">
                vishnuvarthan814@gmail.com
              </p>
            </div>
            <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-all ml-2" />
          </motion.a>

          <div className="glow-card px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-mono">Location</p>
              <p className="text-sm font-medium">Chennai, India</p>
            </div>
          </div>
        </div>

        <motion.a
          href="mailto:vishnuvarthan814@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
        >
          <Send size={20} /> Say Hello
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
