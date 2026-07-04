import type { Certificate, Education, Experience } from '@/types';

export const experiences: Experience[] = [
  {
    period: '2023. 07 ~ 2025. 07',
    company: '밀버스',
    role: '퍼블리셔',
    tasks: [
      'eCRM 구축 및 운영 프로젝트 참여, 사용자 행동 데이터 기반 마케팅 기능 개발 경험 보유',
      'JavaScript 기반 Web SDK로 고객 행동 데이터를 수집·정제하는 사이트맵 설계 및 구현, 주요 이벤트 매핑 정확도 95% 이상 달성',
      '행동 데이터 기반의 온사이트 캠페인 기획과 타겟팅 최적화를 통해 클릭률 5~10%, 전환율 3~6% 개선',
      'AMPscript 기반의 동적 콘텐츠 제어로 멀티 채널(Email, SMS, 알림톡) 메시징 시스템을 구축 및 캠페인 실행 시간 단축 및 업무 효율성 향상',
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
      'JavaScript, TypeScript 기반의 컴포넌트 설계 및 실전 프로젝트 구현',
      'React, Next.js를 활용한 웹 애플리케이션 개발 및 팀 협업 경험',
    ],
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Git'],
  },
  {
    period: '2015. 03 ~ 2019. 02',
    institution: '순천대학교',
    detail: '영상디자인학과',
    status: '졸업',
    tasks: [
      '영상디자인 이론 및 실무 프로젝트를 통한 시각 커뮤니케이션 역량 습득',
      'UI/UX 기초 이해 및 웹 디자인 실무 도구 활용 능력 향상',
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
