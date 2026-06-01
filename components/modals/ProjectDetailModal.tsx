import type { Project } from '@/types';
import Badge from '../common/Badge';
import IcCheck from '../ui/icons/IcCheck';

interface ProjectDetailModalProps {
  project: Project;
}

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-4 w-0.5 bg-gray-500" />
      <span className="typo-16-regular">{label}</span>
    </div>
  );
}

export default function ProjectDetailModal({
  project,
}: ProjectDetailModalProps) {
  return (
    <div className="flex flex-col gap-8 pr-6">
      {/* 프로젝트 타입, 제목, 서브 타이틀 */}
      <div className="flex flex-col gap-4 border-b border-gray-800 pb-8">
        <div className="flex gap-2">
          {project.type &&
            project.type.map((type) => {
              return <Badge name={type} variant="type" key={type} />;
            })}
        </div>
        <div>
          <h2 className="typo-30-bold">{project.name}</h2>
          <p className="typo-16-regular leading-relaxed text-gray-400">
            {project.subTitle}
          </p>
        </div>
        {/* 스킬, 링크 연결, 제작 기간, 역할 추가 */}
      </div>

      {/* 주요 기능, 상세 내용 */}
      <div className="flex flex-col gap-10">
        {project.description && (
          <div className="flex flex-col gap-4">
            <SectionHeading label="프로젝트 소개" />
            <p className="typo-14-regular leading-relaxed text-gray-300">
              {project.description}
            </p>
          </div>
        )}
        {project.features && project.features.length > 0 && (
          <div className="flex flex-col gap-4">
            <SectionHeading label="주요 기능" />
            <ul className="flex flex-col gap-1.5">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="typo-14-regular flex items-center gap-2 text-gray-300"
                >
                  <IcCheck
                    className="h-4.5 w-4.5 shrink-0"
                    circleFill="#4490f9"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.details &&
          project.details.length > 0 &&
          project.details[0].title && (
            <>
              {project.details.map((detail, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <SectionHeading label={detail.title} />
                  <p className="typo-14-regular leading-relaxed text-gray-300">
                    {detail.content}
                  </p>
                </div>
              ))}
            </>
          )}
      </div>
    </div>
  );
}
