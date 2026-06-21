import { FaGraduationCap, FaCertificate, FaArrowUpRightFromSquare, FaBookOpen } from 'react-icons/fa6';
import type { Education } from '../data/types';
import Modal from './Modal';

interface EducationModalProps {
  education: Education | null;
  onClose: () => void;
}

export default function EducationModal({ education, onClose }: EducationModalProps) {
  if (!education) return null;

  const hasCertificate = Boolean(education.certificateUrl && education.certificateUrl.trim());

  return (
    <Modal isOpen={Boolean(education)} onClose={onClose} label={`${education.degree} details`}>
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-xl text-primary-600 dark:text-primary-400 shrink-0">
            <FaGraduationCap size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold">{education.degree}</h3>
            <p className="text-slate-600 dark:text-slate-300">{education.institution}</p>
            <p className="text-sm text-slate-500 mt-1">
              {education.period}
              {education.grade && ` • ${education.grade}`}
            </p>
          </div>
        </div>

        {education.description && (
          <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">{education.description}</p>
        )}

        {education.learnings && education.learnings.length > 0 && (
          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">
              <FaBookOpen className="text-primary-500" /> What I learned
            </h4>
            <ul className="space-y-2">
              {education.learnings.map((l, i) => (
                <li key={i} className="flex gap-2 text-slate-600 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasCertificate && (
          <div className="mt-8">
            <a
              href={education.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition"
            >
              <FaCertificate /> View Certificate <FaArrowUpRightFromSquare size={12} />
            </a>
          </div>
        )}
      </div>
    </Modal>
  );
}