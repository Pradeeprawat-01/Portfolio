import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const About: React.FC = () => {
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

  const education = [
    {
      degree: 'MCA',
      school: 'Galgotias University',
      period: '2023–2025',
      status: 'Current',
    },
    {
      degree: 'B.Sc. Computer Science',
      school: 'Chinmaya Degree College (HNBGU)',
      period: '2020–2023',
      status: 'Completed',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-1">
                  <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white mb-2">PSR</div>
                      <div className="text-cyan-400 text-sm">DevOps Engineer</div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-2xl"></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate DevOps Engineer and Software Developer currently pursuing MCA at Galgotias University. 
                I specialize in building scalable cloud-native solutions using Docker, Kubernetes, Jenkins, and AWS.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I enjoy solving real-world problems by combining automation, scripting, and infrastructure as code 
                to create efficient, reliable systems that power modern applications.
              </p>

              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <MapPin size={20} className="text-cyan-500" />
                <span>India</span>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <GraduationCap className="text-cyan-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {edu.school}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {edu.period}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          edu.status === 'Current' 
                            ? 'bg-green-500/10 text-green-500' 
                            : 'bg-blue-500/10 text-blue-500'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
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

export default About;