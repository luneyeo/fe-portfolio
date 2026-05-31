import type { Education, Experience } from '@/types';

export const experiences: Experience[] = [
  {
    period: '2023. 07 - 2025. 07',
    company: '밀버스',
    role: '퍼블리셔',
    position: 'Salesforce Marketing Cloud Engineer',
    tasks: [
      '마케팅 자동화 솔루션 구축 및 운영을 통한 사용자 데이터 기반 서비스 경험',
      '고객 행동 데이터를 기반으로 온사이트 캠페인 기획 및 사용자 경험 개선',
      'API 및 데이터 연동을 통한 개인화 마케팅 시나리오 구현',
      '멀티 채널 메시징(SMS, Kakao, Email 등) 시스템 설계 및 운영 경험',
    ],
  },
];

export const educations: Education[] = [
  {
    period: '2025. 11 - 2026. 05',
    institution: '코드잇 스프린트',
    detail: '프론트엔드 부트캠프 22기',
  },
  {
    period: '2015. 03 - 2019. 02',
    institution: '순천대학교',
    detail: '영상디자인학과 졸업',
  },
];
