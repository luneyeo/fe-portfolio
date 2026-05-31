import IcCode from '@/components/ui/icons/IcCode';
import IcDatabase from '@/components/ui/icons/IcDatabase';
import IcTool from '@/components/ui/icons/IcTool';

export type Skill = {
  name: string;
  description?: string;
  iconSrc: string;
};

export type SkillCategory = {
  label: string;
  LabelIcon: React.ComponentType<{ className?: string }>;
  variant?: 'full' | 'compact';
  items: Skill[];
};

export const skills: SkillCategory[] = [
  {
    label: 'Frontend',
    LabelIcon: IcCode,
    items: [
      {
        name: 'React',
        description: '컴포넌트 기반 UI 개발 및 상태 관리, 성능, 최적화 경험',
        iconSrc: '/icons/ic-react.svg',
      },
      {
        name: 'Next.js',
        description: '컴포넌트 기반 UI 개발 및 상태 관리, 성능, 최적화 경험',
        iconSrc: '/icons/ic-nextjs.png',
      },
      {
        name: 'TypeScript',
        description: '컴포넌트 기반 UI 개발 및 상태 관리, 성능, 최적화 경험',
        iconSrc: '/icons/ic-typescript.svg',
      },
      {
        name: 'Tailwind CSS',
        description: '컴포넌트 기반 UI 개발 및 상태 관리, 성능, 최적화 경험',
        iconSrc: '/icons/ic-tailwind.svg',
      },
    ],
  },
  {
    label: 'Statement',
    LabelIcon: IcDatabase,
    items: [
      {
        name: 'Zustand',
        description: '컴포넌트 기반 UI 개발 및 상태 관리, 성능, 최적화 경험',
        iconSrc: '/icons/ic-zustand.svg',
      },
      {
        name: 'Tanstack',
        description: '컴포넌트 기반 UI 개발 및 상태 관리, 성능, 최적화 경험',
        iconSrc: '/icons/ic-tanstack.png',
      },
    ],
  },
  {
    label: 'Tools & Other',
    LabelIcon: IcTool,
    variant: 'compact',
    items: [
      {
        name: 'Git',
        iconSrc: '/icons/ic-git.svg',
      },
      {
        name: 'Github',
        iconSrc: '/icons/ic-github.svg',
      },
    ],
  },
];
