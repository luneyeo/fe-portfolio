import { ReactNode } from 'react';

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="typo-20-medium shrink-0">{title}</h2>
      <div className="flex flex-1 items-center">
        <div className="bg-primary-700 h-0.5 flex-1" />
        <div className="bg-primary-700 h-2.5 w-2.5 rounded-full" />
      </div>
    </div>
  );
}

interface SubSectionProps {
  title: string;
  children: ReactNode;
}

export default function SubSection({ title, children }: SubSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader title={title} />
      {children}
    </div>
  );
}
