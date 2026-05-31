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

export interface Project {
  thumbnail: string;
  subTitle: string;
  name: string;
  period: string;
  teamSize: string;
  skills: string[];
  link?: string;
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
