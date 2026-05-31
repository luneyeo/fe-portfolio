import type { Project } from '@/types';

export const projects: Project[] = [
  {
    thumbnail: '/images/img-bookscape.png',
    subTitle: '채팅 탐색부터 예약까지 모든 흐름을 한눈에 관리할 수 있는 서비스',
    name: 'Bookscape',
    period: '2026.04 ~ 2026.05',
    teamSize: '5인',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    thumbnail: '/images/img-taskify.png',
    subTitle:
      '일정 관리 대시보드 서비스와 공유 기능을 제공하는 웹 애플리케이션',
    name: 'Taskify',
    period: '2026.03 ~ 2026.04',
    teamSize: '5인',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
];
