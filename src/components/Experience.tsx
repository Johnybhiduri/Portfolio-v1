import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-slate-50 dark:bg-dark-bg/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center">Work Experience</motion.h2>
        <div className="space-y-8">
          {resumeData.experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-dark-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                </div>
                <span className="flex items-center gap-1 text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  <FaCalendarAlt size={12} /> {exp.period}
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                {exp.description.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}