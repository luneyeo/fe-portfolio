import { cn } from '@/utils/cn';
import Image from 'next/image';

interface SkillCardProps {
  name: string;
  description?: string;
  iconSrc: string;
  iconAlt?: string;
  variant?: 'full' | 'compact';
}

export default function SkillCard({
  name,
  description,
  iconSrc,
  iconAlt = '',
  variant = 'full',
}: SkillCardProps) {
  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-3',
          'transition-transform duration-200 ease-out will-change-transform hover:scale-105'
        )}
      >
        <div className="relative size-6 shrink-0 overflow-hidden">
          <Image className="object-contain" src={iconSrc} alt={iconAlt} fill />
        </div>
        <span className="typo-14-medium">{name}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4',
        'transition-transform duration-200 ease-out will-change-transform hover:scale-103'
      )}
    >
      <div className="relative size-10 shrink-0 overflow-hidden">
        <Image className="object-contain" src={iconSrc} alt={iconAlt} fill />
      </div>
      <div className="flex flex-col gap-1">
        <span className="typo-16-medium">{name}</span>
        <p className="typo-13-medium text-gray-500">{description}</p>
      </div>
    </div>
  );
}
