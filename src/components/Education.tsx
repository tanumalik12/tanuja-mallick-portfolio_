import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "B.Tech – Robotics & Artificial Intelligence",
    institution: "Priyadarshini College of Engineering",
    university: "RTMNU University",
    location: "Nagpur",
    period: "Dec 2021 – Aug 2025"
  },
  {
    degree: "Class XII (Higher Secondary)",
    institution: "KGN Junior College Of Arts and Science",
    university: "Maharashtra State Board",
    location: "Chandrapur",
    period: "Apr 2021 – Mar 2020"
  }
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
            <span className="text-primary">05.</span> Education
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            My academic foundation in technology and engineering
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card p-6 rounded-xl glow-border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-foreground mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mb-3">{edu.university}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
