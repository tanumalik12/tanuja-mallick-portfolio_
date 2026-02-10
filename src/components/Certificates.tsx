import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';

import certAiPython from '@/assets/cert-ai-python.png';
import certFullstackJava from '@/assets/cert-fullstack-java.png';
import certHappieloop from '@/assets/cert-happieloop.png';
import certMotioncut from '@/assets/cert-motioncut.png';
import certAutocad from '@/assets/cert-autocad.png';
import certRoboticsSiemens from '@/assets/cert-robotics-siemens.png';
import certAutomationSiemens from '@/assets/cert-automation-siemens.jpg';
import certDataScience from '@/assets/cert-data-science.jpg';
import certVoyageRobotics from '@/assets/cert-voyage-robotics.jpg';

const certificates = [
  {
    title: "Productive Executive Intern",
    issuer: "Voyage Robotics Lab, Nagpur",
    category: "Internship",
    image: certVoyageRobotics,
  },
  {
    title: "AI Python Programming",
    issuer: "ID Tech Solutions / NSDC",
    category: "Course",
    image: certAiPython,
    link: "https://drive.google.com/file/d/1dLKr_1vBNLB95nKcp3oJs5ySc5UCryOw/view",
  },
  {
    title: "Full Stack Java",
    issuer: "Symbiosis / Capgemini",
    category: "Course",
    image: certFullstackJava,
    link: "https://drive.google.com/file/d/1NgcQdae27EiHLl1JmKEgQ9qZJxhbUXN4/view",
  },
  {
    title: "Data Analytics Intern",
    issuer: "Happieloop Technologies",
    category: "Internship",
    image: certHappieloop,
    link: "https://drive.google.com/file/d/1OmajT0Dllky_T7xPw53sAhqRUOKGoETU/view",
  },
  {
    title: "Python Programming Intern",
    issuer: "MotionCut",
    category: "Internship",
    image: certMotioncut,
    link: "https://drive.google.com/file/d/17kfjZVWKYAi2GW6p3MVxUQLD5ZYwkQYn/view",
  },
  {
    title: "AutoCAD Training",
    issuer: "MSME-TDC (PPDC)",
    category: "Course",
    image: certAutocad,
  },
  {
    title: "Advanced Industrial Robotics",
    issuer: "VNIT Nagpur / Siemens",
    category: "Course",
    image: certRoboticsSiemens,
  },
  {
    title: "Data Science & Analytics",
    issuer: "Jobaaj Learnings",
    category: "Course",
    image: certDataScience,
  },
  {
    title: "Automation System Design Lab",
    issuer: "VNIT Nagpur / Siemens",
    category: "Course",
    image: certAutomationSiemens,
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <>
      <section id="certificates" className="section-padding bg-secondary/30" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
              <span className="text-primary">06.</span> Certifications
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Professional certifications and training accomplishments
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                  className="glass-card rounded-xl overflow-hidden glow-border group cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-heading font-semibold text-sm">{cert.title}</h3>
                        <p className="text-muted-foreground text-xs mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        View Certificate <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedCert(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedCert.image}
            alt={selectedCert.title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default Certificates;
