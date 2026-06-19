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
        'flex h-auto w-full cursor-pointer flex-col gap-4 overflow-hidden rounded-4xl p-3 md:h-86.5 md:flex-row md:gap-8 md:p-6 lg:p-7.5',
        'shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out',
        'hover:-translate-y-1.5 hover:shadow-[0_16px_30px_rgba(0,0,0,0.2)]'
      )}
    >
      <div className="relative h-50 w-full shrink-0 md:h-full md:w-96">
        <Image
          className="rounded-3xl object-cover"
          src={thumbnail}
          alt={name}
          fill
        />
      </div>
      <div className="relative flex flex-1 flex-col justify-end gap-3.5 p-3 md:px-0">
        <span className="typo-14-medium absolute top-0 right-3 hidden items-center gap-1 md:flex">
          더보기 <IcAdd />
        </span>
        <div className="flex flex-col">
          <p className="typo-14-medium text-gray-600">{subTitle}</p>
          <h3 className="typo-24-semibold">{name}</h3>
        </div>
        <div className="flex flex-col gap-1">
          <p className="typo-14-medium tracking-tight">
            제작 기간&nbsp;&nbsp;
            <span className="text-gray-600">{period}</span>
          </p>

          <p className="typo-14-medium tracking-tight">
            참여 인원&nbsp;&nbsp;
            <span className="text-gray-600">{teamSize}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {skills.slice(0, 4).map((skill) => (
            <Badge key={skill} name={skill} variant="outline" />
          ))}
        </div>
      </div>
    </div>
  );
}
