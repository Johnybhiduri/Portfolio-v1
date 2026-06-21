// Proficiency tiers — intentionally qualitative instead of an arbitrary
// percentage so the UI never has to render a "fake" 97% progress bar.
export type SkillLevel = 'Familiar' | 'Proficient' | 'Advanced' | 'Expert';

export interface Skill {
  name: string;
  category: string;
  level: SkillLevel;
  /** Optional: years of hands-on usage, shown as a small caption */
  years?: number;
}

export interface Experience {
  role: string;
  company: string;
  /** Optional company website — if provided, the company name becomes a link */
  companyUrl?: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Project {
  title: string;
  /** Short blurb shown on the card */
  description: string;
  /** Longer write-up shown inside the modal. Falls back to `description` if omitted */
  fullDescription?: string;
  /** Bullet points of what YOU specifically built/owned */
  contributions?: string[];
  tech: string[];
  /** Live/demo URL. Leave empty/undefined if there isn't one — the project
   *  title will render as plain text instead of a link. */
  link?: string;
  /** GitHub repo URL. Leave empty/undefined to render the code link disabled/faded. */
  github?: string;
  /** One or more screenshots. If more than one is provided, the modal shows a carousel. */
  images?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  /** Optional school/university website — institution name becomes a link */
  institutionUrl?: string;
  /** Optional link to a certificate/diploma (PDF, Credly, etc.) */
  certificateUrl?: string;
  period: string;
  grade?: string;
  /** Longer description shown in the modal */
  description?: string;
  /** Key things learned / coursework — shown as a list in the modal */
  learnings?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
  /** Optional proof link (article, leaderboard, certificate, etc.) */
  link?: string;
}

export interface Social {
  platform: string;
  url: string;
}

export interface ResumeData {
  name: string;
  title: string;
  /** Rotating taglines shown under the name on the Hero (typing effect).
   *  Falls back to a single `title` if omitted. */
  roles?: string[];
  email: string;
  phone: string;
  location: string;
  summary: string;
  resumeLink: string;
  yearsExperience?: number;
  availableForWork?: boolean;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  achievements: Achievement[];
  socials: Social[];
}