import SectionTitle from '../common/SectionTitle';
import SkillCard from '../common/SkillCard';
import { skills } from '@/data/skills';

export default function SkillsSection() {
  return (
    <>
      <SectionTitle
        title="기술 스택"
        subTitle="SKILLS"
        descrpition="실제 프로젝트에서 사용하고 경험한 기술들입니다."
      />
      {skills.map(({ label, LabelIcon, variant, items }) => (
        <div key={label} className="">
          <div className="flex gap-2 items-center">
            <LabelIcon className="text-blue-500" />
            <p className="typo-18-medium">{label}</p>
          </div>
          {items.map((skill) => (
            <SkillCard key={skill.name} variant={variant} {...skill} />
          ))}
        </div>
      ))}
    </>
  );
}
