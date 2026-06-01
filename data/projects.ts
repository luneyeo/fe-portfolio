import type { Project } from '@/types';

export const projects: Project[] = [
  {
    thumbnail: '/images/img-bookscape.png',
    subTitle: '채팅 탐색부터 예약까지 모든 흐름을 한눈에 관리할 수 있는 서비스',
    name: 'Bookscape',
    period: '2026.04 ~ 2026.05',
    teamSize: '5인',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    type: ['팀 프로젝트', '웹/모바일'],
    description:
      '채팅 탐색부터 예약까지 모든 흐름을 한눈에 관리할 수 있는 서비스채팅 탐색부터 예약까지 모든 흐름을 한눈에 관리할 수 있는 서비스',
    features: [
      '반응형 디자인',
      '색상 기반 감정 빠른 기록',
      '반응형 디자인',
      '색상 기반 감정 빠른 기록',
    ],
    role: '',
    details: [
      {
        title: '기술적 도전과 해결',
        content:
          '부드러운 색 전환과 제스처 인터랙션을 위해 Reanimated 기반의 애니메이션을 직접 설계했고, 오프라인에서도 기록이 유실되지 않도록 로컬 캐시와 Supabase 동기화 전략을 구성했습니다.',
      },
      {
        title: '기술적 도전과 해결',
        content:
          '부드러운 색 전환과 제스처 인터랙션을 위해 Reanimated 기반의 애니메이션을 직접 설계했고, 오프라인에서도 기록이 유실되지 않도록 로컬 캐시와 Supabase 동기화 전략을 구성했습니다.',
      },
      {
        title: '기술적 도전과 해결',
        content:
          '부드러운 색 전환과 제스처 인터랙션을 위해 Reanimated 기반의 애니메이션을 직접 설계했고, 오프라인에서도 기록이 유실되지 않도록 로컬 캐시와 Supabase 동기화 전략을 구성했습니다.',
      },
    ],
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
