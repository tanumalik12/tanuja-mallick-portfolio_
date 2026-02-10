import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import projectZomical from '@/assets/project-zomical.jpg';
import projectYummyCart from '@/assets/project-yummy-cart.jpg';
import projectAiArt from '@/assets/project-ai-art.jpg';

const featuredProject = {
  title: "Zomical – Farm Fresh Grocery E-Commerce",
  description: "Built and deployed a full-stack grocery delivery platform enabling users to order fresh farm products online. Implemented seamless product browsing, cart management, checkout flow, and production deployment. Designed for performance, scalability, and real-world customers.",
  tech: ["Full Stack", "React", "Backend APIs", "Database", "Cloud Hosting"],
  liveUrl: "https://zomical.com",
  image: projectZomical,
  featured: true
};

const projects = [
  {
    title: "Yummy Cart – Food Ordering Web App",
    description: "Built a responsive food ordering website with real-time cart updates and checkout. Integrated Firebase for authentication and database management.",
    tech: ["React", "Firebase", "JavaScript", "CSS"],
    githubUrl: "https://github.com/tanumalik12",
    image: projectYummyCart
  },
  {
    title: "AI Art Generator",
    description: "Developed an AI-powered text-to-image generator using Stable Diffusion and Hugging Face Diffusers with an interactive Gradio interface for seamless user experience.",
    tech: ["Python", "Diffusers", "Gradio", "Stable Diffusion", "AI/ML"],
    githubUrl: "https://github.com/tanumalik12",
    image: projectAiArt
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
            <span className="text-primary">03.</span> Featured Projects
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A selection of projects that showcase my skills and passion for building
          </p>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-16"
          >
            <div className="glass-card rounded-2xl overflow-hidden border-2 border-primary/20 relative">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-72 md:h-auto md:min-h-[400px] overflow-hidden bg-muted/30">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/90 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
                </div>

                {/* Project Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-medium text-primary">Featured Project</span>
                  </div>
                  
                  <span className="text-primary/70 text-sm font-medium">Live Production App</span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mt-2 mb-4">
                    {featuredProject.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 w-fit"
                  >
                    View Live Site <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden glow-border group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Overlay with GitHub link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-2 bg-card/80 rounded-lg text-muted-foreground hover:text-primary transition-colors border border-border"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-muted-foreground font-mono bg-muted/30 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;
