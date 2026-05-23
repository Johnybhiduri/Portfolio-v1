import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const sections = ['Summary', 'Skills', 'Experience', 'Projects', 'Education', 'Achievements', 'Contact'];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') === 'dark';
    setDark(saved);
    if (saved) document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', next);
  };

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-card/80 backdrop-blur-md border-b border-slate-200 dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="text-xl font-bold bg-gradient-to-r from-primary-500 to-emerald-500 bg-clip-text text-transparent">
            Portfolio
          </button>

          <div className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <button key={s} onClick={() => scrollTo(s.toLowerCase())}
                className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition">
                {s}
              </button>
            ))}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              {dark ? <FiSun className="text-yellow-400" /> : <FiMoon />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2">{dark ? <FiSun className="text-yellow-400" /> : <FiMoon />}</button>
            <button onClick={() => setOpen(!open)} className="p-2">
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
            className="md:hidden overflow-hidden border-t border-slate-200 dark:border-dark-border">
            <div className="flex flex-col p-4 gap-3 bg-white dark:bg-dark-card">
              {sections.map((s) => (
                <button key={s} onClick={() => scrollTo(s.toLowerCase())} className="text-left py-2 hover:text-primary-600">
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