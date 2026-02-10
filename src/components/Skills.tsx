import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "SQL", "JavaScript", "C++"]
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Flask", "FastAPI", "Node.js", "REST APIs"]
  },
  {
    title: "AI/ML",
    skills: ["Pandas", "NumPy", "Matplotlib", "Stable Diffusion", "BLIP", "Hugging Face", "Gradio"]
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Google Cloud", "VS Code", "Firebase"]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
            <span className="text-primary">02.</span> Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A comprehensive toolkit for building intelligent, scalable applications
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                className="glass-card rounded-xl p-6 glow-border"
              >
                <h3 className="font-heading font-semibold text-lg mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.1 * categoryIndex + 0.05 * skillIndex 
                      }}
                      className="px-3 py-1.5 bg-muted text-sm text-foreground rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
