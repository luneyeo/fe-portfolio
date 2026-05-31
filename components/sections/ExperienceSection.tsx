import { educations, experiences } from '@/data/experiences';
import ExperienceItem from '../common/ExperienceItem';
import EducationItem from '../common/EducationItem';
import SectionTitle from '../common/SectionTitle';

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="typo-20-medium shrink-0">{title}</h2>
      <div className="flex flex-1 items-center">
        <div className="bg-primary-700 h-0.5 flex-1" />
        <div className="bg-primary-700 h-2.5 w-2.5 rounded-full" />
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      className="mx-auto flex w-280 max-w-280 flex-col gap-16 px-6"
      id="experience"
    >
      <SectionTitle
        title="경력 및 교육"
        subTitle="EXPERIENCE"
        descrpition="실무 경험과 교육을 통해 문제를 해결하고 성장해왔습니다."
      />
      <div className="flex flex-col gap-8">
        <SectionHeader title="실무 경험" />
        <div className="flex flex-col gap-10">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.company} {...exp} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <SectionHeader title="교육" />
        <div className="flex flex-col gap-8">
          {educations.map((edu) => (
            <EducationItem key={edu.institution} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
