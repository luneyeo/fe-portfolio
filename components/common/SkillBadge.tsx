interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="typo-13-regular rounded-full border border-gray-600 px-3 py-1 text-gray-200">
      {name}
    </span>
  );
}
