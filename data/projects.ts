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
        title:
          'URL 쿼리 파라미터 전환을 통한 검색 페이지 새로고침 상태 유지 및 UX 개선',
        error:
          '검색 결과 페이지에서 현재 페이지 번호를 컴포넌트 내부 로컬 상태(State)로만 관리하여 이로 인해 사용자가 페이지를 이동하더라도 URL 정보가 변경되지 않아, 화면을 새로고침하거나 뒤로 가기를 실행했을 때 기존 페이지 상태가 유지되지 못하고 무조건 첫 페이지로 강제 초기화되는 현상이 발생했습니다.',
        solution:
          '기존의 로컬 상태 관리 방식을 폐기하고, 현재 페이지 상태를 URL의 쿼리 파라미터와 연동하도록 라우팅 구조를 전면 수정했습니다. 새로고침이나 공유된 링크를 통해 진입하더라도 URL에 기록된 정보를 기반으로 유저가 직전에 보던 데이터 화면을 안정적으로 유지할 수 있게 되었습니다.',
      },
      {
        title: 'React Query 프리페칭 도입을 통한 페이지 전환 로딩 지연 최적화',
        error:
          '검색 결과에서 페이지를 전환할 때마다 매번 API를 새로 요청하면서 화면이 멈추거나 빈 로딩 상태가 반복해서 노출되었습니다. 데이터 패칭으로 인한 지연 때문에 페이지 이동 흐름이 매끄럽지 못했고, 이는 서비스 전체의 사용자 경험(UX)을 저해하는 성능 병목으로 작용했습니다.',
        solution:
          '페이지 전환 시 발생하는 로딩 지연을 없애기 위해 React Query의 prefetchQuery를 도입했습니다. 사용자가 다음 페이지로 이동하기 전에 백그라운드에서 데이터를 미리 요청하고 캐싱해 두도록 구현하여, 실제 페이지 이동 시 별도의 로딩 시간 없이 캐시된 데이터를 화면에 즉시 렌더링함으로써 유저가 체감하는 대기 시간을 줄였습니다.',
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
        title: 'React Query 기반 카드 데이터 상태 관리 및 UX 개선',
        content: [
          'React Query 기반 커스텀 훅을 통해 카드 데이터 조회 및 수정 상태를 통합 관리',
          '부모-자식 컴포넌트 간의 복잡한 콜백 구조를 제거하고, 서버 상태(Server State) 동기화를 통해 데이터 변경 사항을 UI에 즉시 반영하며 UX 개선',
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
        title:
          'svg 파일의 효율적인 관리 및 재사용성을 위한 svg 컴포넌트화 패턴 도입',
        error:
          'svg 파일로 관리하면서 각 페이지에서 스타일 제어가 어려워지는 문제와 동일한 SVG를 여러 곳에서 사용할 때 중복 코드 증가가 되고 상태 변화에 따른 동적 스타일링(색상, 크기 등) 변경이 어려웠습니다.',
        solution:
          '파일을 독립된 React 컴포넌트로 분리하고 props와 currentColor를 활용해 크기와 색상을 유연하게 조절하도록 수정했습니다. 아이콘을 컴포넌트처럼 재사용 가능하게 되어 UI 요소처럼 제어할 수 있게 되었고 재사용성과 유지보수성이 크게 개선되었습니다.',
      },
      {
        title: 'HEIC 이미지 업로드 실패 해결',
        error:
          '이미지 업로드 기능 구현 중, 서버에서 HEIC 포맷을 지원하지 않아 업로드 실패가 발생하고 브라우저에서 HEIC 이미지를 정상적으로 미리보기가 되지않아 사용자 입장에서는 "이미지 업로드가 안 되는" UX 문제가 발생했습니다.',
        solution:
          '클라이언트 단에서 파일 확장자를 감지하여, 서버 전송 전에 heic2any 라이브러리를 활용하여 브라우저에서 JPEG 포맷의 File 객체로 자동 변환 후 전송하도록 처리하여 사용자 환경(iOS)에 의존하지 않는 안정적인 UX 제공했습니다.',
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
  {
    thumbnail: '/images/img-taskify.png',
    subTitle:
      '프로젝트와 경험을 한눈에 확인할 수 있는 개인 포트폴리오 웹사이트',
    name: '개인 포트폴리오 웹사이트',
    period: '2026.05 ~ ',
    teamSize: '1인',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Git & Github',
      'Vercel',
    ],
    types: ['개인 프로젝트', '웹/모바일'],
    description:
      '자신을 소개하고 프로젝트와 기술 스택, 경험을 한눈에 확인할 수 있는 개인 포트폴리오 웹사이트입니다. Next.js App Router와 TypeScript를 기반으로 구성하였으며, Tailwind CSS를 활용해 반응형 레이아웃을 직접 디자인하고 구현했습니다. 라이브러리 의존 없이 스크롤 연동 애니메이션, 모달, 햄버거 메뉴 등 UI 인터랙션을 직접 구현하여 가볍고 유지보수하기 쉬운 구조를 지향했습니다.',
    features: [
      '히어로/소개/스킬/경험/프로젝트 섹션 구성',
      '프로젝트 상세 모달 (기술 스택, 트러블슈팅, 링크 등)',
      '반응형 디자인 (모바일/태블릿/데스크탑)',
      '스크롤 연동 헤더 및 맨 위로 이동 버튼',
      '모바일 햄버거 메뉴 및 뷰포트 진입 시 페이드인 애니메이션',
    ],
    role: '기획, 디자인, 개발 전반 (1인 프로젝트)',
    details: [
      {
        title: 'z-index 체계적 관리',
        content: [
          '헤더, 모달, 버튼 등 레이어 충돌을 방지하기 위해 용도별 z-index 값을 CSS 변수로 분리하여 관리',
          '전역 스타일에서 일관된 레이어 우선순위를 선언함으로써 컴포넌트별 z-index 하드코딩 제거',
        ],
      },
      {
        title: 'Lighthouse',
        content: [
          'Lighthouse 검사 기준 접근성과 SEO 점수 100점을 목표로 시맨틱 태그 사용 및 이미지 메타태그(alt) 관리.',
        ],
      },
      {
        title: '스크롤 연동 UI 인터랙션 직접 구현',
        content: [
          'IntersectionObserver를 활용해 섹션이 뷰포트에 진입할 때 페이드인 애니메이션 적용',
          '스크롤 위치에 따라 헤더 스타일 전환 및 맨 위로 이동 버튼 노출 여부 제어',
        ],
      },
    ],
    links: [{ label: '깃헙', url: 'https://github.com/luneyeo/fe-portfolio' }],
  },
];
