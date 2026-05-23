import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

export default function Summary() {
  return (
    <section id="summary" className="py-16 bg-white dark:bg-dark-card border-y border-slate-200 dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-center">About Me</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-center text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
          {resumeData.summary.split('. ').map((s, i) => <p key={i}>{s}.</p>)}
        </motion.div>
      </div>
    </section>
  );
}