// src/data/resumeData.ts
//
// This is the ONLY file you should need to touch to update the site's
// content. Every section on the page reads from this object.
//
// Tips:
// - Leave any `Url`/`link`/`github`/`certificateUrl` field empty ('') or
//   remove it entirely if you don't have one yet — the UI automatically
//   hides or disables the related button/link.
// - `images` on a project accepts multiple paths — if you give 2+, the
//   project modal automatically becomes a swipeable carousel.
// - If two `experiences` entries in a row share the same `company`, they're
//   rendered as a single growth timeline (promotions) instead of repeating
//   the company card.

import type { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: 'Jainendra Bhiduri',
  title: 'Software Engineer II | AI & Distributed Systems',
  roles: [
    'AI & Fullstack Engineer',
    'Python / FastAPI Backend Developer',
    'Distributed Systems Builder',
    'LLM & RAG Pipeline Engineer',
    'AI Agentic Systems Developer'
  ],
  email: 'johnybhiduri8955@gmail.com',
  phone: '+91 89552 34081',
  location: 'Pune, India',
  summary:
    "Software Engineer II with 3 years of production experience building AI-powered, distributed systems at scale. Designed and shipped the world's #1 PDF accessibility platform — used by the US Department of Justice and federal agencies — which outperforms Adobe in compliance scores. Expert in Python, FastAPI, React, and AWS, with deep hands-on experience architecting async batch pipelines, multi-tenant SaaS backends, RAG systems, and LLM-integrated applications. Sole engineer on multiple government-facing products, owning full system design, implementation, and production deployment.",
  resumeLink: '/Jainendra_Bhiduri_Resume_2026.pdf',
  yearsExperience: 3,
  availableForWork: true,

  socials: [
    { platform: 'GitHub', url: 'https://github.com/Johnybhiduri' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/jainendra-bhiduri-245054220' },
    { platform: 'Email', url: 'mailto:johnybhiduri8955@gmail.com' },
  ],

  // ---------------------------------------------------------------------
  // SKILLS — grouped by category. `level` is a tier (Familiar/Proficient/
  // Advanced/Expert), not a made-up percentage. `years` is optional.
  // ---------------------------------------------------------------------
  skills: [
    // Languages
    { name: 'Python', category: 'Languages', level: 'Expert', years: 3 },
    { name: 'TypeScript', category: 'Languages', level: 'Proficient', years: 2 },
    { name: 'JavaScript', category: 'Languages', level: 'Proficient', years: 2 },
    { name: 'NoSQL', category: 'Languages', level: 'Advanced' },

    // Backend & APIs
    { name: 'FastAPI', category: 'Backend & APIs', level: 'Expert', years: 3 },
    { name: 'Flask', category: 'Backend & APIs', level: 'Advanced' },
    { name: 'Django', category: 'Backend & APIs', level: 'Proficient' },
    { name: 'Async Python & Microservices', category: 'Backend & APIs', level: 'Expert' },

    // Frontend
    { name: 'React', category: 'Frontend', level: 'Advanced', years: 3 },
    { name: 'Redux', category: 'Frontend', level: 'Advanced' },
    { name: 'ReactFlow', category: 'Frontend', level: 'Proficient' },

    // Cloud & DevOps
    { name: 'AWS (Lambda, S3, SQS/SNS, EC2)', category: 'Cloud & DevOps', level: 'Expert', years: 2 },
    { name: 'Docker', category: 'Cloud & DevOps', level: 'Proficient' },

    // AI / ML
    { name: 'AWS Bedrock', category: 'AI / ML', level: 'Advanced' },
    { name: 'RAG / LangChain / FAISS', category: 'AI / ML', level: 'Expert' },
    { name: 'LLM Integration & Prompt Engineering', category: 'AI / ML', level: 'Expert', years: 2 },
    { name: 'Multi-LLM APIs (OpenAI, Anthropic, Cohere)', category: 'AI / ML', level: 'Expert' },

    // Data
    { name: 'MongoDB', category: 'Data', level: 'Advanced' },
    { name: 'Redis', category: 'Data', level: 'Advanced' },
  ],

  // ---------------------------------------------------------------------
  // EXPERIENCE — listed newest-first, as usual. Consecutive entries with
  // the same `company` automatically collapse into one growth-timeline
  // card instead of repeating the company header.
  // ---------------------------------------------------------------------
  experiences: [
    {
      role: 'Software Engineer II',
      company: 'NetraLabs',
      companyUrl: 'https://netralabs.ai', // e.g. 'https://netralabs.ai' — add your company site here
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
      companyUrl: 'https://netralabs.ai',
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
      companyUrl: 'https://netralabs.ai',
      period: 'Jun 2023 – Jun 2024',
      description: [
        'Shipped FastAPI microservices and AWS Lambda functions for agent orchestration, authentication, and multi-LLM API integration (OpenAI, Anthropic, Cohere).',
        'Built initial RAG pipeline (FAISS + OpenAI embeddings) and Redux-powered React frontend features with weekly production deployments.',
      ],
      tech: ['FastAPI', 'AWS Lambda', 'React', 'Redux', 'OpenAI', 'Anthropic', 'FAISS'],
    },
    {
      role: 'ML Intern (Intern of the Month ×2)',
      company: 'NetraLabs', // was "NetraLabs (Netra AI)" — kept identical to the rest so it joins the same growth timeline
      companyUrl: 'https://netralabs.ai',
      period: 'Mar 2023 – Jun 2023',
      description: [
        'Fine-tuned YOLOv5 for custom object detection and deployed Flask inference APIs.',
        'Built LangChain-powered chatbots for email automation, invoice parsing, and cross-platform social media posting.',
      ],
      tech: ['Python', 'YOLOv5', 'Flask', 'LangChain', 'OpenAI API'],
    },
  ],

  // ---------------------------------------------------------------------
  // PROJECTS — `description` is the short card blurb, `fullDescription`
  // + `contributions` show inside the modal. `images` can hold several
  // screenshot paths (e.g. '/projects/aod-1.png') to enable the carousel.
  // ---------------------------------------------------------------------
  projects: [
    {
      title: 'Accessibility on Demand (AOD)',
      description:
        "World's #1 PDF accessibility compliance platform used by US DOJ & federal agencies. Async batch processing, multi-tenant SaaS architecture, and AI-driven PDF remediation outperforming Adobe.",
      fullDescription:
        "AOD is a multi-tenant SaaS platform that automatically detects and remediates PDF accessibility issues (reading order, tagging, tables, figures, alt-text, TOC) to meet WCAG/Section 508 compliance. It's used in production by the US Department of Justice and other federal agencies, and outperforms Adobe Acrobat's own accessibility checker in compliance scoring.",
      contributions: [
        'Re-architected the processing pipeline from synchronous to event-driven async batch execution (AWS SQS/SNS), cutting per-document time by 20×.',
        'Designed the multi-tenant data model (Super Admin → Reseller → Customer → User) with per-tenant isolation across MongoDB and S3.',
        'Built the AWS Bedrock-backed remediation pipeline and tuned prompts to cut LLM cost by ~40% via batching and smart routing.',
        'Owned production deployment, monitoring, and on-call stability for the service.',
      ],
      tech: ['AWS Bedrock', 'SQS/SNS', 'FastAPI', 'React', 'MongoDB', 'S3'],
      link: 'https://accessibilityondemand.ai/', // add a live/demo URL here if you have one
      github: 'https://github.com/Johnybhiduri',
      images: [
        '/public/aod.webp',
        // '/projects/aod-2.png',
      ],
    },
    {
      title: 'Q-SMS – Virtual Number Platform',
      description:
        'QS​MS is a virtual number platform designed to help users verify accounts and access online services without exposing their personal phone numbers.',
      fullDescription:
        'Q-SMS is a secure virtual number service that enables users to receive SMS messages for account verification and online service access without sharing their personal phone numbers. It provides a layer of privacy and security, allowing users to manage multiple virtual numbers for different purposes while keeping their real phone number confidential. It has 1000+ services, 100+ conutries and 100+ users.',
      contributions: [
        'I built this project from scratch as the sole developer, designing and implementing the entire system end-to-end. Created Frontend using React and backend using FastAPI, with MongoDB for data storage and AWS services for infrastructure. Used NowPayments API for payment processing and JWT for secure authentication.',
      ],
      tech: ['React', 'Redux', 'Python', 'FastAPI', 'AWS', 'JWT', 'NowPayments', "crypto", "MongoDB"],
      link: 'https://q-sms.store/',
      github: 'https://github.com/Johnybhiduri',
      images: [
        '/public/q-sms1.png',
        '/public/q-sms4.png',
        '/public/q-sms2.png',
        '/public/q-sms3.png'
      ],
    },
    {
      title: 'First Search AI – Use Latest HuggingFace Models in Your Browser for Free',
      description:
        'First Search AI is an open-source React-based platform to explore, test, and interact with Hugging Face AI models through a simple and user-friendly interface.',
      fullDescription:
        'First Search AI is a web application that provides a simple interface for discovering and experimenting with Hugging Face models without requiring users to work directly with APIs. The platform allows users to browse available inference-supported models and interact with AI capabilities like text generation, summarization, classification, and more. Built with React and Vite, it focuses on making AI model exploration accessible for developers, researchers, and non-technical users. The project integrates Hugging Face APIs to provide real-time model interaction through a clean and intuitive UI.',
      contributions: [
        'Designed and developed the complete application independently from scratch, including frontend architecture, UI, and core functionality.',
        'Built a responsive React + Vite interface with Tailwind CSS for a clean and user-friendly experience.',
        'Integrated Hugging Face APIs to dynamically fetch available models and enable real-time AI inference.',
        'Implemented model browsing and filtering capabilities to help users discover AI models based on task categories.',
        'Developed the interaction workflow allowing users to send prompts and receive model-generated responses directly from the application.',
        'Managed the complete project lifecycle including idea validation, development, deployment, and open-source setup.',
        'Deployed the application and configured it for public access through a production-ready environment.',
        'Created the project to simplify AI experimentation by removing the complexity of API setup and model integration for users.'
      ],
      tech: ['React', 'Redux', "HuggingFace API", "Tailwind CSS", "Vercel"],
      link: 'https://first-search-ai.vercel.app/',
      github: 'https://github.com/Johnybhiduri/First-Search-AI',
      images: [
        '/public/fsai.jpeg',
        
      ],
    },
    {
      title: 'IMS – Secure Document Exchange',
      description:
        'Government-grade secure file management system enabling attorney-prisoner document exchange. Eliminated physical smuggling vulnerabilities with on-demand PDF loading and robust access controls.',
      fullDescription:
        'IMS replaces a paper-based document exchange process for US correction centers with a secure, auditable digital workflow between attorneys and incarcerated clients. As the sole engineer, I owned the full lifecycle — from system design through production rollout.',
      contributions: [
        'Designed and built the entire system end-to-end as the sole engineer, from architecture to production.',
        'Built a React frontend with on-demand PDF loading and paginated/sortable tables for datasets of thousands of case files.',
        'Implemented a drag-and-drop agent workflow engine (ReactFlow + FastAPI) with an LLM-powered Decision Gate and embedded Python interpreter.',
        'Integrated RAG pipelines with FAISS and AWS SageMaker for proprietary fine-tuning and no-code AI agent deployment.',
      ],
      tech: ['React', 'Redux', 'Python', 'FastAPI', 'AWS', 'JWT'],
      link: '',
      github: 'https://github.com/Johnybhiduri',
      images: [
        '/public/ims.png',
      ],
    },
    {
      title: 'Ground Truth – No-Code AI Agent Builder',
      description:
        'Drag-and-drop workflow engine with LLM decision gates, embedded Python execution, and integrated RAG pipelines for custom AI agent deployment.',
      fullDescription:
        'A visual, no-code builder for AI agents: users wire up nodes on a canvas (LLM calls, decision gates, Python steps, RAG lookups) and deploy the resulting workflow without writing infrastructure code.',
      contributions: [
        'Built the ReactFlow-based canvas and node execution engine on a FastAPI backend.',
        'Implemented the LLM-powered Decision Gate node and a sandboxed embedded Python interpreter for custom logic.',
        'Wired up FAISS + SageMaker-backed RAG retrieval as a first-class node type.',
      ],
      tech: ['ReactFlow', 'FastAPI', 'FAISS', 'SageMaker', 'LangChain'],
      link: '',
      github: 'https://github.com/Johnybhiduri',
      images: [],
    },
  ],

  // ---------------------------------------------------------------------
  // EDUCATION — click-through modal shows `description`, `learnings`,
  // and certificate/institution links when provided.
  // ---------------------------------------------------------------------
  education: [
    {
      degree: 'PG Diploma, AI & Machine Learning',
      institution: 'McCombs School of Business, UT Austin, USA',
      institutionUrl: 'https://www.mygreatlearning.com/eportfolio/jainendrabhiduri', // e.g. 'https://www.mccombs.utexas.edu'
      certificateUrl: 'https://www.mygreatlearning.com/certificate/TFTJSQOI', // e.g. link to your certificate / Credly badge
      period: 'Sep 2022 – Aug 2023',
      grade: 'Focus: Supervised/Unsupervised Learning, NLP, CV, Deep Learning',
      description:
        'A practitioner-focused postgraduate program covering the full ML lifecycle — from classical statistical learning to deep learning and applied NLP/computer vision — with project-based assessments.',
      learnings: [
        'Supervised & unsupervised learning fundamentals (regression, ensembling, clustering)',
        'Deep learning architectures (CNNs, RNNs/Transformers) for vision and NLP',
        'Applied NLP — text classification, embeddings, sequence modeling',
        'Computer vision — object detection and image classification pipelines',
        'Recommender systems, time series forecasting, and model deployment best practices',
      ],
    },
    {
      degree: 'B.Sc. (Hons.) Polymer Science',
      institution: 'Delhi University — BCAS, New Delhi',
      institutionUrl: 'https://www.bcas.du.ac.in/',
      certificateUrl: '',
      period: 'Jun 2019 – Jun 2022',
      description:
        'An honours degree in polymer science and materials chemistry. Picked up Python for data analysis during this degree, which became the bridge into software engineering and machine learning.',
      learnings: [
        'Strong analytical & quantitative problem-solving foundation',
        'Lab-based experimental design and statistical analysis',
        'Self-taught Python & data analysis alongside the core curriculum',
      ],
    },
  ],

  achievements: [
    {
      title: '#1 Global PDF Accessibility Platform',
      description: 'Platform outperforms Adobe in compliance scores; officially adopted by US DOJ & federal agencies.',
      year: '2025',
      link: 'https://accessibilityondemand.ai/',
    },
    {
      title: 'Sole Engineer on US Gov Project',
      description: 'Independently designed, built, and shipped IMS secure document exchange system within a single product cycle.',
      year: '2024',
      link: '',
    },
    {
      title: 'High-Concurrency System Stabilization',
      description: 'Replaced synchronous Textract polling with event-driven SQS/SNS architecture and implemented ElastiCache rate-limiting for stable scale.',
      year: '2024',
      link: '',
    },
    {
      title: 'Intern of the Month (×2)',
      description: 'Recognized twice for rapid delivery of YOLOv5 deployment and LangChain automation chatbots.',
      year: '2023',
      link: 'https://drive.google.com/drive/folders/11QjwE9ZOcXY7cU48WCvF_VFQiGYnM6Jm?usp=sharing',
    },
  ],
};