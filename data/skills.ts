import IcCode from '@/components/ui/icons/IcCode';
import IcDatabase from '@/components/ui/icons/IcDatabase';
import IcTool from '@/components/ui/icons/IcTool';

import type { SkillCategory } from '@/types';

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
        description: 'BFF(Next.js Server)를 활용한 인증 및 데이터 흐름 관리',
        iconSrc: '/icons/ic-nextjs.png',
      },
      {
        name: 'TypeScript',
        description: '정적 타입을 활용한 안정성 확보 및 런타임 에러 방지',
        iconSrc: '/icons/ic-typescript.svg',
      },
      {
        name: 'Tailwind CSS',
        description: '유틸리티 기반 반응형 구현 및 일관된 디자인 시스템 적용',
        iconSrc: '/icons/ic-tailwind.svg',
      },
    ],
  },
  {
    label: 'State Management & Data',
    LabelIcon: IcDatabase,
    items: [
      {
        name: 'Zustand',
        description:
          '경량 전역 상태 관리 라이브러리를 활용한 상태 분리 및 복잡도 감소',
        iconSrc: '/icons/ic-zustand.svg',
      },
      {
        name: 'Tanstack',
        description:
          '서버 상태 관리 및 캐싱 전략을 통한 API 요청 최적화 및 비동기 데이터 처리',
        iconSrc: '/icons/ic-tanstack.png',
      },
      {
        name: 'Zod',
        description:
          '인증/폼 데이터 처리 시 React Hook Form과 연계하여 유효성 검증 로직에 활용',
        iconSrc: '/icons/ic-zod.png',
      },
    ],
  },
  {
    label: 'Tools & Others',
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
      {
        name: 'Figma',
        iconSrc: '/icons/ic-figma.svg',
      },
      {
        name: 'Vercel',
        iconSrc: '/icons/ic-vercel.svg',
      },
      {
        name: 'Storybook',
        iconSrc: '/icons/ic-storybook.svg',
      },
      {
        name: 'Prettier',
        iconSrc: '/icons/ic-prettier.png',
      },
      {
        name: 'React-Hook-Form',
        iconSrc: '/icons/ic-rhf.svg',
      },
      {
        name: 'ESLint',
        iconSrc: '/icons/ic-eslint.svg',
      },
    ],
  },
];
