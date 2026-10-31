import type { Certificate, Education, Experience } from '@/types';

export const experiences: Experience[] = [
  {
    period: '2026. 10 ~ 2026. 11',
    company: '처음청약',
    role: '프론트엔드(인턴)',
    tasks: [
      '청약 자격 결과 유형에 따라 컴포넌트를 동적으로 조합하는 ‘3분 체크업’ 결과 페이지 구현 및 백엔드 API 연동',
      '리스트, 표, 그래프 등 콘텐츠 유형별 아이템을 재사용 가능한 컴포넌트로 모듈화하고, AI가 콘텐츠에 적합한 아이템을 선택·조합하도록 카드뉴스 제작 자동화 구조 개선',
      '기존 홈페이지 전면 개편 및 신규 페이지 추가를 위한 라우트 구성, 디자인 시안 기반 UI 구현, API 연동 및 Chakra UI를 활용한 반응형 개발',
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Chakra UI'],
  },
  {
    period: '2023. 07 ~ 2025. 07',
    company: '밀버스',
    role: '퍼블리셔',
    tasks: [
      '사용자 행동(이탈, 클릭 등)을 감지하여 인터페이스를 동적으로 변경하는 온사이트 캠페인 기능 구현',
      'JavaScript 기반 Web SDK를 활용해 사용자 행동 데이터 수집 및 트래킹 스크립트 설계·구현, 주요 이벤트 매핑 정확도 95% 이상 달성',
      '데이터 기반 온사이트 캠페인 기획과 타겟팅 최적화를 통해 클릭률 5~10%, 전환율 3~6% 개선',
      'AMPscript를 활용한 멀티 채널(Email, SMS, 알림톡) 메시징 자동화 시스템 구축으로 캠페인 실행 시간 단축 및 운영 효율성 향상',
    ],
    skills: ['JavaScript', 'AMPscript', 'HTML', 'CSS', 'Salesforce MC'],
  },
  {
    period: '2020. 03 ~ 2022. 06',
    company: '라온마케팅',
    role: '컨텐츠 디자이너',
    tasks: [
      '네이버 인쇄물 주문 제작 전용 스마트스토어 운영 및 CS 채널(네이버 톡톡, 카카오 친구톡) 관리',
      '답례품 및 카페·매장 브랜딩용 맞춤형 인쇄물 기획 및 1:1 고객 조율을 통한 주문 제작 진행',
      '실시간 CS 피드백 기반의 트렌드 인쇄 상품 기획 및 신속한 상품화로 전월 대비 매출 2배 달성',
    ],
    skills: ['Photoshop', 'Illustration'],
  },
];

export const educations: Education[] = [
  {
    period: '2025. 11 ~ 2026. 05',
    institution: '코드잇 스프린트',
    detail: '프론트엔드 부트캠프 22기',
    status: '수료',
    tasks: [
      'JavaScript·TypeScript로 타입 안정성을 갖춘 재사용 가능한 로직을 설계하는 역량 습득',
      'React·Next.js 기반의 컴포넌트 구조 설계와 상태 관리 등 실무형 프론트엔드 개발 역량 학습',
      '팀 단위 협업 프로젝트를 통해 Git 기반 버전 관리와 코드 리뷰 등 협업 워크플로 경험',
    ],
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Git'],
  },
  {
    period: '2015. 03 ~ 2019. 02',
    institution: '순천대학교',
    detail: '영상디자인학과',
    status: '졸업',
    tasks: [
      '시각 위계, 타이포그래피, 색채, 레이아웃 이론을 학습하며 디자인 의도를 이해하고 UI로 정확히 구현하는 감각의 기반을 형성',
      '모션과 전환의 타이밍과 이징을 다루는 훈련을 통해, 인터랙션과 애니메이션 설계로 이어지는 시각적 판단력 습득',
      'Adobe 등 디자인 도구와 디자이너의 작업 언어에 대한 이해를 바탕으로, 디자인 핸드오프 과정에서 원활히 협업할 수 있는 기반 확보',
    ],
    skills: ['Photoshop', 'Illustrator', 'Premiere', 'Cinema 4D'],
  },
];

export const certificates: Certificate[] = [
  {
    year: '2025',
    name: 'SQLD (SQL Developer)',
    description: '데이터베이스 구조 이해 및 SQL 활용 경험',
    issuer: '한국데이터산업진흥원',
  },
  {
    year: '2023',
    name: '웹디자인기능사',
    description: 'UI/UX 및 웹 디자인 기초 이해',
    issuer: '한국산업인력공단',
  },
];
