import type { Project } from '@/types';

export const projects: Project[] = [
  {
    thumbnail: '/images/img-bookscape.png',
    subTitle: '체험 탐색부터 예약까지 모든 흐름을 한눈에 관리할 수 있는 서비스',
    name: 'Bookscape',
    period: '2026.04 ~ 2026.05',
    teamSize: '5인',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Storybook',
      'Zod',
      'React-Hook-Form',
      'TanStack Query',
      'Zustand',
      'Git & Github',
      'Vercel',
    ],
    types: ['팀 프로젝트', '웹/모바일'],
    description:
      '체험 탐색부터 예약까지 모든 흐름을 한눈에 관리할 수 있는 서비스체험 탐색부터 예약까지 모든 흐름을 한눈에 관리할 수 있는 서비스',
    features: [
      '체험 검색 및 필터링',
      '상세 정보 확인 및 예약',
      '사용자 인증(로그인/회원가입)',
      '예약 내역 관리',
      '반응형 디자인(모바일 최적화)',
    ],
    role: '로그인/회원가입, 메인페이지, 체험 목록/검색 페이지',
    details: [
      {
        title: '토큰 기반 인증 구조 개선 (BFF 적용)',
        content: [
          'BFF를 통한 로그인 요청 처리 및 토큰 발급 구조 구현',
          'JWT exp 기반 토큰 만료 시간 관리 및 Zustand에 저장하여 전역 상태로 관리',
          'Refresh token 기반 토큰 재발급 API 연동',
          '로그아웃 시 BFF Route Handler를 호출하여 쿠키 삭제 처리',
        ],
      },
      {
        title: '스켈레톤 UI 구현',
        content: [
          '데이터 로딩 과정에서 사용자에게 즉각적인 피드백 제공 등을 위해 스켈레톤 UI 적용',
          '자연스러운 사용자 경험 제공을 위해 응답 속도가 빠른 경우(200ms 미만)에는 미노출',
        ],
      },
    ],
    links: [
      { label: '사이트', url: 'https://bookscape-team1.vercel.app/' },
      { label: '깃헙', url: 'https://github.com/Lseojeong/Bookscape-Front' },
    ],
  },
  {
    thumbnail: '/images/img-taskify.png',
    subTitle:
      '일정 관리 대시보드 서비스와 공유 기능을 제공하는 웹 애플리케이션',
    name: 'Taskify',
    period: '2026.03 ~ 2026.04',
    teamSize: '5인',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
      'Git & Github',
      'Vercel',
    ],
    types: ['팀 프로젝트', '웹/모바일'],
    description:
      '체험 탐색부터 예약까지 모든 흐름을 한눈에 관리할 수 있는 서비스체험 탐색부터 예약까지 모든 흐름을 한눈에 관리할 수 있는 서비스',
    features: [
      '체험 검색 및 필터링',
      '상세 정보 확인 및 예약',
      '사용자 인증(로그인/회원가입)',
      '예약 내역 관리',
      '반응형 디자인(모바일 최적화)',
    ],
    role: '할 일 목록 생성 및 수정',
    details: [
      {
        title: '토큰 기반 인증 구조 개선 (BFF 적용)',
        content: [
          'BFF를 통한 로그인 요청 처리 및 토큰 발급 구조 구현',
          'JWT exp 기반 토큰 만료 시간 관리 및 Zustand에 저장하여 전역 상태로 관리',
          'Refresh token 기반 토큰 재발급 API 연동',
          '로그아웃 시 BFF Route Handler를 호출하여 쿠키 삭제 처리',
        ],
      },
      {
        title: '스켈레톤 UI 구현',
        content: [
          '데이터 로딩 과정에서 사용자에게 즉각적인 피드백 제공 등을 위해 스켈레톤 UI 적용',
          '자연스러운 사용자 경험 제공을 위해 응답 속도가 빠른 경우(200ms 미만)에는 미노출',
        ],
      },
    ],
    links: [
      { label: '사이트', url: 'https://bookscape-team1.vercel.app/' },
      { label: '깃헙', url: 'https://github.com/Lseojeong/Bookscape-Front' },
    ],
  },
];
