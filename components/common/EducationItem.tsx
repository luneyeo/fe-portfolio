import type { Education } from '@/types';

export default function EducationItem({
  period,
  institution,
  detail,
  status,
  tasks,
  skills,
}: Education) {
  return (
    <div className="relative py-7 first:pt-0 last:pb-0">
      <div className="absolute top-7 -left-[5px] h-2.5 w-2.5 rounded-full bg-olive-500 first:top-0" />
      <div className="flex gap-6">
        <p className="typo-13-medium w-44 shrink-0 text-olive-500">{period}</p>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="typo-16-semibold text-gray-900">{detail}</span>
            <span className="text-gray-300">|</span>
            <span className="typo-14-regular text-gray-600">{institution}</span>
            {status && (
              <span className="typo-12-medium rounded-full bg-olive-500/10 px-2.5 py-0.5 text-olive-500">
                {status}
              </span>
            )}
          </div>
          {tasks && tasks.length > 0 && (
            <ul className="flex flex-col gap-1">
              {tasks.map((task) => (
                <li
                  key={task}
                  className="typo-13-regular flex gap-1.5 text-gray-600"
                >
                  <span className="mt-0.5 shrink-0">•</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {skills && skills.length > 0 && (
          <div className="flex w-52 shrink-0 flex-wrap content-start gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="typo-12-regular rounded-full border border-gray-200 px-3 py-0.5 text-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
