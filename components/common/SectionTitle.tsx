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
      <span className="typo-14-bold mb-2 tracking-wide text-olive-500 uppercase">
        {subTitle}
      </span>
      <h2 className="typo-24-bold md:typo-28-bold mb-0.5">{title}</h2>
      <h3 className="typo-14-medium">{descrpition}</h3>
    </div>
  );
}
