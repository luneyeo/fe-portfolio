import type { Education } from '@/types';
import TimelineItem from './TimelineItem';

export default function EducationItem({
  period,
  institution,
  detail,
  status,
  tasks,
  skills,
}: Education) {
  return (
    <TimelineItem period={period} tasks={tasks} skills={skills}>
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
    </TimelineItem>
  );
}
