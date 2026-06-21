import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaCalendarDays, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import TechTag from './TechTag';
import SectionHeading from './SectionHeading';
import type { Experience as ExperienceType } from '../data/types';

interface CompanyGroup {
  company: string;
  companyUrl?: string;
  /** Oldest role first, so the timeline reads top-to-bottom as growth */
  roles: ExperienceType[];
}

function groupByCompany(experiences: ExperienceType[]): CompanyGroup[] {
  const groups: CompanyGroup[] = [];

  experiences.forEach((exp) => {
    const last = groups[groups.length - 1];
    if (last && last.company === exp.company) {
      last.roles.push(exp);
    } else {
      groups.push({ company: exp.company, companyUrl: exp.companyUrl, roles: [exp] });
    }
  });

  // Reverse roles within each group so the timeline shows oldest → newest (growth)
  return groups.map((g) => ({ ...g, roles: [...g.roles].reverse() }));
}

function CompanyHeader({ group }: { group: CompanyGroup }) {
  const hasUrl = Boolean(group.companyUrl && group.companyUrl.trim());
  return (
    <div className="flex flex-wrap items-baseline gap-2 mb-1">
      {hasUrl ? (
        <a
          href={group.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1.5"
        >
          {group.company}
          <FaArrowUpRightFromSquare size={11} className="opacity-60" />
        </a>
      ) : (
        <span className="text-lg font-bold text-primary-600 dark:text-primary-400">{group.company}</span>
      )}
      {group.roles.length > 1 && (
        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
          {group.roles.length - 1} promotion{group.roles.length - 1 > 1 ? 's' : ''} · {group.roles[0].role} → {group.roles[group.roles.length - 1].role}
        </span>
      )}
    </div>
  );
}

export default function Experience() {
  const groups = groupByCompany(resumeData.experiences);

  return (
    <section id="experience" className="py-16 bg-slate-50 dark:bg-dark-bg/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" />

        <div className="space-y-8">
          {groups.map((group, gi) => (
            <motion.div
              key={`${group.company}-${gi}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-dark-border"
            >
              <CompanyHeader group={group} />

              <div className={group.roles.length > 1 ? 'mt-5 relative pl-6' : 'mt-3'}>
                {group.roles.length > 1 && (
                  <span className="absolute left-[5px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700" />
                )}

                <div className="space-y-6">
                  {group.roles.map((role, ri) => (
                    <div key={`${role.role}-${ri}`} className="relative">
                      {group.roles.length > 1 && (
                        <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full bg-primary-500 ring-4 ring-white dark:ring-dark-card" />
                      )}

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-base sm:text-lg font-semibold">{role.role}</h3>
                        <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full self-start sm:self-auto">
                          <FaCalendarDays size={12} /> {role.period}
                        </span>
                      </div>

                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                        {role.description.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.tech.map((t) => (
                          <TechTag key={t} name={t} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}