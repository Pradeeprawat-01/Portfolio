import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Cloud, 
  Code, 
  Monitor, 
  Cpu, 
  Database,
  GitBranch,
  Shield,
  Terminal,
  Wrench
} from 'lucide-react';

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

  const skillCategories = [
    {
      title: 'DevOps & Tools',
      icon: <Server className="text-cyan-500" size={24} />,
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Cloud & Infra',
      icon: <Cloud className="text-purple-500" size={24} />,
      skills: ['AWS (EC2/S3)', 'Terraform', 'Linux Administration'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Languages',
      icon: <Code className="text-green-500" size={24} />,
      skills: ['Python', 'Bash', 'Java'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Frontend',
      icon: <Monitor className="text-orange-500" size={24} />,
      skills: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'AI & Automation',
      icon: <Cpu className="text-blue-500" size={24} />,
      skills: ['GenAI', 'ShellGPT', 'TGPT'],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Databases',
      icon: <Database className="text-yellow-500" size={24} />,
      skills: ['MongoDB', 'MySQL'],
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const tools = [
    { name: 'Docker', level: 90 },
    { name: 'Kubernetes', level: 85 },
    { name: 'Jenkins', level: 88 },
    { name: 'AWS', level: 82 },
    { name: 'Python', level: 90 },
    { name: 'Linux', level: 95 },
    { name: 'Terraform', level: 78 },
    { name: 'Git', level: 92 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20 group-hover:text-cyan-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Levels */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Proficiency Levels
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {tool.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {tool.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;