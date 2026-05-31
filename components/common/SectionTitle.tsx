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
      <span className="typo-12-medium tracking-wide text-blue-500">
        {subTitle}
      </span>
      <h2 className="typo-28-medium mb-1">{title}</h2>
      <h3 className="typo-14-regular text-gray-500">{descrpition}</h3>
    </div>
  );
}
