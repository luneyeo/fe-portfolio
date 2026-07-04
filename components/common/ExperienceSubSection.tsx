import { ReactNode } from 'react';

interface ExperienceSubSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function SubSection({
  title,
  icon,
  children,
}: ExperienceSubSectionProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-gray-50 p-6 sm:gap-6 md:flex-row lg:p-8">
      <div className="flex w-fit shrink-0 items-center gap-2 sm:w-20 sm:flex-col lg:w-20">
        <div className="flex size-10 items-center justify-center rounded-full bg-olive-500 text-white sm:size-12">
          {icon}
        </div>
        <span className="typo-18-semibold sm:typo-14-semibold text-center text-gray-800">
          {title}
        </span>
      </div>
      <div className="relative flex-1 border-t border-olive-500/80 pt-4 sm:pt-7 md:border-t-0 md:border-l md:pt-0 md:pl-7">
        <div className="divide-y divide-gray-100">{children}</div>
      </div>
    </div>
  );
}
