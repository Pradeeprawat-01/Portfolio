import React from 'react';
import { motion, easeInOut } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Cloud, Database, Server, Zap, Cpu, GitBranch } from 'lucide-react';

const Experience: React.FC = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'Freelance',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Building and maintaining CI/CD pipelines, containerization with Docker, and cloud infrastructure management.',
      technologies: ['Docker', 'Jenkins', 'AWS', 'GitHub Actions', 'Kubernetes'],
      icon: <Cloud className="text-cyan-500" size={24} />,
    },
    {
      title: 'Software Developer',
      company: 'Personal Projects',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Developing full-stack applications, automation scripts, and contributing to open-source projects.',
      technologies: ['Python', 'JavaScript', 'React', 'Node.js', 'Flask'],
      icon: <Code className="text-blue-500" size={24} />,
    },
    {
      title: 'System Administrator',
      company: 'Freelance',
      period: '2021 - 2023',
      location: 'Remote',
      description: 'Managing server infrastructure, implementing security measures, and optimizing system performance.',
      technologies: ['Linux', 'Bash', 'Docker', 'Nginx', 'Security'],
      icon: <Server className="text-green-500" size={24} />,
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Futuristic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/5 dark:via-gray-800/5 to-transparent" />
      
      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute top-20 left-1/6 w-3 h-3 bg-cyan-500/40 dark:bg-cyan-400/40 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: easeInOut
        }}
      />
      <motion.div
        className="absolute top-40 right-1/4 w-2 h-2 bg-blue-500/50 dark:bg-blue-400/50 rounded-full"
        animate={{
          y: [0, 12, 0],
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: easeInOut,
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-2.5 h-2.5 bg-purple-500/40 dark:bg-purple-400/40 rounded-full"
        animate={{
          y: [0, -10, 0],
          x: [0, 6, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: easeInOut,
          delay: 1
        }}
      />

      {/* Enhanced technical icons floating */}
      <motion.div
        className="absolute top-1/4 left-1/8 text-cyan-500/60 dark:text-cyan-400/60"
        variants={floatingVariants}
        animate="animate"
      >
        <Zap size={24} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/8 text-blue-500/60 dark:text-blue-400/60"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Database size={24} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/6 text-purple-500/60 dark:text-purple-400/60"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Code size={24} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-1/6 text-green-500/40 dark:text-green-400/40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <Cpu size={20} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-1/3 text-cyan-500/40 dark:text-cyan-400/40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        <GitBranch size={20} />
      </motion.div>

      {/* Enhanced gradient mesh background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-50/10 dark:via-cyan-900/10 to-transparent"
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: easeInOut
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Experience
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
              whileHover={{ scaleX: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <div className="relative">
            {/* Enhanced timeline line */}
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 shadow-lg"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    x: index % 2 === 0 ? 5 : -5
                  }}
                  transition={{ duration: 0.3 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Enhanced timeline dot */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-white dark:border-gray-800 transform -translate-x-3 shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ 
                      scale: 1.5,
                      boxShadow: "0 0 20px rgba(6, 182, 212, 0.6)"
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(6, 182, 212, 0.3)",
                        "0 0 10px rgba(6, 182, 212, 0.6)",
                        "0 0 0px rgba(6, 182, 212, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: easeInOut,
                      delay: index * 0.3
                    }}
                  />

                  {/* Experience card */}
                  <motion.div
                    className={`w-full md:w-5/12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(6, 182, 212, 0.2)"
                    }}
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <motion.div 
                        className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          backgroundColor: "rgba(6, 182, 212, 0.2)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {exp.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <div className="flex items-center space-x-1">
                            <Briefcase size={16} />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-500">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      {exp.description}
                    </motion.p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400 text-sm rounded-full border border-cyan-200 dark:border-cyan-800"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(6, 182, 212, 0.2)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;