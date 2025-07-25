import React from 'react';
import { motion, easeOut, easeInOut } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown, Code, Zap, Cpu, User, Server, Cloud, Settings } from 'lucide-react';
import profileImg from '../assets/photo.jpg.png';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: easeOut
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  const typingVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: easeOut,
        delay: 1
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-900 dark:to-cyan-900">
      {/* Profile photo with circular background */}
      {/* Remove this block to eliminate the small profile photo circle: */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <div className="bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 p-1 rounded-full shadow-xl">
          <img
            src={profileImg}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
          />
        </div>
      </div> */}

      {/* Layered animated SVG grids for depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <svg width="100%" height="100%" className="w-full h-full absolute">
          <defs>
            <pattern id="smallGrid2" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
            <pattern id="grid2" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="url(#smallGrid2)" />
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid2)" className="text-blue-400 dark:text-blue-900" />
        </svg>
        <svg width="100%" height="100%" className="w-full h-full absolute">
          <defs>
            <pattern id="dotGrid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" className="text-cyan-300 dark:text-cyan-900" />
        </svg>
      </div>

      {/* Animated geometric shapes - more, with glows and gradients */}
      <motion.div
        className="absolute top-10 left-1/6 z-0"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 22, repeat: Infinity, ease: easeInOut }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <polygon points="30,6 54,18 54,42 30,54 6,42 6,18" fill="url(#grad1)" stroke="#06b6d4" strokeWidth="2" opacity="0.18" />
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-1/4 z-0"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: easeInOut }}
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <polygon points="22,4 40,40 4,40" fill="url(#grad2)" stroke="#a78bfa" strokeWidth="2" opacity="0.15" />
          <defs>
            <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/5 z-0"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: easeInOut }}
      >
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
          <circle cx="19" cy="19" r="16" fill="url(#grad3)" stroke="#a78bfa" strokeWidth="2" opacity="0.13" />
          <defs>
            <radialGradient id="grad3" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/3 z-0"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: easeInOut }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="4" y="4" width="20" height="20" rx="4" fill="#3b82f6" opacity="0.08" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/5 z-0"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: easeInOut }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="10" fill="#06b6d4" opacity="0.07" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-1/6 right-1/6 z-0"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: easeInOut }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <polygon points="9,2 16,16 2,16" fill="#fbbf24" opacity="0.08" />
        </svg>
      </motion.div>

      {/* More floating tech icons, varied sizes and speeds */}
      <motion.div
        className="absolute top-1/5 left-1/5 text-green-400/60 dark:text-green-400/40 z-0"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: easeInOut }}
      >
        <Server size={32} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/5 right-1/6 text-blue-400/60 dark:text-blue-400/40 z-0"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: easeInOut }}
      >
        <Cloud size={28} />
      </motion.div>
      <motion.div
        className="absolute top-1/6 right-1/3 text-yellow-400/60 dark:text-yellow-400/40 z-0"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: easeInOut }}
      >
        <Settings size={26} />
      </motion.div>
      <motion.div
        className="absolute top-1/4 right-1/4 text-cyan-500/60 dark:text-cyan-400/60 z-0"
        variants={floatingVariants}
        animate="animate"
      >
        <Code size={36} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/4 text-blue-500/60 dark:text-blue-400/60 z-0"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      >
        <Zap size={32} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-1/3 text-cyan-500/60 dark:text-cyan-400/60 z-0"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      >
        <Cpu size={28} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-1/3 text-purple-400/60 dark:text-purple-400/40 z-0"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: easeInOut }}
      >
        <User size={24} />
      </motion.div>

      {/* Enhanced floating tech elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/30 dark:border-cyan-400/30"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: easeInOut
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 border border-cyan-500/30 dark:border-cyan-400/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: easeInOut,
          delay: 3
        }}
      />

      {/* Floating tech icons */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-cyan-500/60 dark:text-cyan-400/60"
        variants={floatingVariants}
        animate="animate"
      >
        <Code size={32} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 text-blue-500/60 dark:text-blue-400/60"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      >
        <Zap size={28} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/3 text-cyan-500/60 dark:text-cyan-400/60"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      >
        <Cpu size={24} />
      </motion.div>

      {/* Enhanced glowing particles */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-500/80 dark:bg-cyan-400/80 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: easeInOut
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-blue-500/80 dark:bg-blue-400/80 rounded-full"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: easeInOut,
          delay: 3
        }}
      />
      <motion.div
        className="absolute top-2/3 left-1/4 w-1 h-1 bg-cyan-500/60 dark:bg-cyan-400/60 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: easeInOut,
          delay: 6
        }}
      />

      {/* Rotating geometric shapes */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 border border-cyan-500/40 dark:border-cyan-400/40"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        variants={rotateVariants}
        animate="animate"
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-blue-500/40 dark:border-blue-400/40"
        style={{ 
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          animationDelay: '10s'
        }}
        variants={rotateVariants}
        animate="animate"
      />

      {/* Pulsing circles */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-4 h-4 bg-cyan-500/30 dark:bg-cyan-400/30 rounded-full"
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-500/30 dark:bg-blue-400/30 rounded-full"
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      />

      {/* Restore the absolutely positioned profile photo block at the top: */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <div className="bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 p-1 rounded-full shadow-xl">
          <img
            src={profileImg}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
          />
        </div>
      </div> */}

      {/* Place the profile photo above the name and intro, centered, with margin-top. */}
      {/* Remove absolute positioning and black border/background. */}
      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Content on the left, slightly shifted right */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-center md:text-left flex-1 md:ml-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Hi, I'm{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 inline-block overflow-hidden"
              variants={typingVariants}
              initial="hidden"
              animate="visible"
            >
              Pradeep Singh Rawat
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl"
          >
            Automating the future—one container, one pipeline at a time.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(6, 182, 212, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              href="mailto:pradeepsrawat1109@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <Mail className="mr-2" size={20} />
              Email Me
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(31, 41, 55, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Pradeeprawat-01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg"
            >
              <Github className="mr-2" size={20} />
              GitHub
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(37, 99, 235, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/pradeep-singh-rawat-9707ard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg"
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </motion.a>

            {/* Download Resume Button */}
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(16, 185, 129, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              href="/Pradeep_resume_devops.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </motion.a>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(6, 182, 212, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-6 py-3 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <Mail className="mr-2" size={20} />
              Contact
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="animate-bounce"
          >
            <motion.button
              whileHover={{ 
                scale: 1.3,
                y: 5
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection('about')}
              className="text-cyan-500 hover:text-cyan-400 transition-colors"
            >
              <ChevronDown size={32} />
            </motion.button>
          </motion.div>
        </motion.div>
        {/* Profile photo on the right, medium size */}
        <motion.div className="flex flex-col items-center md:items-end mt-8 md:mt-0 flex-1 w-full md:w-auto">
          <div className="bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 p-1 rounded-full shadow-xl">
            <motion.img
              src={profileImg}
              alt="Profile"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-white dark:border-gray-900 shadow-lg mb-6 md:mb-0"
              animate={{
                y: [0, -20, 0, 20, 0],
                scale: [1, 1.05, 1, 0.95, 1],
                boxShadow: [
                  "0 0 40px 10px rgba(6,182,212,0.15)",
                  "0 0 60px 20px rgba(59,130,246,0.18)",
                  "0 0 40px 10px rgba(6,182,212,0.15)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;