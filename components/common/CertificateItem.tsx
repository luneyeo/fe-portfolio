import type { Certificate } from '@/types';

export default function CertificateItem({
  year,
  name,
  description,
}: Certificate) {
  return (
    <div className="flex gap-10">
      <p className="typo-16-regular shrink-0">{year}</p>
      <div className="flex flex-col gap-1">
        <p className="typo-18-medium">{name}</p>
        <p className="typo-14-regular text-gray-500">{description}</p>
      </div>
    </div>
  );
}
