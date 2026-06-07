import type { Certificate, Education, Experience } from '@/types';

export const experiences: Experience[] = [
  {
    period: '2023. 07 ~ 2025. 07',
    company: '밀버스',
    role: '퍼블리셔',
    position: 'Salesforce Marketing Cloud Engineer',
    tasks: [
      'JavaScript 기반 Web SDK를 활용한 고객 행동 데이터 수집·정제 사이트맵 설계 및 구현 (주요 이벤트 매핑 정확도 95% 이상 확보)',
      '수집된 행동 데이터 기반의 온사이트 캠페인 기획 및 타겟팅 최적화를 통해 클릭률(CTR) 15~25%, 전환율 5~10% 개선',
      'AMPscript 기반의 동적 콘텐츠 제어로 멀티 채널(Email, SMS, 알림톡) 메시징 시스템을 구축하여 캠페인 실행 시간 단축 및 업무 효율성 향상',
    ],
  },
];

export const educations: Education[] = [
  {
    period: '2025. 11 ~ 2026. 05',
    institution: '코드잇 스프린트',
    detail: '프론트엔드 부트캠프 22기',
  },
  {
    period: '2015. 03 ~ 2019. 02',
    institution: '순천대학교',
    detail: '영상디자인학과 졸업',
  },
];

export const certificates: Certificate[] = [
  {
    year: '2025',
    name: 'SQLD (SQL Developer)',
    description: '데이터베이스 구조 이해 및 SQL 활용 경험',
  },
  {
    year: '2023',
    name: '웹디자인기능사',
    description: 'UI/UX 및 웹 디자인 기초 이해',
  },
];
