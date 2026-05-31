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
      <p className="typo-16-bold text-blue-500 mb-2 tracking-[.25em]">
        {subTitle}
      </p>
      <h2 className="typo-30-medium text-white">{title}</h2>
      <h3 className="typo-18-regular text-white">{descrpition}</h3>
    </div>
  );
}
