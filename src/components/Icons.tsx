// src/utils/icons.tsx
//
// Central place that maps a *name string* (a social platform, or a skill /
// tech-stack label from resumeData.ts) to an actual icon component. Keeping
// this logic in one spot means resumeData.ts can stay plain data — no icon
// imports needed there — and adding a brand-new technology automatically
// gets a sensible icon (or a generic fallback) for free.

import type { IconType } from 'react-icons';
import {
  FaGithub,
  FaLinkedin,
  FaGoogle,
  FaXTwitter,
  FaEnvelope,
  FaLink,
  FaCode,
  FaAws,
  FaBrain,
  FaLayerGroup,
  FaDiagramProject,
  FaDatabase,
  FaShieldHalved,
} from 'react-icons/fa6';
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiReact,
  SiRedux,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiLangchain,
  SiOpenai,
} from 'react-icons/si';

// ---------------------------------------------------------------------------
// Social / contact links
// ---------------------------------------------------------------------------
const socialIconMap: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  google: FaGoogle,
  twitter: FaXTwitter,
  x: FaXTwitter,
  email: FaEnvelope,
  mail: FaEnvelope,
};

/** Resolve the right brand icon for a social platform name (case-insensitive). */
export function getSocialIcon(platform: string): IconType {
  return socialIconMap[platform.trim().toLowerCase()] ?? FaLink;
}

// ---------------------------------------------------------------------------
// Tech-stack / skill icons
// ---------------------------------------------------------------------------
// Order matters: more specific keywords must be checked before broader ones
// (e.g. "reactflow" before the generic "react").
const techIconRules: { keywords: string[]; icon: IconType }[] = [
  { keywords: ['fastapi'], icon: SiFastapi },
  { keywords: ['flask'], icon: SiFlask },
  { keywords: ['django'], icon: SiDjango },
  { keywords: ['reactflow'], icon: FaDiagramProject },
  { keywords: ['redux'], icon: SiRedux },
  { keywords: ['react'], icon: SiReact },
  { keywords: ['typescript'], icon: SiTypescript },
  { keywords: ['javascript'], icon: SiJavascript },
  { keywords: ['python', 'yolo'], icon: SiPython },
  { keywords: ['mongodb', 'mongo'], icon: SiMongodb },
  { keywords: ['redis'], icon: SiRedis },
  { keywords: ['docker'], icon: SiDocker },
  {
    keywords: ['aws', 'amazon', 'sqs', 'sns', 'lambda', ' s3', 'bedrock', 'sagemaker', 'textract', 'ec2', 'elasticache'],
    icon: FaAws,
  },
  { keywords: ['langchain'], icon: SiLangchain },
  { keywords: ['openai'], icon: SiOpenai },
  { keywords: ['faiss', 'rag', 'vector'], icon: FaLayerGroup },
  { keywords: ['llm', 'prompt', 'cohere', 'anthropic', 'gpt'], icon: FaBrain },
  { keywords: ['jwt', 'auth', '2fa'], icon: FaShieldHalved },
  { keywords: ['sql', 'database'], icon: FaDatabase },
];

/** Resolve the best-matching icon for a skill / tech-stack label. */
export function getTechIcon(name: string): IconType {
  const n = ` ${name.toLowerCase()} `;
  for (const rule of techIconRules) {
    if (rule.keywords.some((k) => n.includes(k))) return rule.icon;
  }
  return FaCode;
}