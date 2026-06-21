import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaTrophy, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import SectionHeading from './SectionHeading';

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Achievements" />
        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.achievements.map((ach, i) => {
            const hasLink = Boolean(ach.link && ach.link.trim());
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-white to-slate-50 dark:from-dark-card dark:to-dark-card/80 p-6 rounded-2xl border border-slate-200 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg text-yellow-600">
                    <FaTrophy />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{ach.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">{ach.description}</p>
                    <div className="flex items-center gap-3 mt-2">
                      {ach.year && (
                        <span className="inline-block text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500">
                          {ach.year}
                        </span>
                      )}
                      {hasLink && (
                        <a
                          href={ach.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline"
                        >
                          View proof <FaArrowUpRightFromSquare size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}