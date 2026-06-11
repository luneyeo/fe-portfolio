import { certificates, educations, experiences } from '@/data/experiences';
import CertificateItem from '../common/CertificateItem';
import EducationItem from '../common/EducationItem';
import ExperienceItem from '../common/ExperienceItem';
import SubSection from '../common/SubSection';
import IcAward from '../ui/icons/IcAward';
import IcBriefcase from '../ui/icons/IcBriefcase';
import IcGradCap from '../ui/icons/IcGradCap';

export default function ExperienceSection() {
  return (
    <section
      className="mx-auto flex w-280 max-w-280 flex-col gap-10 px-6"
      id="experience"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
          <IcBriefcase />
        </div>
        <div>
          <h2 className="typo-24-bold">경험</h2>
          <p className="typo-14-regular text-gray-500">
            실무 경험과 교육, 자격증을 통해 지속적으로 성장해왔습니다.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <SubSection title="실무 경험" icon={<IcBriefcase />} variant="blue">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.company} {...exp} />
          ))}
        </SubSection>

        <SubSection title="교육" icon={<IcGradCap />} variant="olive">
          {educations.map((edu) => (
            <EducationItem key={edu.institution} {...edu} />
          ))}
        </SubSection>

        <SubSection title="자격증" icon={<IcAward />} variant="gray">
          {certificates.map((cert) => (
            <CertificateItem key={cert.name} {...cert} />
          ))}
        </SubSection>
      </div>
    </section>
  );
}
