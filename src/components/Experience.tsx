import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Robotic Engineer",
    company: "Voyage Robotics Pvt Ltd",
    location: "Nagpur",
    period: "Oct 2025 – Present",
    responsibilities: [
      "Developed AI image generation system using Stable Diffusion and Gradio",
      "Built end-to-end image captioning solution using BLIP",
      "Integrated AI workflows into real-world applications"
    ]
  },
  {
    title: "Productive Executive Intern",
    company: "Voyage Robotics",
    location: "Nagpur",
    period: "Feb 2024 – May 2025",
    responsibilities: [
      "Assisted robotics automation processes",
      "Improved operational productivity through AI tools"
    ]
  },
  {
    title: "Data Analytics & Python Intern",
    company: "Happieloop & MotionCut",
    location: "Remote",
    period: "Jan 2024 – Feb 2024",
    responsibilities: [
      "Built predictive models for business insights",
      "Analyzed and visualized large datasets using Pandas & Matplotlib"
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "Codemate IT Services",
    location: "Remote",
    period: "Jan 2024 – Feb 2024",
    responsibilities: [
      "Developed and deployed ML models for business analytics"
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
            <span className="text-primary">04.</span> Experience
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            My professional journey in tech and AI
          </p>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative pl-12 md:pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-8 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background" />

                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center gap-2 text-primary text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-lg">{exp.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground text-sm mt-1 mb-4">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
