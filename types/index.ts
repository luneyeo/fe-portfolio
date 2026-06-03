export interface Experience {
  period: string;
  company: string;
  role: string;
  position: string;
  tasks: string[];
}

export interface Education {
  period: string;
  institution: string;
  detail: string;
}

export interface ProjectDetail {
  title: string;
  content: string[];
}

export interface LinkDetail {
  label: string;
  url: string;
}

export interface Project {
  thumbnail: string;
  subTitle: string;
  name: string;
  period: string;
  teamSize: string;
  skills: string[];
  links?: LinkDetail[];
  types?: string[];
  description?: string;
  features?: string[];
  role?: string;
  details?: ProjectDetail[];
}

export interface Skill {
  name: string;
  description?: string;
  iconSrc: string;
}

export interface SkillCategory {
  label: string;
  LabelIcon: React.ComponentType<{ className?: string }>;
  variant?: 'full' | 'compact';
  items: Skill[];
}
