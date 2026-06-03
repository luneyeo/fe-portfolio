interface BadgeProps {
  name: string;
  variant?: string;
}

export default function Badge({ name, variant = 'skill' }: BadgeProps) {
  if (variant === 'type') {
    return (
      <p className="typo-12-regular bg-primary-900 flex items-center gap-1.5 rounded-full border border-gray-800 px-3 py-1 text-gray-200">
        <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
        {name}
      </p>
    );
  }

  return (
    <span className="typo-13-regular rounded-full border border-gray-600 px-3 py-1 text-gray-200">
      {name}
    </span>
  );
}
