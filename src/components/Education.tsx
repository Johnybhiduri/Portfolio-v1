import { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaGraduationCap, FaArrowUpRightFromSquare, FaCertificate } from 'react-icons/fa6';
import EducationModal from './EducationModal';
import SectionHeading from './SectionHeading';
import type { Education as EducationType } from '../data/types';

export default function Education() {
  const [active, setActive] = useState<EducationType | null>(null);

  return (
    <section id="education" className="py-16 bg-slate-50 dark:bg-dark-bg/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="Click a card to see what I actually learned, plus certificate links." />
        <div className="space-y-6">
          {resumeData.education.map((edu, i) => {
            const hasInstitutionUrl = Boolean(edu.institutionUrl && edu.institutionUrl.trim());
            const hasCertificate = Boolean(edu.certificateUrl && edu.certificateUrl.trim());

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setActive(edu)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActive(edu);
                }}
                className="group cursor-pointer bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-dark-border hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-start gap-4"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-xl text-primary-600 dark:text-primary-400 shrink-0">
                  <FaGraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    {hasCertificate && (
                      <FaCertificate
                        className="text-yellow-500 shrink-0 mt-1"
                        title="Certificate available"
                        size={14}
                      />
                    )}
                  </div>

                  {hasInstitutionUrl ? (
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-1.5"
                    >
                      {edu.institution}
                      <FaArrowUpRightFromSquare size={10} className="opacity-50" />
                    </a>
                  ) : (
                    <p className="text-slate-600 dark:text-slate-300">{edu.institution}</p>
                  )}

                  <p className="text-sm text-slate-500 mt-1">
                    {edu.period} {edu.grade && `• ${edu.grade}`}
                  </p>
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition">
                    View details →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <EducationModal education={active} onClose={() => setActive(null)} />
    </section>
  );
}