import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaGraduationCap } from 'react-icons/fa6';

export default function Education() {
  return (
    <section id="education" className="py-16 bg-slate-50 dark:bg-dark-bg/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center">Education</motion.h2>
        <div className="space-y-6">
          {resumeData.education.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-dark-border flex items-start gap-4">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-xl text-primary-600">
                <FaGraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="text-slate-600 dark:text-slate-300">{edu.institution}</p>
                <p className="text-sm text-slate-500 mt-1">{edu.period} {edu.grade && `• ${edu.grade}`}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}