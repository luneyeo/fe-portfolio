import { ReactNode } from 'react';

type Variant = 'blue' | 'olive' | 'gray';

const variantClasses: Record<Variant, { iconBg: string; border: string }> = {
  blue: { iconBg: 'bg-blue-500', border: 'border-blue-400' },
  olive: { iconBg: 'bg-olive-500', border: 'border-olive-500' },
  gray: { iconBg: 'bg-gray-500', border: 'border-gray-300' },
};

interface SubSectionProps {
  title: string;
  icon: ReactNode;
  variant: Variant;
  children: ReactNode;
}

export default function SubSection({
  title,
  icon,
  variant,
  children,
}: SubSectionProps) {
  const { iconBg, border } = variantClasses[variant];

  return (
    <div className="flex gap-10 rounded-2xl bg-gray-50 p-8">
      <div className="flex w-24 shrink-0 flex-col items-center gap-2">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${iconBg}`}
        >
          {icon}
        </div>
        <span className="typo-14-semibold text-center text-gray-800">
          {title}
        </span>
      </div>
      <div className={`relative flex-1 border-l-2 pl-8 ${border}`}>
        <div className="divide-y divide-gray-100">{children}</div>
      </div>
    </div>
  );
}
