import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaEnvelope, FaPhone, FaCopy } from 'react-icons/fa6';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from 'react';

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  // You can add a toast here if desired
};

export default function Contact() {
  const [copied, setCopied] = useState('');
  const handleCopy = (field: string, text: string) => {
    copyToClipboard(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 dark:bg-dark-bg/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center">Get In Touch</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-dark-border grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary-500" />
                <span>{resumeData.email}</span>
                <button onClick={() => handleCopy('email', resumeData.email)} className="text-slate-400 hover:text-primary-500 ml-auto">
                  {copied === 'email' ? 'Copied!' : <FaCopy size={14} />}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary-500" />
                <span>{resumeData.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary-500" />
                <span>{resumeData.location}</span>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              {resumeData.socials.map(s => (
                <a key={s.platform} href={s.url} target="_blank" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-600 transition">
                  {/* Icon handled via text placeholder or import dynamically if needed. Keep simple: */}
                  <span className="text-lg font-bold">{s.platform[0]}</span>
                </a>
              ))}
            </div>
          </div>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500" />
            <textarea rows={4} placeholder="Message" className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
            <button className="w-full py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition shadow-lg shadow-primary-500/30">Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}