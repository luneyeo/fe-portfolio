export type Experience = {
  period: string;
  company: string;
  role: string;
  position: string;
  tasks: string[];
};

export type Education = {
  period: string;
  institution: string;
  detail: string;
};

export const experiences: Experience[] = [
  {
    period: '2023. 07 - 2025. 07',
    company: '밀버스',
    role: '솔루션 엔지니어',
    position: 'Salesforce Marketing Cloud Engineer',
    tasks: ['마케팅', 'MCP', 'MCE'],
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
