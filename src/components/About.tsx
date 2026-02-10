import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Code2, Rocket } from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.jpg';
import techPattern from '@/assets/tech-pattern.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Cpu, title: "AI/ML", description: "Deep learning, computer vision, and NLP applications" },
    { icon: Code2, title: "Full Stack", description: "End-to-end web applications with modern frameworks" },
    { icon: Rocket, title: "Robotics", description: "Automation systems and intelligent robotics solutions" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 opacity-5">
        <img src={techPattern} alt="" className="w-full h-full object-cover rounded-full blur-sm" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-primary">01.</span> About Me
          </h2>
          
          <div className="grid md:grid-cols-5 gap-12 mt-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 flex justify-center md:justify-start"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                  <img 
                    src={profileAvatar} 
                    alt="Tanuja Mallick - AI Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative frame */}
                <div className="absolute -inset-3 border-2 border-primary/30 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="md:col-span-3">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                I'm a <span className="text-foreground font-medium">Robotics & AI Engineer</span> with a passion for building intelligent systems 
                that solve real-world problems. My journey in tech spans across AI/ML, 
                full-stack development, and robotics automation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently working at <span className="text-primary">Voyage Robotics</span> where I develop AI-powered solutions 
                including image generation systems using Stable Diffusion and end-to-end 
                image captioning solutions using BLIP.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I specialize in Python, React, and modern AI frameworks, bringing together 
                the best of software engineering and artificial intelligence to create 
                impactful digital products.
              </p>

              {/* Highlight Cards */}
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass-card p-4 rounded-xl glow-border flex items-center gap-4"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-sm">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
