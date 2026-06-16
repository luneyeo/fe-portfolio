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
      <p
        className={cn(
          'typo-12-regular flex items-center gap-1.5 rounded-full bg-gray-900 px-3 py-1 text-gray-50',
          className
        )}
      >
        <span className="inline-block h-2 w-2 rounded-full bg-lime-400"></span>
        {name}
      </p>
    );
  }

  if (variant === 'outline') {
    return (
      <span
        className={cn(
          'typo-13-regular rounded-full border border-gray-200 px-3 py-0.5 text-gray-600',
          className
        )}
      >
        {name}
      </span>
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
