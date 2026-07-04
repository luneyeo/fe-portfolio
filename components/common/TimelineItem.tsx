import type { ReactNode } from 'react';
import Badge from './Badge';

interface TimelineItemProps {
  period: string;
  tasks?: string[];
  skills?: string[];
  children: ReactNode;
}

export default function TimelineItem({
  period,
  tasks,
  skills,
  children,
}: TimelineItemProps) {
  return (
    <div className="group relative py-5 first:pt-0 last:pb-0">
      <div className="flex flex-col gap-4 md:flex-row">
        <p className="typo-14-medium shrink-0 leading-relaxed text-gray-600 md:w-34">
          {period}
        </p>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          {children}
          {tasks && tasks.length > 0 && (
            <ul className="flex flex-col gap-2 md:gap-1.5">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="typo-14-regular flex gap-1.5 text-gray-600"
                >
                  <span className="shrink-0">•</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="">
            {skills && skills.length > 0 && (
              <div className="mt-3 flex shrink-0 flex-wrap content-start gap-1.5">
                {skills.map((skill) => (
                  <Badge key={skill} name={skill} variant="outline" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
