import type { Experience } from '@/types';
import TimelineItem from './TimelineItem';

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
    <TimelineItem period={period} tasks={tasks} skills={skills}>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="typo-16-semibold text-gray-900">{role}</span>
        <span className="text-gray-300">|</span>
        <span className="typo-14-regular text-gray-600">{company}</span>
        {position && (
          <>
            <span className="text-gray-300">·</span>
            <span className="typo-13-regular text-gray-500">{position}</span>
          </>
        )}
        {status && (
          <span className="typo-12-regular rounded-full bg-gray-200 px-2.5 py-0.5 text-gray-500">
            {status}
          </span>
        )}
      </div>
    </TimelineItem>
  );
}
