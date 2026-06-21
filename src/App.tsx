import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { resumeData } from './data/resumeData';
export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <footer className="py-8 text-center text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-dark-border">
        © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
      </footer>
    </main>
  );
}