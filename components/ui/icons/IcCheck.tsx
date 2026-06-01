interface IcCheckProps {
  className?: string;
  circleFill?: string;
  checkStroke?: string;
}

export default function IcCheck({
  className,
  circleFill = 'currentColor',
  checkStroke = 'white',
}: IcCheckProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill={circleFill} />
      <path
        stroke={checkStroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 12l3 3 6-6"
      />
    </svg>
  );
}
