import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const experience = {
    title: 'DevOps Intern',
    company: 'LinuxWorld Informatics Pvt. Ltd.',
    location: 'Jaipur',
    period: 'June 2, 2025 – Present',
    responsibilities: [
      'Built CI/CD pipelines with Jenkins, Docker, AWS',
      'Integrated GenAI tools like Shell-GPT and TGPT for automation',
      'Mentored by industry leader Vimal Daga Sir',
    ],
  };

  const certifications = [
    {
      title: 'Linux AI: Unlocking & Automate Linux Potential with Gen AI',
      issuer: 'Udemy',
      date: 'Dec 2024',
      credentialId: 'UC-031b18d0-5bce-49cd-8442-3041eaf1433b',
      skills: ['Linux', 'Gen AI', 'Automation Tools', 'Shell-GPT', 'TGPT'],
    },
    {
      title: 'Linux with GenAI',
      issuer: 'LinuxWorld Informatics Pvt Ltd',
      date: 'Dec 2024',
      credentialId: 'LW-JPR-2024-2634',
      skills: ['Linux Admin', 'ShellGPT', 'TGPT', 'Automation Tools'],
    },
    {
      title: 'Java Full Stack Developer',
      issuer: 'Wipro TalentNext',
      date: 'Oct 2024',
      credentialId: '',
      skills: ['Java', 'JSP', 'HTML5', 'CSS', 'JavaScript', 'OOP'],
    },
    {
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'Jun 2024',
      credentialId: '',
      skills: ['Cybersecurity', 'Network Security'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Experience & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Briefcase className="mr-2 text-cyan-500" size={24} />
                Experience
              </h3>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Briefcase className="text-cyan-500" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      {experience.title}
                    </h4>
                    <p className="text-cyan-500 font-medium mb-2">
                      {experience.company}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {experience.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {experience.period}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-300">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Award className="mr-2 text-cyan-500" size={24} />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-lg"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-cyan-500/10 rounded-lg">
                        <BookOpen className="text-cyan-500" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-cyan-500 text-sm font-medium mb-1">
                          {cert.issuer}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          {cert.date}
                        </p>
                        {cert.credentialId && (
                          <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                            Credential ID: {cert.credentialId}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-cyan-500/10 text-cyan-500 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;