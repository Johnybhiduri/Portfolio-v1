import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCode, FaRobot, FaDownload, FaXmark } from 'react-icons/fa6';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Update these to match your actual resume file names sitting in /public
const RESUME_OPTIONS = [
  {
    role: 'Fullstack Developer',
    description: 'Web apps, APIs & full-stack projects',
    file: '/resumes/Fullstack_Developer_Resume.pdf',
    fileName: 'Jainendra_Fullstack_Resume.pdf',
    icon: FaCode,
  },
  {
    role: 'AI Developer',
    description: 'ML, deep learning & AI/research projects',
    file: '/resumes/AI_Developer_Resume.pdf',
    fileName: 'Jainendra_AI_Resume.pdf',
    icon: FaRobot,
  },
];

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            className="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-dark-border shadow-2xl p-6 relative"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <FaXmark size={16} />
            </button>

            <h3
              id="resume-modal-title"
              className="text-lg font-semibold text-slate-900 dark:text-white"
            >
              Download Resume
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-5">
              Choose the version that fits what you're hiring for.
            </p>

            <div className="flex flex-col gap-3">
              {RESUME_OPTIONS.map(({ role, description, file, fileName, icon: Icon }) => (
                <a
                  key={role}
                  href={file}
                  download={fileName}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-border hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition group"
                >
                  <span className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                    <Icon size={16} />
                  </span>
                  <span className="flex-1 text-left">
                    <span className="block text-sm font-medium text-slate-800 dark:text-slate-100">
                      {role}
                    </span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">
                      {description}
                    </span>
                  </span>
                  <FaDownload
                    size={14}
                    className="text-slate-400 group-hover:text-primary-500 transition"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}