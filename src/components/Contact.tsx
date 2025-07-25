import React, { useState, useRef } from 'react';
import { motion, easeInOut } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Mail as MailIcon, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [feedback, setFeedback] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
      y: [-3, 3, -3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setFeedback(null);
    if (!formRef.current) return;
    emailjs.sendForm(
      'service_9r5igv1',
      'template_9g911ep',
      formRef.current,
      'xHGKAYm3NOeg076Ev'
    )
    .then(() => {
      setFeedback('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setSending(false);
    })
    .catch(() => {
      setFeedback('Failed to send message. Please try again later.');
      setSending(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-cyan-500" size={24} />,
      title: 'Email',
      value: 'pradeepsrawat1109@gmail.com',
      link: 'mailto:pradeepsrawat1109@gmail.com'
    },
    {
      icon: <Phone className="text-blue-500" size={24} />,
      title: 'Phone',
      value: '+91 123 456 7890',
      link: 'tel:+911234567890'
    },
    {
      icon: <MapPin className="text-green-500" size={24} />,
      title: 'Location',
      value: 'Pauri Garhwal, Uttarakhand',
      link: null
    },
    {
      icon: <Github className="text-cyan-500" size={24} />,
      title: 'GitHub',
      value: 'Pradeeprawat-01',
      link: 'https://github.com/Pradeeprawat-01'
    },
    {
      icon: <Linkedin className="text-cyan-500" size={24} />,
      title: 'LinkedIn',
      value: 'pradeep-singh-rawat-9707ard',
      link: 'https://linkedin.com/in/pradeep-singh-rawat-9707ard'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
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
        <MessageSquare size={20} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/8 text-blue-400/40 dark:text-blue-500/40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <MailIcon size={20} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/6 text-purple-400/40 dark:text-purple-500/40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <User size={20} />
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
              Get In Touch
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
              whileHover={{ scaleX: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Let's Connect
              </motion.h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      x: 5
                    }}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div 
                      className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        backgroundColor: "rgba(6, 182, 212, 0.1)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <motion.a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors"
                          whileHover={{ color: "#06b6d4" }}
                          transition={{ duration: 0.2 }}
                        >
                          {info.value}
                        </motion.a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 text-white"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(6, 182, 212, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-3">Ready to Collaborate?</h4>
                <p className="text-cyan-100">
                  I'm always open to discussing new opportunities, interesting projects, and innovative ideas.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Send Message
                </motion.h3>
                {feedback && (
                  <div className={`mb-4 text-center font-medium ${feedback.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{feedback}</div>
                )}

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                        placeholder="Your name"
                        required
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                        placeholder="Your message..."
                        required
                      />
                    </motion.div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    disabled={sending}
                  >
                    <Send size={20} />
                    <span>{sending ? 'Sending...' : 'Send Message'}</span>
                  </motion.button>
                </div>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;