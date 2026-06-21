import { FaGithub, FaArrowUpRightFromSquare, FaListCheck } from 'react-icons/fa6';
import type { Project } from '../data/types';
import Modal from './Modal';
import ImageCarousel from './ImageCarousel';
import TechTag from './TechTag';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const hasGithub = Boolean(project.github && project.github.trim() && project.github !== '#');
  const hasLink = Boolean(project.link && project.link.trim() && project.link !== '#');

  return (
    <Modal isOpen={Boolean(project)} onClose={onClose} label={`${project.title} details`}>
      <div className="p-6 sm:p-8">
        <ImageCarousel images={project.images ?? []} alt={project.title} />

        <h3 className="text-2xl font-bold mt-6">{project.title}</h3>

        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.fullDescription || project.description}
        </p>

        {project.contributions && project.contributions.length > 0 && (
          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">
              <FaListCheck className="text-primary-500" /> What I built
            </h4>
            <ul className="space-y-2">
              {project.contributions.map((c, i) => (
                <li key={i} className="flex gap-2 text-slate-600 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">
            Tech used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechTag key={t} name={t} size="md" />
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium hover:opacity-90 transition"
            >
              <FaGithub /> View Code
            </a>
          ) : (
            <span
              title="Repository not public"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-medium cursor-not-allowed"
            >
              <FaGithub /> Code unavailable
            </span>
          )}

          {hasLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <FaArrowUpRightFromSquare /> Visit Live
            </a>
          ) : null}
        </div>
      </div>
    </Modal>
  );
}