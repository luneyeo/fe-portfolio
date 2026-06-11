import { cn } from '@/utils/cn';

interface BadgeProps {
  name: string;
  variant?: string;
  className?: string;
}

export default function Badge({
  name,
  variant = 'skill',
  className,
}: BadgeProps) {
  if (variant === 'type') {
    return (
      <p className="typo-12-regular flex items-center gap-1.5 rounded-full bg-gray-900 px-3 py-1 text-gray-50">
        <span className="inline-block h-2 w-2 rounded-full bg-blue-600"></span>
        {name}
      </p>
    );
  }

  return (
    <span
      className={cn(
        'typo-13-regular rounded-full bg-gray-50 px-3 py-1 text-gray-700',
        className
      )}
    >
      {name}
    </span>
  );
}
