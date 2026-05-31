interface SectionTitleProps {
  subTitle: string;
  title: string;
  descrpition: string;
}

export default function SectionTitle({
  subTitle,
  title,
  descrpition,
}: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="typo-16-bold text-blue-500 mb-4 tracking-[.25em]">
        {subTitle}
      </p>
      <p className="typo-32-bold text-white mb-3">{title}</p>
      <p className="typo-16-regular text-white">{descrpition}</p>
    </div>
  );
}
