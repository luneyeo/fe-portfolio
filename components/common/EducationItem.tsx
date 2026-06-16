import type { Education } from '@/types';
import Badge from './Badge';

export default function EducationItem({
  period,
  institution,
  detail,
  status,
  tasks,
  skills,
}: Education) {
  return (
    <div className="group relative py-5 first:pt-0 last:pb-0">
      <div className="flex gap-6">
        <p className="typo-13-medium w-35 shrink-0 text-gray-600">{period}</p>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="typo-16-semibold text-gray-900">{detail}</span>
            <span className="text-gray-300">|</span>
            <span className="typo-14-regular text-gray-600">{institution}</span>
            {status && (
              <span className="typo-12-regular rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-500">
                {status}
              </span>
            )}
          </div>
          {tasks && tasks.length > 0 && (
            <ul className="flex flex-col gap-1">
              {tasks.map((task, taskIndex) => (
                <li
                  key={taskIndex}
                  className="typo-13-regular flex gap-1.5 text-gray-500"
                >
                  <span className="shrink-0">•</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {skills && skills.length > 0 && (
          <div className="flex w-45 shrink-0 flex-wrap content-start gap-1.5">
            {skills.map((skill) => (
              <Badge key={skill} name={skill} variant="outline" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
