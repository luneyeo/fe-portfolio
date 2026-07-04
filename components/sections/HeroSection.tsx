import Image from 'next/image';
import IcArrowDown from '@/components/ui/icons/IcArrowDown';
import IcGithub from '@/components/ui/icons/IcGithub';
import IcMail from '@/components/ui/icons/IcMail';

const GITHUB_URL = 'https://github.com/luneyeo';
const EMAIL = 'ssyeo1204@gmail.com';
const BG_IMAGE = '/images/img-sky.png';

export default function HeroSection() {
  return (
    <section id="about" className="sticky top-0 -mt-18 overflow-hidden">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-4.5">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          priority
          className="-z-10 object-cover object-center"
        />
        <div className="mb-5 flex flex-col text-center text-[36px] leading-[1.15] font-bold tracking-wide text-white md:mb-10 md:text-[50px] md:leading-[1.1] lg:text-[60px] lg:leading-16">
          <span>Thinking for</span>
          <span>Better</span>
          <span>Experiences</span>
        </div>

        <div className="mb-10">
          <p className="typo-16-regular max-w-sm text-center leading-relaxed text-white">
            사용자의 작은 행동 하나까지 고민하며,
            <br />더 나은 경험을 만드는 프론트엔드 개발자입니다.
          </p>
        </div>

        {/* 깃헙/이메일 버튼 */}
        <div className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="typo-14-medium flex items-center gap-2 rounded-full bg-gray-800/60 px-5 py-2.5 text-white transition-colors hover:border-gray-900 hover:bg-white hover:text-gray-900"
          >
            <IcGithub />
            GitHub
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="typo-14-bold flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 transition-opacity hover:bg-gray-950 hover:text-gray-50"
          >
            <IcMail />
            Contact
          </a>
        </div>

        {/* 스크롤 다운 */}
        <div className="absolute bottom-16 flex flex-col items-center gap-2 text-white">
          <span className="typo-12-regular tracking-widest uppercase">
            Scroll Down
          </span>
          <IcArrowDown className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
