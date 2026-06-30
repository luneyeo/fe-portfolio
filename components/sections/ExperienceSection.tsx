import { certificates, educations, experiences } from '@/data/experiences';
import CertificateItem from '../common/CertificateItem';
import EducationItem from '../common/EducationItem';
import ExperienceItem from '../common/ExperienceItem';
import ExperienceSubSectionProps from '../common/ExperienceSubSection';
import IcAward from '../ui/icons/IcAward';
import IcBriefcase from '../ui/icons/IcBriefcase';
import IcGradCap from '../ui/icons/IcGradCap';
import SectionTitle from '../common/SectionTitle';

export default function ExperienceSection() {
  return (
    <section
      className="mx-auto flex w-auto max-w-280 flex-col gap-10 px-4.5 md:gap-16 md:px-6"
      id="experience"
    >
      <SectionTitle
        title="경험"
        subTitle="EXPERIENCE"
        descrpition="실무 경험과 교육을 통해 문제를 해결하고 성장해왔습니다"
      />

      <div className="flex flex-col gap-8 lg:mx-auto">
        <ExperienceSubSectionProps title="실무 경험" icon={<IcBriefcase />}>
          {experiences.map((exp) => (
            <ExperienceItem key={exp.company} {...exp} />
          ))}
        </ExperienceSubSectionProps>

        <ExperienceSubSectionProps title="교육" icon={<IcGradCap />}>
          {educations.map((edu) => (
            <EducationItem key={edu.institution} {...edu} />
          ))}
        </ExperienceSubSectionProps>

        <ExperienceSubSectionProps title="자격증" icon={<IcAward />}>
          {certificates.map((cert) => (
            <CertificateItem key={cert.name} {...cert} />
          ))}
        </ExperienceSubSectionProps>
      </div>
    </section>
  );
}
