import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaDownload } from 'react-icons/fa6';
import { getSocialIcon } from './Icons';

/** Simple typing/deleting effect cycling through resumeData.roles. */
function useTypewriter(words: string[], typeMs = 55, deleteMs = 30, pauseMs = 1500) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(pause);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, deleting ? deleteMs : typeMs);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, pauseMs]);

  return text;
}

export default function Hero() {
  const roles = resumeData.roles && resumeData.roles.length > 0 ? resumeData.roles : [resumeData.title];
  const typed = useTypewriter(roles);

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {resumeData.availableForWork && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to new opportunities
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary-500 to-emerald-500 bg-clip-text text-transparent">
            {resumeData.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 h-8 text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium"
        >
          <span className="font-mono">{typed}</span>
          <span className="inline-block w-[2px] h-6 align-middle bg-primary-500 ml-1 animate-pulse" />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-relaxed"
        >
          {resumeData.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition shadow-lg shadow-primary-500/30"
          >
            Get In Touch
          </a>
          <a
            href={resumeData.resumeLink}
            download
            className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium flex items-center justify-center gap-2 transition"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex justify-center gap-4"
        >
          {resumeData.socials.map((s) => {
            const Icon = getSocialIcon(s.platform);
            return (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-600 dark:hover:text-primary-400 transition"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </motion.div>

        {(resumeData.yearsExperience || resumeData.experiences.length || resumeData.projects.length) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-14 grid grid-cols-3 max-w-md mx-auto gap-4 border-t border-slate-200 dark:border-dark-border pt-8"
          >
            {resumeData.yearsExperience && (
              <div>
                <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {resumeData.yearsExperience}+
                </p>
                <p className="text-xs text-slate-500 mt-1">Years Experience</p>
              </div>
            )}
            <div>
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {resumeData.projects.length}+
              </p>
              <p className="text-xs text-slate-500 mt-1">Projects Shipped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {resumeData.skills.length}+
              </p>
              <p className="text-xs text-slate-500 mt-1">Technologies</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}