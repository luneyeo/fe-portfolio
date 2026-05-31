'use client';

import { useState } from 'react';
import IcChevronDown from '../ui/icons/IcChevronDown';

export default function ExperienceItem({
  period,
  company,
  role,
  position,
  tasks,
}: {
  period: string;
  company: string;
  role: string;
  position: string;
  tasks: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-10">
      <p className="typo-16-regular shrink-0">{period}</p>
      <div className="flex flex-col gap-2">
        <span className="typo-18-medium">
          {company} / {role}
        </span>
        <p className="typo-14-regular text-primary-300">{position}</p>
        <button
          className="typo-14-regular mt-2 flex cursor-pointer items-center text-left text-gray-400 hover:text-gray-200"
          onClick={() => setOpen((prev) => !prev)}
        >
          <IcChevronDown
            className={`transition-transform duration-200 ${open ? 'rotate-0' : '-rotate-90'}`}
          />
          <span>업무 내용 보기</span>
        </button>
        {open && (
          <ul className="border-primary-700 mt-2 flex flex-col gap-2 rounded-lg border px-6 py-4">
            {tasks.map((task) => (
              <li
                key={task}
                className="typo-14-regular text-primary-100 flex items-center gap-2"
              >
                <span className="text-primary-300">•</span>
                {task}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
