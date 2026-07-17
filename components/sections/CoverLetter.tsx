import Image from 'next/image';
import { IcArrowDown, IcGithub, IcMail } from '@/components/ui/icons';

const GITHUB_URL = 'https://github.com/luneyeo';
const GITHUB_LABEL = GITHUB_URL.replace('https://', '');
const EMAIL = 'ssyeo1204@gmail.com';

// 우측 핵심 기술 스택 (12시 → 시계 방향)
const STACKS = [
  { name: 'React', icon: '/icons/ic-react.svg', left: '50%', top: '19%' },
  { name: 'Next.js', icon: '/icons/ic-nextjs.png', left: '80%', top: '40%' },
  {
    name: 'TypeScript',
    icon: '/icons/ic-typescript.svg',
    left: '68%',
    top: '75%',
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/ic-tailwind.svg',
    left: '32%',
    top: '75%',
  },
  { name: 'Zustand', icon: '/icons/ic-zustand.svg', left: '20%', top: '40%' },
];

export default function CoverLetter() {
  return (
    <section
      id="cover-letter"
      className="sticky top-18 min-h-screen overflow-hidden bg-linear-to-tl from-olive-500/7 to-transparent to-70%"
    >
      <div className="mx-auto flex min-h-screen w-auto max-w-280 flex-col justify-center px-4.5 pb-40 md:px-6">
        {/* 메인 내용 */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-28">
          {/* 좌측: 소개 텍스트 */}
          <div className="flex flex-col lg:col-span-3">
            <span className="typo-14-bold mb-3 tracking-wide text-olive-500 uppercase">
              Front-end Developer
            </span>

            <h2 className="typo-28-bold md:typo-32-bold mb-5 leading-[1.3]">
              사용자 경험을 만드는
              <br />
              프론트엔드 개발자, <span className="text-olive-500">여수경</span>
              입니다.
            </h2>
            {/* 자기소개 */}
            <p className="typo-16-regular leading-body-160 text-gray-600">
              새로운 기술로 도메인을 배우는 것을 즐기며,
              <br /> 브라우저의 동작 원리와 기본기를 깊이 있게 이해하고자
              노력합니다.
              <br /> 또한 컴포넌트와 함수를 아토믹 단위로 분리하고, AI를 활용해
              개발 효율을 높이고 있습니다.
            </p>

            {/* 인용 카드 */}
            <blockquote className="relative mt-8 overflow-hidden rounded-2xl bg-gray-950 p-9 md:px-11 md:py-7">
              <span
                aria-hidden
                className="text-30 pointer-events-none absolute top-4 left-5 leading-none font-bold text-lime-400"
              >
                &ldquo;
              </span>
              <p className="typo-14-regular md:typo-16-regular leading-body-180 text-gray-100">
                좋은 서비스는{' '}
                <span className="text-lime-200">사소한 경험의 차이</span>에서
                완성된다고 믿습니다. 코드 리뷰와 협업을 통해 끊임없이 개선점을
                발견하고, 이를{' '}
                <span className="text-lime-200">
                  사용자 경험에 연결해 실질적인 가치
                </span>
                를 만들어내는 프론트엔드 개발자 가 되겠습니다.
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

          {/* 우측: 기술 스택 배지 (시계 방향 궤도 회전 + 호흡 펄스) */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-sm lg:col-span-2 lg:block">
            <div className="animate-orbit absolute inset-0">
              {STACKS.map((stack, index) => (
                <div
                  key={stack.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: stack.left, top: stack.top }}
                >
                  {/* 궤도 회전으로 기운 아이콘을 다시 정방향으로 되돌림 */}
                  <div className="animate-orbit-reverse">
                    {/* 배지마다 다른 delay로 각각 호흡 */}
                    <div
                      className="animate-breathe flex size-14 items-center justify-center rounded-2xl bg-white shadow-lg md:size-16"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <Image
                        src={stack.icon}
                        alt={stack.name}
                        width={30}
                        height={30}
                      />
                    </div>
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
