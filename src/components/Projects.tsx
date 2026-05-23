import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center">Featured Projects</motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-dark-border hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                <span className="text-4xl opacity-30">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">{p.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">{t}</span>)}
                </div>
                <div className="flex gap-3">
                  <a href={p.github} target="_blank" className="flex items-center gap-1 text-sm font-medium hover:text-primary-600"><FaGithub /> Code</a>
                  <a href={p.link} target="_blank" className="flex items-center gap-1 text-sm font-medium hover:text-primary-600"><FaExternalLinkAlt /> Live</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}