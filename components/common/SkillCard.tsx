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
      <div className="flex items-center gap-2 rounded-xl border border-gray-800 bg-primary-800 px-3 py-2">
        <div className="relative size-8 shrink-0 overflow-hidden">
          <Image className="object-contain" src={iconSrc} alt={iconAlt} fill />
        </div>
        <span className="typo-14-medium">{name}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-800 bg-primary-800 p-4">
      <div className="relative size-17.5 shrink-0 overflow-hidden">
        <Image className="object-contain" src={iconSrc} alt={iconAlt} fill />
      </div>
      <div className="flex flex-col gap-1">
        <span className="typo-16-bold">{name}</span>
        {description && <p className="typo-14-medium">{description}</p>}
      </div>
    </div>
  );
}
