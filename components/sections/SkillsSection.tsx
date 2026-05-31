import SectionTitle from '../common/SectionTitle';
import SkillCard from '../common/SkillCard';
import { skills } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section
      className="mx-auto flex w-280 max-w-280 flex-col gap-16 px-6"
      id="skills"
    >
      <SectionTitle
        title="기술 스택"
        subTitle="SKILLS"
        descrpition="실제 프로젝트에서 사용하고 경험한 기술들입니다."
      />
      <div className="flex flex-col gap-14">
        {skills.map(({ label, LabelIcon, variant, items }) => (
          <div key={label} className="">
            <div className="mb-5 flex items-center gap-2">
              <LabelIcon className="text-blue-500" />
              <p className="typo-18-medium">{label}</p>
            </div>
            <div
              className={`grid gap-5 ${variant === 'compact' ? 'grid-cols-5' : 'grid-cols-3'}`}
            >
              {items.map((skill) => (
                <SkillCard key={skill.name} variant={variant} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
