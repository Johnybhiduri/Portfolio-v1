import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaDownload } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi, I'm <span className="bg-gradient-to-r from-primary-500 to-emerald-500 bg-clip-text text-transparent">{resumeData.name}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium">
          {resumeData.title}
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-relaxed">
          {resumeData.summary}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/#contact" className="px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition shadow-lg shadow-primary-500/30">
            Get In Touch
          </a>
          <a href={resumeData.resumeLink} download className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium flex items-center justify-center gap-2 transition">
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}