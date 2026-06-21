import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { getSocialIcon } from './Icons';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resumeData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail (e.g. insecure context) — fail silently, no crash.
    }
  };

  const canSend = form.name.trim() && form.email.trim() && form.message.trim();

  // No backend here, so we hand off to the visitor's own email client with
  // everything pre-filled — honest and actually works, unlike a fake "Sent!" toast.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${resumeData.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 dark:bg-dark-bg/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-dark-border grid md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary-500" />
                <span>{resumeData.email}</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy email address"
                  className="text-slate-400 hover:text-primary-500 ml-auto"
                >
                  {copied ? <FaCheck size={14} className="text-emerald-500" /> : <FaCopy size={14} />}
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
              {resumeData.socials.map((s) => {
                const Icon = getSocialIcon(s.platform);
                return (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    title={s.platform}
                    className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-600 dark:hover:text-primary-400 transition"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <textarea
              rows={4}
              required
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              disabled={!canSend}
              className="w-full py-3 rounded-lg bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium transition shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2"
            >
              <FaPaperPlane size={14} /> {sent ? 'Opening your email app…' : 'Send Message'}
            </button>
            <p className="text-xs text-slate-400 text-center">
              Opens your email client with this message pre-filled — sent straight to {resumeData.email}.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}