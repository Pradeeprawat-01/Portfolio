import React from 'react';
import { motion, easeInOut } from 'framer-motion';
import { GraduationCap, MapPin, Code, Cloud, Database, Server, Cpu, Zap } from 'lucide-react';

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

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut
      }
    }
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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Futuristic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-50/5 dark:via-cyan-900/5 to-transparent" />
      
      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-cyan-500/40 dark:bg-cyan-400/40 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: easeInOut
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-3 h-3 bg-blue-500/50 dark:bg-blue-400/50 rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeInOut,
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-500/40 dark:bg-purple-400/40 rounded-full"
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: easeInOut,
          delay: 1
        }}
      />

      {/* Enhanced technical icons floating */}
      <motion.div
        className="absolute top-1/4 left-1/6 text-cyan-500/60 dark:text-cyan-400/60"
        variants={floatingVariants}
        animate="animate"
      >
        <Code size={28} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/6 text-blue-500/60 dark:text-blue-400/60"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Cloud size={28} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/3 text-purple-500/60 dark:text-purple-400/60"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Database size={28} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-1/4 text-green-500/60 dark:text-green-400/60"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        <Server size={28} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 text-cyan-500/40 dark:text-cyan-400/40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <Cpu size={24} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/2 right-1/3 text-blue-500/40 dark:text-blue-400/40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2.5 }}
      >
        <Zap size={24} />
      </motion.div>

      {/* Enhanced gradient mesh background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-50/10 dark:via-cyan-900/10 to-transparent"
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 15,
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
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
              whileHover={{ scaleX: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Animated Name & Roles (No Box) */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center justify-center relative py-12"
            >
              {/* Animated Glow Behind Icons */}
              <motion.div
                className="absolute -inset-4 rounded-full blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)' }}
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
              />
              {/* Animated Icon Cluster */}
              <div className="relative w-32 h-32 flex items-center justify-center mb-2">
                <motion.div
                  className="absolute left-1/2 top-0 -translate-x-1/2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
                >
                  <Code size={32} className="text-cyan-400" />
                </motion.div>
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: easeInOut, delay: 0.5 }}
                >
                  <Cloud size={28} className="text-blue-400" />
                </motion.div>
                <motion.div
                  className="absolute left-1/2 bottom-0 -translate-x-1/2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: easeInOut, delay: 0.3 }}
                >
                  <Database size={28} className="text-purple-400" />
                </motion.div>
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                  animate={{ x: [0, -10, 0] }}
                  transition={{ duration: 2.7, repeat: Infinity, ease: easeInOut, delay: 0.7 }}
                >
                  <Server size={28} className="text-green-400" />
                </motion.div>
                <motion.div
                  className="absolute left-1/4 top-1/4"
                  animate={{ rotate: [0, 360, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                >
                  <Cpu size={20} className="text-cyan-300" />
                </motion.div>
                <motion.div
                  className="absolute right-1/4 bottom-1/4"
                  animate={{ rotate: [0, -360, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                >
                  <Zap size={20} className="text-yellow-400" />
                </motion.div>
              </div>
              {/* Animated Roles */}
              <motion.div
                className="h-12 flex flex-col items-center justify-center relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.span
                  key="devops"
                  className="block text-cyan-400 text-lg font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  DevOps Engineer
                </motion.span>
                <motion.span
                  key="fullstack"
                  className="block text-gray-400 text-base mt-1"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  Full-Stack Developer
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                I'm a passionate DevOps Engineer and Full-Stack Developer with expertise in 
                automating infrastructure, building scalable applications, and implementing 
                CI/CD pipelines. My journey in technology has been driven by a fascination 
                with creating efficient, reliable systems that power the digital world.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                With a strong foundation in both development and operations, I specialize in 
                containerization, cloud platforms, and modern DevOps practices. I believe in 
                the power of automation to transform how we build and deploy software.
              </motion.p>

              <motion.div 
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="text-cyan-500" size={20} />
                  <span>Remote / India</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <GraduationCap className="text-blue-500" size={20} />
                  <span>MCA Student</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Education Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16"
          >
            <motion.h3 
              className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Education
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(6, 182, 212, 0.2)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {edu.school}
                      </p>
                    </div>
                    <motion.span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200'
                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {edu.status}
                    </motion.span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {edu.period}
                  </p>
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