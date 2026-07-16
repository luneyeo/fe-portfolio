import Image from 'next/image';
import IcArrowDown from '@/components/ui/icons/IcArrowDown';
import IcGithub from '@/components/ui/icons/IcGithub';
import IcMail from '@/components/ui/icons/IcMail';

const GITHUB_URL = 'https://github.com/luneyeo';
const GITHUB_LABEL = GITHUB_URL.replace('https://', '');
const EMAIL = 'ssyeo1204@gmail.com';

// 우측 핵심 기술 스택 (12시 → 시계 방향)
const STACKS = [
  { name: 'React', icon: '/icons/ic-react.svg', left: '50%', top: '12%' },
  { name: 'Next.js', icon: '/icons/ic-nextjs.png', left: '86%', top: '38%' },
  {
    name: 'TypeScript',
    icon: '/icons/ic-typescript.svg',
    left: '72%',
    top: '81%',
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/ic-tailwind.svg',
    left: '28%',
    top: '81%',
  },
  { name: 'Zustand', icon: '/icons/ic-zustand.svg', left: '14%', top: '38%' },
];

export default function CoverLetter() {
  return (
    <section
      id="cover-letter"
      className="sticky top-18 min-h-screen overflow-hidden bg-linear-to-tl from-olive-500/7 to-transparent to-70%"
    >
      <div className="mx-auto flex min-h-screen w-auto max-w-280 flex-col justify-center px-4.5 pb-40 md:px-6">
        {/* 메인 내용 */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-16">
          {/* 좌측: 소개 텍스트 */}
          <div className="flex flex-col lg:col-span-2">
            <span className="typo-14-bold mb-3 tracking-wide text-olive-500 uppercase">
              Front-end Developer
            </span>

            <h2 className="typo-28-bold md:typo-32-bold mb-5 leading-[1.3]">
              사용자 경험을 만드는
              <br />
              프론트엔드 개발자, <span className="text-olive-500">여수경</span>
              입니다.
            </h2>

            <p className="typo-16-regular leading-body-180 text-gray-600">
              새로운 기술로 도메인을 배우는 것을 즐기며, 어려운 문제일수록 깊게
              파고드는 개발자입니다. React 기반의 웹 프로젝트에서 사용자 경험을
              고민하며 서비스를 만들어왔습니다.
            </p>

            {/* 인용 카드 */}
            <blockquote className="relative mt-8 overflow-hidden rounded-2xl bg-gray-950 p-6 md:px-11 md:py-7">
              <span
                aria-hidden
                className="text-30 pointer-events-none absolute top-4 left-5 leading-none font-bold text-lime-400"
              >
                &ldquo;
              </span>
              <p className="typo-14-regular md:typo-16-regular leading-body-180 text-gray-100">
                좋은 서비스는 작은 경험의 차이에서 시작된다고 믿습니다. 사용자의
                흐름을 끝까지 따라가며, 코드로 그 경험을 완성해 나가고 싶습니다.
              </p>
              <span
                aria-hidden
                className="text-30 pointer-events-none absolute right-5 bottom-3 leading-none font-bold text-lime-400"
              >
                &rdquo;
              </span>
            </blockquote>

            {/* 연락처 */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="typo-14-medium hover:text-ink flex items-center gap-2 text-gray-600 transition-colors"
              >
                <IcMail />
                {EMAIL}
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="typo-14-medium hover:text-ink flex items-center gap-2 text-gray-600 transition-colors"
              >
                <IcGithub />
                {GITHUB_LABEL}
              </a>
            </div>
          </div>

          {/* 우측: 기술 스택 배지 (시계 방향 회전) */}
          {/* 궤도(정방향)와 각 배지(역방향)의 회전 duration은 24s로 동일해야
              아이콘이 뒤집히지 않고 정방향을 유지함 (두 값 동기화 필수) */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block">
            <div className="absolute inset-0 animate-[spin_24s_linear_infinite]">
              {STACKS.map((stack) => (
                <div
                  key={stack.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: stack.left, top: stack.top }}
                >
                  <div className="flex size-14 animate-[spin_24s_linear_infinite_reverse] items-center justify-center rounded-2xl bg-white shadow-lg md:size-16">
                    <Image
                      src={stack.icon}
                      alt={stack.name}
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 다운 */}
      <div className="absolute bottom-35 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-900">
        <span className="typo-12-regular tracking-widest uppercase">
          Scroll Down
        </span>
        <IcArrowDown className="animate-bounce" />
      </div>
    </section>
  );
}
