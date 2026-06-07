import type { Project } from '@/types';
import Badge from '../common/Badge';
import IcCheck from '../ui/icons/IcCheck';
import { ReactNode } from 'react';
import IcGithub from '../ui/icons/IcGithub';
import IcCalendar from '../ui/icons/IcCalendar';
import IcUser from '../ui/icons/IcUser';
import IcCode from '../ui/icons/IcCode';

interface ProjectDetailModalProps {
  project: Project;
}

function SectionBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="h-4 w-0.5 bg-blue-500" />
        <h3 className="typo-18-regular">{label}</h3>
      </div>
      {children}
    </div>
  );
}

function DetailHeading({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <p className="typo-14-medium text-gray-500">{label}</p>
      {children}
    </div>
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
    <div className="flex flex-col gap-8 pr-6">
      {/* 상단 영역 */}
      <div className="flex flex-col gap-6 border-b border-gray-800 pb-8">
        {/* 프로젝트 타입 뱃지, 타이틀 역역 */}
        <div className="">
          <div className="mb-2 flex gap-2">
            {types &&
              types.map((type) => {
                return <Badge name={type} variant="type" key={type} />;
              })}
          </div>
          <div className="mb-4">
            <h2 className="typo-30-bold">{name}</h2>
            <p className="typo-16-regular leading-relaxed text-gray-400">
              {subTitle}
            </p>
          </div>
        </div>

        {/* 제작 기간, 역할 */}
        <div className="flex flex-col gap-5">
          {/* 제작 기간 */}
          <div className="flex gap-3">
            <div className="bg-primary-700 h-11 w-11 rounded-xl p-3">
              <IcCalendar />
            </div>
            <DetailHeading label="제작 기간">
              {period && (
                <p className="typo-14-regular text-gray-200">{period}</p>
              )}
            </DetailHeading>
          </div>

          {/* 역할 */}
          <div className="flex gap-3">
            <div className="bg-primary-700 h-11 w-11 rounded-xl p-3">
              <IcUser />
            </div>
            <DetailHeading label="역할">
              {role && <p className="typo-14-regular text-gray-200">{role}</p>}
            </DetailHeading>
          </div>

          {/* 기술 스택 */}
          <div className="flex gap-3">
            <div className="bg-primary-700 h-11 w-11 rounded-xl p-3">
              <IcCode className="h-5 w-5" />
            </div>
            <DetailHeading label="기술 스택">
              {skills && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {skills.map((skill, i) => (
                    <Badge key={i} name={skill} />
                  ))}
                </div>
              )}
            </DetailHeading>
          </div>
        </div>

        {/* 프로젝트 링크 버튼 */}
        <div className="mt-3 flex gap-5">
          {links && (
            <>
              <a
                href={links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="typo-12-regular flex w-full items-center justify-center gap-0.5 rounded-lg bg-blue-500 py-3 hover:bg-blue-600"
              >
                프로젝트 바로가기
                <span>↗</span>
              </a>
              <a
                href={links[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="typo-12-regular hover:bg-primary-400 bg-primary-700 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-700 py-3"
              >
                <IcGithub />
                GitHub
              </a>
            </>
          )}
        </div>
      </div>

      {/* 주요 기능, 상세 내용 */}
      <div className="flex flex-col gap-10">
        {description && (
          <SectionBlock label="프로젝트 소개">
            <p className="typo-14-regular leading-relaxed whitespace-pre-line text-gray-300">
              {description}
            </p>
          </SectionBlock>
        )}
        {features && features.length > 0 && (
          <SectionBlock label="주요 기능">
            <ul className="flex flex-col gap-1.5">
              {features.map((feature, i) => (
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
          </SectionBlock>
        )}
        {details && (
          <SectionBlock label="상세 내용">
            <ol className="flex list-decimal flex-col gap-6 pl-5">
              {details.map((item, i) => (
                <li key={i} className="">
                  <span>{item.title}</span>
                  {item.content && (
                    <ul className="mt-2 pl-5">
                      {item.content.map((cont, contentIndex) => (
                        <li
                          key={contentIndex}
                          className="typo-14-regular list-disc leading-relaxed text-gray-300"
                        >
                          {cont}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </SectionBlock>
        )}
        {troubleshooting && (
          <SectionBlock label="트러블 슈팅">
            <ol className="flex list-decimal flex-col gap-6 pl-5">
              {troubleshooting.map((item, i) => (
                <li key={i}>
                  <span>{item.title}</span>
                  {item.content && (
                    <ul className="mt-2 pl-5">
                      {item.content.map((cont, contentIndex) => (
                        <li
                          key={contentIndex}
                          className="typo-14-regular list-disc leading-relaxed text-gray-300"
                        >
                          {cont}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </SectionBlock>
        )}
      </div>
    </div>
  );
}
