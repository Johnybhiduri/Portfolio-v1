// src/data/resumeData.ts
import type { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: 'Jainendra Bhiduri',
  title: 'Software Engineer II | AI & Distributed Systems',
  email: 'johnybhiduri8955@gmail.com',
  phone: '+91 89552 34081',
  location: 'Pune, India',
  summary: 'Software Engineer II with 3 years of production experience building AI-powered, distributed systems at scale. Designed and shipped the world\'s #1 PDF accessibility platform — used by the US Department of Justice and federal agencies — which outperforms Adobe in compliance scores. Expert in Python, FastAPI, React, and AWS, with deep hands-on experience architecting async batch pipelines, multi-tenant SaaS backends, RAG systems, and LLM-integrated applications. Sole engineer on multiple government-facing products, owning full system design, implementation, and production deployment.',
  resumeLink: '/Jainendra_Bhiduri_Resume_2026.pdf',
  socials: [
    { platform: 'GitHub', url: 'https://github.com/Johnybhiduri', icon: 'fa6:fa-github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/jainendra-bhiduri-245054220', icon: 'fa6:fa-linkedin' },
    { platform: 'Email', url: 'mailto:johnybhiduri8955@gmail.com', icon: 'fa6:fa-envelope' },
  ],
  skills: [
    { name: 'Python', level: 98, category: 'Languages' },
    { name: 'TypeScript / JavaScript', level: 90, category: 'Languages' },
    { name: 'SQL', level: 85, category: 'Languages' },
    { name: 'FastAPI / Flask / Django', level: 95, category: 'Backend' },
    { name: 'Async Python & Microservices', level: 92, category: 'Backend' },
    { name: 'React / Redux / ReactFlow', level: 88, category: 'Frontend' },
    { name: 'AWS (Lambda, S3, SQS/SNS, Bedrock, Textract, EC2)', level: 94, category: 'Cloud & Infra' },
    { name: 'RAG / LangChain / FAISS', level: 90, category: 'AI / ML' },
    { name: 'LLM Integration & Prompt Engineering', level: 92, category: 'AI / ML' },
    { name: 'MongoDB / Redis / Docker', level: 85, category: 'Data & DevOps' },
  ],
  experiences: [
    {
      role: 'Software Engineer II',
      company: 'NetraLabs',
      period: 'Jan 2025 – Present',
      description: [
        'Rebuilt document-processing pipeline from synchronous to async batch execution using AWS SQS/SNS, reducing per-document processing time by 20× and eliminating HTTP failures under high concurrency.',
        'Designed a multi-tenant SaaS architecture (Super Admin → Reseller → Customer → User) with JWT+2FA and per-tenant data isolation across MongoDB and S3.',
        'Built AI pipelines using AWS Bedrock and optimized LLM prompting to auto-detect/remediate complex PDF structures (tables, figures, reading order, TOC).',
        'Reduced AI processing costs by ~40% through request batching, prompt optimization, and intelligent routing away from LLM calls for simple elements.',
      ],
      tech: ['Python', 'FastAPI', 'AWS SQS/SNS', 'Bedrock', 'MongoDB', 'S3', 'React', 'JWT'],
    },
    {
      role: 'Software Engineer I',
      company: 'NetraLabs',
      period: 'Jun 2024 – Jan 2025',
      description: [
        'Sole engineer for IMS (Secure Document Exchange for US Correction Centers): delivered end-to-end system design to production, replacing vulnerable paper-based processes.',
        'Engineered React frontend with on-demand PDF loading, paginated/sortable file tables, and Redux state management for datasets of thousands of case files.',
        'Implemented drag-and-drop agent workflow engine (ReactFlow + FastAPI) with LLM-powered Decision Gate and embedded Python interpreter.',
        'Integrated RAG pipelines using FAISS and AWS SageMaker for proprietary data fine-tuning and no-code AI agent deployment.',
      ],
      tech: ['React', 'Redux', 'ReactFlow', 'FastAPI', 'Python', 'FAISS', 'AWS SageMaker', 'LLMs'],
    },
    {
      role: 'Associate Python Developer',
      company: 'NetraLabs',
      period: 'Jun 2023 – Jun 2024',
      description: [
        'Shipped FastAPI microservices and AWS Lambda functions for agent orchestration, authentication, and multi-LLM API integration (OpenAI, Anthropic, Cohere).',
        'Built initial RAG pipeline (FAISS + OpenAI embeddings) and Redux-powered React frontend features with weekly production deployments.',
      ],
      tech: ['FastAPI', 'AWS Lambda', 'React', 'Redux', 'OpenAI', 'Anthropic', 'FAISS'],
    },
    {
      role: 'ML Intern (Intern of the Month ×2)',
      company: 'NetraLabs (Netra AI)',
      period: 'Mar 2023 – Jun 2023',
      description: [
        'Fine-tuned YOLOv5 for custom object detection and deployed Flask inference APIs.',
        'Built LangChain-powered chatbots for email automation, invoice parsing, and cross-platform social media posting.',
      ],
      tech: ['Python', 'YOLOv5', 'Flask', 'LangChain', 'OpenAI API'],
    },
  ],
  projects: [
    {
      title: 'Accessibility on Demand (AOD)',
      description: 'World\'s #1 PDF accessibility compliance platform used by US DOJ & federal agencies. Features async batch processing, multi-tenant SaaS architecture, and AI-driven PDF remediation outperforming Adobe.',
      tech: ['AWS Bedrock', 'SQS/SNS', 'FastAPI', 'React', 'MongoDB', 'S3'],
      link: '#', github: 'https://github.com/Johnybhiduri',
    },
    {
      title: 'IMS – Secure Document Exchange',
      description: 'Government-grade secure file management system enabling attorney-prisoner document exchange. Eliminated physical smuggling vulnerabilities with on-demand PDF loading and robust access controls.',
      tech: ['React', 'Redux', 'Python', 'FastAPI', 'AWS', 'JWT'],
      link: '#', github: 'https://github.com/Johnybhiduri',
    },
    {
      title: 'Ground Truth – No-Code AI Agent Builder',
      description: 'Drag-and-drop workflow engine with LLM decision gates, embedded Python execution, and integrated RAG pipelines for custom AI agent deployment.',
      tech: ['ReactFlow', 'FastAPI', 'FAISS', 'SageMaker', 'LangChain'],
      link: '#', github: 'https://github.com/Johnybhiduri',
    },
  ],
  education: [
    {
      degree: 'PG Diploma, AI & Machine Learning',
      institution: 'McCombs School of Business, UT Austin, USA',
      period: 'Sep 2022 – Aug 2023',
      grade: 'Focus: Supervised/Unsupervised Learning, NLP, CV, Deep Learning',
    },
    {
      degree: 'B.Sc. (Hons.) Polymer Science',
      institution: 'Delhi University — BCAS, New Delhi',
      period: 'Jun 2019 – Jun 2022',
    },
  ],
  achievements: [
    {
      title: '#1 Global PDF Accessibility Platform',
      description: 'Platform outperforms Adobe in compliance scores; officially adopted by US DOJ & federal agencies.',
      year: '2025',
    },
    {
      title: 'Sole Engineer on US Gov Project',
      description: 'Independently designed, built, and shipped IMS secure document exchange system within a single product cycle.',
      year: '2024',
    },
    {
      title: 'High-Concurrency System Stabilization',
      description: 'Replaced synchronous Textract polling with event-driven SQS/SNS architecture and implemented ElastiCache rate-limiting for stable scale.',
      year: '2024',
    },
    {
      title: 'Intern of the Month (×2)',
      description: 'Recognized twice for rapid delivery of YOLOv5 deployment and LangChain automation chatbots.',
      year: '2023',
    },
  ],
};