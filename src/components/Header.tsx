import React, { useState, useEffect } from 'react';
import { motion, easeInOut } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-3 h-3 bg-cyan-400/60 dark:bg-cyan-500/60 rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: easeInOut
        }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-2 h-2 bg-blue-400/70 dark:bg-blue-500/70 rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeInOut,
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-purple-400/60 dark:bg-purple-500/60 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: easeInOut,
          delay: 1
        }}
      />

      {/* Technical Elements - DevOps & Full-Stack */}
      
      {/* Container/Docker elements */}
      <motion.div
        className="absolute top-2 left-1/6 w-8 h-5 border-2 border-green-400/60 dark:border-green-500/60 rounded"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeInOut
        }}
      />
      <motion.div
        className="absolute top-2 right-1/6 w-6 h-4 border-2 border-blue-400/60 dark:border-blue-500/60 rounded"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: easeInOut,
          delay: 2
        }}
      />

      {/* Database elements */}
      <motion.div
        className="absolute top-1 right-1/4 w-5 h-8 border-2 border-purple-400/50 dark:border-purple-500/50 rounded"
        animate={{
          y: [0, -5, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: easeInOut,
          delay: 1
        }}
      />

      {/* Code brackets */}
      <motion.div
        className="absolute top-3 left-1/3 text-sm text-cyan-400/80 dark:text-cyan-500/80 font-mono font-bold"
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: easeInOut
        }}
      >
        {'</>'}
      </motion.div>
      <motion.div
        className="absolute top-2 right-1/3 text-sm text-blue-400/80 dark:text-blue-500/80 font-mono font-bold"
        animate={{
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: easeInOut,
          delay: 1
        }}
      >
        {'{}'}
      </motion.div>

      {/* Network connection lines */}
      <motion.div
        className="absolute top-1 left-1/5 w-10 h-1 bg-gradient-to-r from-green-400/60 dark:from-green-500/60 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: easeInOut,
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-2 right-1/5 w-8 h-1 bg-gradient-to-r from-blue-400/60 dark:from-blue-500/60 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeInOut,
          delay: 3
        }}
      />

      {/* Server/Cloud elements */}
      <motion.div
        className="absolute top-1 left-1/2 w-4 h-4 border-2 border-cyan-400/50 dark:border-cyan-500/50 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: easeInOut,
          delay: 2
        }}
      />

      {/* Pipeline elements */}
      <motion.div
        className="absolute top-2 left-1/4 w-3 h-3 bg-orange-400/60 dark:bg-orange-500/60 rounded-full"
        animate={{
          x: [0, 12, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: easeInOut,
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1 right-1/3 w-2.5 h-2.5 bg-yellow-400/60 dark:bg-yellow-500/60 rounded-full"
        animate={{
          x: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeInOut,
          delay: 2
        }}
      />

      {/* Additional technical symbols */}
      <motion.div
        className="absolute top-1 left-1/8 text-xs text-green-400/70 dark:text-green-500/70 font-mono font-bold"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: easeInOut,
          delay: 2
        }}
      >
        {'<>'}
      </motion.div>
      <motion.div
        className="absolute top-2 right-1/8 text-xs text-purple-400/70 dark:text-purple-500/70 font-mono font-bold"
        animate={{
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: easeInOut,
          delay: 1
        }}
      >
        {'[]'}
      </motion.div>

      {/* Subtle geometric shapes */}
      <motion.div
        className="absolute top-0 right-1/4 w-8 h-8 border border-cyan-200/20 dark:border-cyan-700/20 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: easeInOut
        }}
      />
      <motion.div
        className="absolute top-0 left-1/3 w-6 h-6 border border-blue-200/20 dark:border-blue-700/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: easeInOut,
          delay: 3
        }}
      />

      {/* Gradient mesh background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-50/5 dark:via-cyan-900/5 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: easeInOut
        }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.02]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(100, 116, 139, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 116, 139, 0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '15px 15px', '0px 0px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating lines */}
      <motion.div
        className="absolute top-0 left-1/4 w-16 h-px bg-gradient-to-r from-cyan-400/30 dark:from-cyan-500/30 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeInOut,
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-12 h-px bg-gradient-to-r from-blue-400/20 dark:from-blue-500/20 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: easeInOut,
          delay: 4
        }}
      />

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Theme Toggle - Moved to left side */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -3, 0]
            }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: easeInOut
              }
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 180,
              y: -5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/20 dark:hover:to-blue-900/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {/* Desktop Navigation - Right side */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  y: {
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: easeInOut,
                    delay: index * 0.2
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl group ${
                  activeSection === item.id
                    ? 'text-cyan-500 dark:text-cyan-400 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gradient-to-r hover:from-gray-50 hover:to-cyan-50 dark:hover:from-gray-800/50 dark:hover:to-cyan-900/10'
                }`}
              >
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Text with relative positioning */}
                <span className="relative z-10">{item.label}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-sm"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -2, 0]
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.7,
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: easeInOut,
                  delay: 0.5
                }
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 90,
                y: -3,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/20 dark:hover:to-blue-900/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ 
                    x: 5,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-500 dark:text-cyan-400 shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-cyan-50 dark:hover:from-gray-800 dark:hover:to-cyan-900/10'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;