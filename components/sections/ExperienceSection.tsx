import { certificates, educations, experiences } from '@/data/experiences';
import ExperienceItem from '../common/ExperienceItem';
import EducationItem from '../common/EducationItem';
import CertificateItem from '../common/CertificateItem';
import SectionTitle from '../common/SectionTitle';
import SubSection from '../common/SubSection';

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
      <SubSection title="실무 경험">
        <div className="flex flex-col gap-10">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.company} {...exp} />
          ))}
        </div>
      </SubSection>
      <SubSection title="교육">
        <div className="flex flex-col gap-8">
          {educations.map((edu) => (
            <EducationItem key={edu.institution} {...edu} />
          ))}
        </div>
      </SubSection>
      <SubSection title="자격증">
        <div className="flex flex-col gap-8">
          {certificates.map((cert) => (
            <CertificateItem key={cert.name} {...cert} />
          ))}
        </div>
      </SubSection>
    </section>
  );
}
