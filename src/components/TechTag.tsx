import { getTechIcon } from './Icons';

interface TechTagProps {
  name: string;
  /** 'sm' for tight card layouts, 'md' for modal layouts */
  size?: 'sm' | 'md';
}

export default function TechTag({ name, size = 'sm' }: TechTagProps) {
  const Icon = getTechIcon(name);
  const sizing =
    size === 'sm'
      ? 'text-xs px-2 py-1 gap-1'
      : 'text-sm px-3 py-1.5 gap-1.5';

  return (
    <span
      className={`inline-flex items-center ${sizing} bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300`}
    >
      <Icon className="text-primary-500 dark:text-primary-400 shrink-0" />
      {name}
    </span>
  );
}