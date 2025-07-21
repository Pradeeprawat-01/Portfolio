import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket, Package, Phone } from 'lucide-react';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projects = [
    {
      title: 'DevOps Project 01',
      description: 'CI/CD pipeline with Jenkins, Docker, GitHub, AWS EC2. Demonstrates complete DevOps lifecycle automation.',
      icon: <Rocket className="text-cyan-500" size={32} />,
      github: 'https://github.com/Pradeeprawat-01',
      technologies: ['Jenkins', 'Docker', 'AWS EC2', 'GitHub Actions', 'CI/CD'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Docker Automation Menu',
      description: 'Python-based CLI tool to automate Docker tasks via menu options like run, remove, logs, image management.',
      icon: <Package className="text-purple-500" size={32} />,
      github: 'https://github.com/Pradeeprawat-01',
      technologies: ['Python', 'Docker', 'CLI', 'Automation', 'Linux'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Auto Call Bot',
      description: 'Flask app integrated with Twilio API to auto-call predefined numbers with custom voice messages.',
      icon: <Phone className="text-green-500" size={32} />,
      github: 'https://github.com/Pradeeprawat-01',
      technologies: ['Flask', 'Twilio API', 'Python', 'Voice Automation', 'REST API'],
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl bg-gradient-to-r ${project.gradient}`}
                     style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                ></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div className="flex space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20 group-hover:text-cyan-600 transition-colors"
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