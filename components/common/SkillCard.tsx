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
      <div className="bg-primary-800 flex items-center justify-center gap-2 rounded-xl border border-gray-800 p-3">
        <div className="relative size-6 shrink-0 overflow-hidden">
          <Image className="object-contain" src={iconSrc} alt={iconAlt} fill />
        </div>
        <span className="typo-14-regular">{name}</span>
      </div>
    );
  }

  return (
    <div className="bg-primary-800 flex items-center gap-4 rounded-2xl border border-gray-800 p-4">
      <div className="relative size-10 shrink-0 overflow-hidden">
        <Image className="object-contain" src={iconSrc} alt={iconAlt} fill />
      </div>
      <div className="flex flex-col gap-1">
        <span className="typo-16-regular">{name}</span>
        <p className="typo-13-regular text-gray-500">{description}</p>
      </div>
    </div>
  );
}
