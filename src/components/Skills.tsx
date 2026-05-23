import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const categories = Array.from(new Set(resumeData.skills.map(s => s.category)));
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center">Technical Skills</motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map(cat => (
            <motion.div key={cat} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-dark-border">
              <h3 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400">{cat}</h3>
              <div className="space-y-4">
                {resumeData.skills.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1 text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1.2, delay: 0.2 }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}