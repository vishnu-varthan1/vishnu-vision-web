import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-8 mx-auto" />

        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be
          part of something amazing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-5 h-5 text-primary" />
            <a
              href="mailto:vishnuvarthan814@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              vishnuvarthan814@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Chennai, India</span>
          </div>
        </div>

        <a
          href="mailto:vishnuvarthan814@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          <Send size={18} /> Say Hello
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
