import React from 'react';
import { motion, easeInOut } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const floatingVariants = {
    animate: {
      y: [-2, 2, -2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-1/6 w-2 h-2 bg-cyan-400/30 dark:bg-cyan-500/30 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: easeInOut
        }}
      />
      <motion.div
        className="absolute top-20 right-1/4 w-1.5 h-1.5 bg-blue-400/40 dark:bg-blue-500/40 rounded-full"
        animate={{
          y: [0, 12, 0],
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
        className="absolute bottom-10 left-1/3 w-2 h-2 bg-purple-400/30 dark:bg-purple-500/30 rounded-full"
        animate={{
          y: [0, -10, 0],
          x: [0, 6, 0],
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
        <Heart size={16} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/8 text-blue-400/40 dark:text-blue-500/40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Mail size={16} />
      </motion.div>

      {/* Gradient mesh background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-900/5 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: easeInOut
        }}
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="text-center md:text-left mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-xl font-bold text-white mb-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Pradeep Singh Rawat
            </motion.h3>
            <motion.p 
              className="text-gray-400"
              whileHover={{ color: "#06b6d4" }}
              transition={{ duration: 0.2 }}
            >
              DevOps Engineer & Full-Stack Developer
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="https://github.com/Pradeeprawat-01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ 
                scale: 1.2,
                color: "#06b6d4",
                y: -3
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/pradeep-singh-rawat-9707ard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ 
                scale: 1.2,
                color: "#06b6d4",
                y: -3
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:pradeepsrawat1109@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ 
                scale: 1.2,
                color: "#06b6d4",
                y: -3
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.p 
            className="text-gray-400 text-sm"
            whileHover={{ color: "#06b6d4" }}
            transition={{ duration: 0.2 }}
          >
            © 2024 Pradeep Singh Rawat. Made with{' '}
            <motion.span
              className="inline-block text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} />
            </motion.span>{' '}
            and lots of ☕
          </motion.p>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            scale: 1.1,
            y: -3,
            boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;