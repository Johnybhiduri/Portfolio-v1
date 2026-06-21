import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const sections = ['Summary', 'Skills', 'Experience', 'Projects', 'Education', 'Achievements', 'Contact'];

const THEME_KEY = 'theme';

export default function Navbar() {
  // Default to DARK mode unless the visitor has explicitly chosen light before.
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem(THEME_KEY) : null;
    const isDark = saved === 'light' ? false : true; // default → dark
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  // Highlight the nav item for whichever section is currently in view.
  useEffect(() => {
    const ids = ['hero', ...sections.map((s) => s.toLowerCase())];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    window.localStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', next);
  };

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-card/80 backdrop-blur-md border-b border-slate-200 dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className="text-xl font-bold bg-gradient-to-r from-primary-500 to-emerald-500 bg-clip-text text-transparent"
          >
            Portfolio
          </button>

          <div className="hidden md:flex items-center gap-6">
            {sections.map((s) => {
              const id = s.toLowerCase();
              const isActive = active === id;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className={`relative text-sm font-medium transition pb-1 ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {s}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-primary-500"
                    />
                  )}
                </button>
              );
            })}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {dark ? <FiSun className="text-yellow-400" /> : <FiMoon />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button type="button" onClick={toggleTheme} aria-label="Toggle dark mode" className="p-2">
              {dark ? <FiSun className="text-yellow-400" /> : <FiMoon />}
            </button>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="p-2"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden border-t border-slate-200 dark:border-dark-border"
          >
            <div className="flex flex-col p-4 gap-3 bg-white dark:bg-dark-card">
              {sections.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => scrollTo(s.toLowerCase())}
                  className={`text-left py-2 transition ${
                    active === s.toLowerCase()
                      ? 'text-primary-600 dark:text-primary-400 font-semibold'
                      : 'hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}