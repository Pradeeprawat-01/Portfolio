import React from 'react';
import { motion, easeInOut } from 'framer-motion';
import { Code, Cloud, Database, Server, Zap, Cpu, Shield, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: 'DevOps & Tools',
      icon: <Server className="text-cyan-500" size={32} />,
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Jenkins', level: 88 },
        { name: 'AWS', level: 82 },
      ],
    },
    {
      title: 'Cloud & Infra',
      icon: <Cloud className="text-purple-500" size={32} />,
      skills: [
        { name: 'AWS (EC2/S3)', level: 85 },
        { name: 'Terraform', level: 78 },
        { name: 'Linux', level: 95 },
        { name: 'Nginx', level: 80 },
        { name: 'CI/CD', level: 90 },
      ],
    },
    {
      title: 'Languages',
      icon: <Code className="text-green-500" size={32} />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Bash', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'React', level: 70 },
        { name: 'Node.js', level: 65 },
      ],
    },
    {
      title: 'AI & Automation',
      icon: <Cpu className="text-blue-500" size={32} />,
      skills: [
        { name: 'GenAI', level: 80 },
        { name: 'ShellGPT', level: 85 },
        { name: 'Automation Scripts', level: 90 },
        { name: 'Monitoring', level: 75 },
      ],
    },
    {
      title: 'Databases',
      icon: <Database className="text-yellow-500" size={32} />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },

      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-1/6 w-3 h-3 bg-cyan-400/30 dark:bg-cyan-500/30 rounded-full"
        animate={{
          y: [0, -18, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: easeInOut
        }}
      />
      <motion.div
        className="absolute top-40 right-1/4 w-2 h-2 bg-blue-400/40 dark:bg-blue-500/40 rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: easeInOut,
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-2.5 h-2.5 bg-purple-400/30 dark:bg-purple-500/30 rounded-full"
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: easeInOut,
          delay: 1
        }}
      />

      {/* Technical icons floating */}
      <motion.div
        className="absolute top-1/4 left-1/8 text-cyan-400/40 dark:text-cyan-500/40"
        variants={floatingVariants}
        animate="animate"
      >
        <Zap size={20} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/8 text-blue-400/40 dark:text-blue-500/40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Cpu size={20} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/6 text-purple-400/40 dark:text-purple-500/40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Shield size={20} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-1/4 text-green-400/40 dark:text-green-500/40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        <Globe size={20} />
      </motion.div>

      {/* Gradient mesh background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-50/5 dark:via-cyan-900/5 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
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
              Skills & Expertise
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
              whileHover={{ scaleX: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div 
                    className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {category.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 dark:text-white"
                    whileHover={{ color: "#06b6d4" }}
                    transition={{ duration: 0.2 }}
                  >
                    {category.title}
                  </motion.h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-cyan-500 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          whileHover={{ 
                            scaleY: 1.2,
                            boxShadow: "0 0 10px rgba(6, 182, 212, 0.5)"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional skills section */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Additional Skills
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Git', 'Docker Compose', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'Microservices', 'HTML5', 'CSS3'].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(6, 182, 212, 0.1)"
                  }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;