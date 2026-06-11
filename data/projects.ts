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
      '캘린더 및 지도 SDK를 활용해 예약 가능한 날짜 설정과 체험 상품 예약 기능을 구현한 웹 애플리케이션입니다. 사용자가 판매자와 체험자 역할을 동시에 수행할 수 있는 구조로, 상품 등록, 조회, 예약 등 복합적인 기능을 제공합니다. 여러 페이지와 세부 기능을 동시에 처리해야 하므로, UI 관리 경험을 쌓고, 서비스 운영 과정에서 발생하는 문제를 해결하며 실무에 가까운 경험을 얻었습니다.',
    features: [
      '체험 검색 및 필터링',
      '상세 정보 확인 및 예약',
      '사용자 인증(로그인/회원가입)',
      '예약 내역 관리',
      '반응형 디자인(모바일 최적화)',
    ],
    role: '로그인/회원가입 인증 관리, 메인페이지, 체험 목록/검색 페이지',
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
    troubleshooting: [
      {
        title: '트러블슈팅 제목 1',
        content: ['문제 상황 설명', '원인 분석 내용', '해결 방법 및 결과'],
      },
      {
        title: '트러블슈팅 제목 2',
        content: ['문제 상황 설명', '원인 분석 내용', '해결 방법 및 결과'],
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
      'React Query',
      'axios',
      'Git & Github',
      'Vercel',
    ],
    types: ['팀 프로젝트', '웹/모바일'],
    description:
      'Taskify는 일정 관리와 커뮤니티 기능을 결합한 웹 애플리케이션으로, 사용자들이 그룹을 생성하고 멤버와 함께 일정 및 할 일을 관리할 수 있는 서비스입니다. 카드 기반 UI를 통해 일정과 할 일을 공유하고, CRUD, 초대, 댓글, 검색 기능을 제공하여 협업 중심의 사용 경험을 구현했습니다. TypeScript와 다양한 UI 라이브러리를 활용해 복잡한 상태를 안정적으로 관리하고, 사용성과 가독성을 개선했습니다.',
    features: [
      '사용자 인증(로그인/회원가입)',
      '대시보드 생성 및 관리',
      '할 일 카드 생성/수정/삭제',
      '구성원 초대 및 관리',
      '마이페이지 및 사용자 정보 관리',
    ],
    role: '할 일 카드 모달 구현(생성/수정/상세), 카드 내 댓글 기능 구현',
    details: [
      {
        title: '카드 수정 기능 개선 (React Query 기반 상태 동기화)',
        content: [
          'React Query 기반 커스텀 훅을 통해 카드 데이터 조회 및 수정 상태를 통합 관리',
          '자식-부모 콜백 없이 서버 상태 기반으로 동기화하여 데이터 변경을 즉시 UI에 반영',
        ],
      },
      {
        title: '스켈레톤 UI 구현',
        content: [
          '데이터 로딩 과정에서 사용자에게 즉각적인 피드백 제공 등을 위해 스켈레톤 UI 적용',
        ],
      },
    ],
    troubleshooting: [
      {
        title: '트러블슈팅 제목 1',
        content: ['문제 상황 설명', '원인 분석 내용', '해결 방법 및 결과'],
      },
    ],
    links: [
      { label: '사이트', url: 'https://front-end22-part3-team2.vercel.app/' },
      {
        label: '깃헙',
        url: 'https://github.com/FrontEnd22-Part3-Team2-org/FrontEnd22-Part3-Team2',
      },
    ],
  },
];
