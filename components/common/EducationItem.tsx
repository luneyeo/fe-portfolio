export default function EducationItem({
  period,
  institution,
  detail,
}: {
  period: string;
  institution: string;
  detail: string;
}) {
  return (
    <div className="flex gap-10">
      <p className="typo-16-regular shrink-0">{period}</p>
      <div className="flex flex-col gap-1">
        <p className="typo-18-medium">{institution}</p>
        <p className="typo-14-regular text-gray-500">{detail}</p>
      </div>
    </div>
  );
}
