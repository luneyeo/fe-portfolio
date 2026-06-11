interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="typo-20-medium shrink-0">{title}</h2>
      <div className="flex flex-1 items-center">
        <div className="h-0.5 flex-1 bg-gray-800" />
        <div className="h-2.5 w-2.5 rounded-full bg-gray-800" />
      </div>
    </div>
  );
}
