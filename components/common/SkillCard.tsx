import Image from 'next/image';

interface SkillCardProps {
  name: string;
  description: string;
  iconSrc: string;
  iconAlt?: string;
}

export default function SkillCard({
  name,
  description,
  iconSrc,
  iconAlt = '',
}: SkillCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-800 bg-primary-800 p-4">
      <div className="relative size-17.5 shrink-0 overflow-hidden ">
        <Image className="object-contain" src={iconSrc} alt={iconAlt} fill />
      </div>
      <div className="flex flex-col gap-1">
        <span className="typo-16-bold text-white">{name}</span>
        <p className="typo-14-regular text-gray-400">{description}</p>
      </div>
    </div>
  );
}
