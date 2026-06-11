import type { Certificate } from '@/types';

export default function CertificateItem({
  year,
  name,
  description,
  issuer,
}: Certificate) {
  return (
    <div className="relative py-5 first:pt-0 last:pb-0">
      <div className="absolute top-5 -left-[5px] h-2.5 w-2.5 rounded-full bg-gray-400 first:top-0" />
      <div className="flex items-start gap-6">
        <p className="typo-13-medium w-20 shrink-0 text-gray-500">{year}</p>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="typo-16-semibold text-gray-900">{name}</span>
          <p className="typo-13-regular text-gray-500">{description}</p>
        </div>
        {issuer && (
          <span className="typo-13-regular shrink-0 rounded-full bg-gray-100 px-3 py-1 text-gray-500">
            {issuer}
          </span>
        )}
      </div>
    </div>
  );
}
