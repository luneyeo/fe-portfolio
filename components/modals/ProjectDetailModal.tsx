import type { Project } from '@/types';
import Badge from '../common/Badge';
import IcCheck from '../ui/icons/IcCheck';
import { ReactNode } from 'react';
import IcGithub from '../ui/icons/IcGithub';
import { cn } from '@/utils/cn';

interface ProjectDetailModalProps {
  project: Project;
}

function InfoRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="typo-16-regular flex flex-col gap-1.5 text-gray-600">
      <p className="typo-18-bold text-ink">{label}</p>
      {children}
    </div>
  );
}

function DetailRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 leading-relaxed">
      <div className="flex items-center gap-2">
        <span className="h-4.5 w-0.75 bg-olive-500" />
        <h3 className="typo-20-bold leading-normal">{label}</h3>
      </div>
      {children}
    </div>
  );
}

function DetailList({ children }: { children: ReactNode }) {
  return (
    <ol className="flex list-decimal flex-col gap-6 pl-5 tracking-tight">
      {children}
    </ol>
  );
}

export default function ProjectDetailModal({
  project,
}: ProjectDetailModalProps) {
  const {
    types,
    name,
    subTitle,
    period,
    skills,
    role,
    links,
    description,
    features,
    details,
    troubleshooting,
  } = project;
  return (
    <div className="flex flex-col gap-8">
      {/* 상단 영역 */}
      <div className="flex flex-col gap-6 border-b border-gray-200 pb-8">
        {/* 프로젝트 타입 뱃지, 타이틀 역역 */}
        <div className="mb-3 flex flex-col gap-4">
          <div className="flex gap-2">
            {types &&
              types.map((type) => (
                <Badge name={type} variant="type" key={type} />
              ))}
          </div>
          <div>
            <h2 className="typo-30-bold">{name}</h2>
            <p className="typo-16-regular text-ink leading-relaxed">
              {subTitle}
            </p>
          </div>
        </div>

        {/* 제작 기간, 역할 */}
        <div className="flex flex-col gap-6">
          <InfoRow label="⏱️ 개발 기간">{period && <p>{period}</p>}</InfoRow>
          <InfoRow label="👥 역할">{role && <p>{role}</p>}</InfoRow>
          <InfoRow label="🛠️ 기술 스택">
            {skills && (
              <div className="mt-2 flex flex-wrap gap-1">
                {skills.map((skill, i) => (
                  <Badge
                    key={i}
                    name={skill}
                    className="rounded-xl border-none bg-gray-100"
                  />
                ))}
              </div>
            )}
          </InfoRow>
        </div>

        {/* 프로젝트 링크 버튼 */}
        {links && (
          <div className="mt-3 flex gap-5">
            {links.map((link) =>
              link.label === '사이트' ? (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'typo-14-regular flex w-full items-center justify-center gap-0.5 rounded-lg bg-gray-900 py-3 text-gray-50',
                    'hover:bg-black'
                  )}
                >
                  프로젝트 바로가기
                  <span>↗</span>
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="typo-12-regular flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 hover:bg-gray-100"
                >
                  <IcGithub />
                  GitHub
                </a>
              )
            )}
          </div>
        )}
      </div>

      {/* 주요 기능, 상세 내용 */}
      <div className="flex flex-col gap-10">
        {description && (
          <DetailRow label="프로젝트 소개">
            <p className="typo-16-regular leading-relaxed">{description}</p>
          </DetailRow>
        )}
        {features && features.length > 0 && (
          <DetailRow label="주요 기능">
            <ul className="flex flex-col gap-1.5">
              {features.map((feature, i) => (
                <li key={i} className="typo-16-regular flex items-center gap-2">
                  <IcCheck
                    className="h-4.5 w-4.5 shrink-0"
                    circleFill="#7c9e48"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </DetailRow>
        )}
        {details && (
          <DetailRow label="상세 내용">
            <DetailList>
              {details.map((item, i) => (
                <li key={i}>
                  <span>{item.title}</span>
                  {item.content && (
                    <ul className="mt-2 flex flex-col gap-1.5 pl-5">
                      {item.content.map((cont, contentIndex) => (
                        <li
                          key={contentIndex}
                          className="typo-16-regular list-disc"
                        >
                          {cont}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </DetailList>
          </DetailRow>
        )}
        {troubleshooting && (
          <DetailRow label="개발 이슈">
            <DetailList>
              {troubleshooting.map((item, i) => (
                <li key={i}>
                  <span>{item.title}</span>
                  <div className="mt-3 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <span className="typo-16-regular block min-w-8 text-red-800">
                        에러
                      </span>
                      <p className="typo-16-regular shrink">{item.error}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="typo-16-regular block min-w-8 text-olive-500">
                        해결
                      </span>
                      <p className="typo-16-regular shrink">{item.solution}</p>
                    </div>
                  </div>
                </li>
              ))}
            </DetailList>
          </DetailRow>
        )}
      </div>
    </div>
  );
}
