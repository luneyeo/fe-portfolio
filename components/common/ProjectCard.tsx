import Image from 'next/image';
import SkillBadge from './Badge';
import IcAdd from '@/components/ui/icons/IcAdd';
import { cn } from '@/utils/cn';

interface ProjectCardProps {
  thumbnail: string;
  subTitle: string;
  name: string;
  period: string;
  teamSize: string;
  skills: string[];
  link?: string;
  onMoreClick: () => void;
}

export default function ProjectCard({
  thumbnail,
  subTitle,
  name,
  period,
  teamSize,
  skills,
  onMoreClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onMoreClick}
      className={cn(
        'bg-primary-800 group flex h-86.5 w-full cursor-pointer gap-8 overflow-hidden rounded-4xl border border-gray-800 p-7.5',
        'transition-transform duration-300 ease-out hover:-translate-y-1.5'
      )}
    >
      <div className="relative w-96 shrink-0">
        <Image
          className="rounded-3xl object-cover"
          src={thumbnail}
          alt={name}
          fill
        />
      </div>
      <div className="relative flex flex-1 flex-col justify-end gap-3.5 py-3">
        <span className="typo-14-regular absolute top-0 right-3 flex items-center gap-1 text-gray-400 group-hover:text-white">
          더보기 <IcAdd />
        </span>
        <div className="mb-3 flex flex-col">
          <p className="typo-14-regular text-gray-400">{subTitle}</p>
          <h3 className="typo-24-semibold">{name}</h3>
        </div>
        <div className="flex flex-col gap-1">
          <p className="typo-14-medium">
            제작 기간&nbsp;&nbsp;
            <span className="typo-14-regular text-gray-300">{period}</span>
          </p>

          <p className="typo-14-medium">
            참여 인원&nbsp;&nbsp;
            <span className="typo-14-regular text-gray-300">{teamSize}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
