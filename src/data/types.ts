export interface Skill { name: string; level: number; category: string }
export interface Experience {
  role: string; company: string; period: string
  description: string[]; tech: string[]
}
export interface Project {
  title: string; description: string; tech: string[]
  link: string; github: string; image?: string
}
export interface Education {
  degree: string; institution: string; period: string; grade?: string
}
export interface Achievement {
  title: string; description: string; year?: string
}
export interface ResumeData {
  name: string; title: string; email: string; phone: string
  location: string; summary: string; resumeLink: string
  skills: Skill[]; experiences: Experience[]; projects: Project[]
  education: Education[]; achievements: Achievement[]
  socials: { platform: string; url: string; icon: string }[]
}