import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wide">
              Robotics & AI Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
          >
            Tanuja Mallick
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold text-muted-foreground mb-8"
          >
            I build <span className="gradient-text">intelligent systems</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Specializing in building intelligent systems and scalable digital products 
            with AI and Full-Stack technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              View Projects
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 border border-border text-muted-foreground rounded-lg font-semibold hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/tanumalik12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/tanujamallick1207/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:tanumalik120@gmail.com"
              className="p-3 rounded-full bg-card/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="Email Contact"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors block animate-bounce">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
