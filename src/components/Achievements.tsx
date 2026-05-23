import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaTrophy } from 'react-icons/fa6';

export default function Achievements() {
  return (
    <section id="achievements" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center">Achievements</motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.achievements.map((ach, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-white to-slate-50 dark:from-dark-card dark:to-dark-card/80 p-6 rounded-2xl border border-slate-200 dark:border-dark-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg text-yellow-600">
                  <FaTrophy />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{ach.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">{ach.description}</p>
                  {ach.year && <span className="inline-block mt-2 text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500">{ach.year}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}