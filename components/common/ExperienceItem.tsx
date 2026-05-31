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
      <div className="flex flex-col gap-1">
        <span className="typo-18-medium">{company}</span>
        <p className="typo-14-regular text-gray-500">
          {role} / {position}
        </p>
        <button
          className="typo-14-regular mt-2 flex cursor-pointer items-center text-left text-gray-500 hover:text-gray-200"
          onClick={() => setOpen((prev) => !prev)}
        >
          <IcChevronDown
            className={`transition-transform duration-200 ${open ? 'rotate-0' : '-rotate-90'}`}
          />
          <span>업무 내용 보기</span>
        </button>
        {open && (
          <ul className="bg-primary-800 mt-2 flex min-w-150 flex-col gap-4 rounded-lg border border-gray-800 px-6 py-5">
            {tasks.map((task) => (
              <li
                key={task}
                className="typo-14-regular flex items-center gap-2 text-gray-200"
              >
                <span className="text-gray-200">•</span>
                {task}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
