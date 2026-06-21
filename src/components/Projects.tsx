import { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaGithub, FaArrowUpRightFromSquare, FaRocket } from 'react-icons/fa6';
import TechTag from './TechTag';
import ProjectModal from './ProjectModal';
import SectionHeading from './SectionHeading';
import type { Project } from '../data/types';

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Click any card to see full details, screenshots, and my specific contributions." />

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((p, i) => {
            const hasGithub = Boolean(p.github && p.github.trim() && p.github !== '#');
            const hasLink = Boolean(p.link && p.link.trim() && p.link !== '#');
            const thumbnail = p.images && p.images.length > 0 ? p.images[0] : undefined;

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActive(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActive(p);
                }}
                className="group cursor-pointer bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-dark-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
                  {thumbnail ? (
                    <img src={thumbnail} alt={p.title} className="w-full h-full object-cover" />
                  ) : (
                    <FaRocket className="text-4xl opacity-30" />
                  )}
                </div>
                <div className="p-6">
                  {hasLink ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xl font-bold mb-2 inline-flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition"
                    >
                      {p.title}
                      <FaArrowUpRightFromSquare size={12} className="opacity-50" />
                    </a>
                  ) : (
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
                      {p.title}
                    </h3>
                  )}
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <TechTag key={t} name={t} />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    {hasGithub ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        <FaGithub /> Code
                      </a>
                    ) : (
                      <span
                        title="Repository not public"
                        className="flex items-center gap-1 text-sm font-medium text-slate-300 dark:text-slate-600 cursor-not-allowed"
                      >
                        <FaGithub /> Code
                      </span>
                    )}
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition">
                      View Details →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}