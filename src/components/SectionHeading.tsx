import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold inline-block relative"
      >
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-12 rounded-full bg-gradient-to-r from-primary-500 to-emerald-500" />
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-xl mx-auto text-slate-500 dark:text-slate-400"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}