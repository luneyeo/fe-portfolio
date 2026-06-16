import { ReactNode } from 'react';

interface SubSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function SubSection({ title, icon, children }: SubSectionProps) {
  return (
    <div className="flex gap-6 rounded-2xl bg-gray-50 p-8">
      <div className="flex w-24 shrink-0 flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-500 text-white">
          {icon}
        </div>
        <span className="typo-14-semibold text-center text-gray-800">
          {title}
        </span>
      </div>
      <div className="relative flex-1 border-l-2 border-olive-500/60 pl-7">
        <div className="divide-y divide-gray-100">{children}</div>
      </div>
    </div>
  );
}
