import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { getTechIcon } from './Icons';
import type { SkillLevel } from '../data/types';
import SectionHeading from './SectionHeading';

const TIER_ORDER: SkillLevel[] = ['Familiar', 'Proficient', 'Advanced', 'Expert'];
const TIER_COLOR: Record<SkillLevel, string> = {
  Familiar: 'bg-slate-300 dark:bg-slate-600',
  Proficient: 'bg-sky-400 dark:bg-sky-500',
  Advanced: 'bg-primary-500',
  Expert: 'bg-emerald-500',
};

/** Small 4-bar "signal strength" style indicator — deliberately not a
 *  percentage progress bar, since an exact-looking number (e.g. "97%")
 *  reads as fabricated. This communicates relative depth instead. */
function ProficiencyBars({ level }: { level: SkillLevel }) {
  const filled = TIER_ORDER.indexOf(level) + 1;
  return (
    <div className="flex items-end gap-0.5" aria-label={`Proficiency: ${level}`} title={level}>
      {[1, 2, 3, 4].map((bar) => (
        <span
          key={bar}
          className={`w-1.5 rounded-sm transition-colors ${
            bar <= filled ? TIER_COLOR[level] : 'bg-slate-200 dark:bg-slate-700'
          }`}
          style={{ height: `${6 + bar * 3}px` }}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const categories = Array.from(new Set(resumeData.skills.map((s) => s.category)));

  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="Grouped by category — bars reflect relative depth, not a made-up percentage."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-dark-border"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-primary-600 dark:text-primary-400">
                {cat}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resumeData.skills
                  .filter((s) => s.category === cat)
                  .map((skill) => {
                    const Icon = getTechIcon(skill.name);
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400 shrink-0">
                          <Icon size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{skill.name}</p>
                          <p className="text-xs text-slate-400">
                            {skill.level}
                            {skill.years ? ` · ${skill.years}y` : ''}
                          </p>
                        </div>
                        <div className="ml-auto shrink-0">
                          <ProficiencyBars level={skill.level} />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}