import type { Certificate } from '@/types';
import Badge from './Badge';

export default function CertificateItem({
  year,
  name,
  description,
  issuer,
}: Certificate) {
  return (
    <div className="group relative py-5 first:pt-0 last:pb-0">
      <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-6">
        <p className="typo-13-medium w-20 shrink-0 text-gray-600">{year}</p>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="typo-16-semibold text-gray-900">{name}</span>
          <p className="typo-14-regular md:typo-13-regular text-gray-600">
            {description}
          </p>
        </div>
        {issuer && (
          <Badge
            name={issuer}
            className="typo-12-regular w-fit shrink-0 rounded-full bg-gray-100 px-3 py-1 text-gray-500"
          />
        )}
      </div>
    </div>
  );
}
