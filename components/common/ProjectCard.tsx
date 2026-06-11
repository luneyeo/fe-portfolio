import Image from 'next/image';
import Badge from './Badge';
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
        'flex h-86.5 w-full cursor-pointer gap-8 overflow-hidden rounded-4xl p-7.5',
        'shadow-[0_8px_28px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_30px_rgba(0,0,0,0.2)]'
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
        <span className="typo-14-medium absolute top-0 right-3 flex items-center gap-1">
          더보기 <IcAdd />
        </span>
        <div className="mb-3 flex flex-col">
          <p className="typo-14-medium text-gray-600">{subTitle}</p>
          <h3 className="typo-24-bold">{name}</h3>
        </div>
        <div className="flex flex-col gap-1">
          <p className="typo-14-medium">
            제작 기간&nbsp;&nbsp;
            <span className="text-gray-600">{period}</span>
          </p>

          <p className="typo-14-medium">
            참여 인원&nbsp;&nbsp;
            <span className="text-gray-600">{teamSize}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 4).map((skill) => (
            <Badge key={skill} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
