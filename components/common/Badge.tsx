interface BadgeProps {
  name: string;
  variant?: string;
}

export default function Badge({ name, variant = 'skill' }: BadgeProps) {
  if (variant === 'type') {
    return (
      <span className="typo-12-regular bg-primary-700 rounded-full border border-gray-600 px-3 py-1 text-gray-200">
        {name}
      </span>
    );
  }

  return (
    <span className="typo-13-regular rounded-full border border-gray-600 px-3 py-1 text-gray-200">
      {name}
    </span>
  );
}
