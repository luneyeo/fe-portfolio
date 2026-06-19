import type { Experience } from '@/types';
import Badge from './Badge';

export default function ExperienceItem({
  period,
  role,
  company,
  position,
  status,
  tasks,
  skills,
}: Experience) {
  return (
    <div className="group relative py-5 first:pt-0 last:pb-0">
      <div className="flex flex-col gap-4 md:flex-row lg:gap-6">
        <p className="typo-13-medium shrink-0 text-gray-600 lg:w-35">
          {period}
        </p>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="typo-16-semibold text-gray-900">{role}</span>
            <span className="text-gray-300">|</span>
            <span className="typo-14-regular text-gray-600">{company}</span>
            {position && (
              <>
                <span className="text-gray-300">·</span>
                <span className="typo-13-regular text-gray-500">
                  {position}
                </span>
              </>
            )}
            {status && (
              <span className="typo-12-regular rounded-full bg-gray-200 px-2.5 py-0.5 text-gray-500">
                {status}
              </span>
            )}
          </div>
          <ul className="flex flex-col gap-2 md:gap-1">
            {tasks.map((task) => (
              <li
                key={task}
                className="typo-14-regular md:typo-13-regular flex gap-1.5 text-gray-600"
              >
                <span className="shrink-0">•</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
        {skills && skills.length > 0 && (
          <div className="mt-3 flex shrink-0 flex-wrap content-start gap-1.5 md:w-22.5 lg:w-45">
            {skills.map((skill) => (
              <Badge key={skill} name={skill} variant="outline" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
