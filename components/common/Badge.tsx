import { cn } from '@/utils/cn';

type BadgeVariant = 'skill' | 'type' | 'outline';

interface BadgeProps {
  name: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  skill: 'typo-13-regular rounded-full bg-gray-50 px-3 py-1 text-gray-700',
  outline:
    'typo-13-regular rounded-full border border-gray-200 px-3 py-0.5 text-gray-600',
  type: 'typo-12-regular flex items-center gap-1.5 rounded-full bg-gray-900 px-3 py-1 text-gray-50',
};

export default function Badge({
  name,
  variant = 'skill',
  className,
}: BadgeProps) {
  if (variant === 'type') {
    return (
      <p className={cn(variantClasses.type, className)}>
        <span className="inline-block h-2 w-2 rounded-full bg-lime-400" />
        {name}
      </p>
    );
  }

  return <span className={cn(variantClasses[variant], className)}>{name}</span>;
}
