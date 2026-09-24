export interface CandidateInfo {
  name: string;
  title: string;
  badge: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  itch?: string;
  availability: string;
  summary: string;
  bioParagraphs: string[];
  quickStats: {
    currentRole: string;
    primaryEngine: string;
    mainLanguage: string;
    preferredPlatform: string;
    location: string;
    availability: string;
  };
  languages: { language: string; proficiency: string }[];
  personalDetails: {
    dob?: string;
    bloodGroup?: string;
  };
}

export type SkillLevel = 'Core Skill' | 'Working Knowledge' | 'Currently Learning';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  iconName?: string;
  description?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: '3D Game' | '2D Game' | 'Prototype';
  type: string;
  platform: string;
  unityVersion: string;
  developmentStatus: string;
  isPlaceholder?: boolean;
  featured?: boolean;
  image: string;
  overview: string;
  role: string;
  mainFeatures: string[];
  technologies: string[];
  architectureOverview?: string;
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  challenges: ProjectChallenge[];
  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  buildDownloadUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  isCurrent?: boolean;
  badge?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  location?: string;
  highlights: string[];
  coursework: string[];
}
