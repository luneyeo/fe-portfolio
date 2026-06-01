import IcGithub from '@/components/ui/icons/IcGithub';
import IcMail from '@/components/ui/icons/IcMail';

const GITHUB_URL = 'https://github.com/luneyeo';
const EMAIL = 'ssyeo1204@gmail.com';

export default function HeroSection() {
  return (
    <section id="about" className="bg-primary-900 relative overflow-hidden">
      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] w-280 max-w-280 flex-col justify-center px-6 py-20">
        <div className="flex flex-col">
          <span className="typo-14-medium mb-3 tracking-[.25em] text-blue-500 uppercase">
            Frontend Developer
          </span>
          <div className="mb-8 flex flex-col">
            <p className="font-archivo text-[80px] leading-none tracking-tight">
              BUILDING
              <br />
              <span className="text-blue-500">DIGITAL</span>
              <br />
              FUTURES
            </p>
          </div>
          <div className="mb-8 flex flex-col">
            <p className="typo-14-regular max-w-md leading-relaxed text-gray-300">
              사용자 경험을 중심에 두고,
              <br />
              마케팅 자동화 경험을 바탕으로 데이터와 UI를 연결하는
              <br />
              프론트엔드 개발자입니다.
            </p>
          </div>

          <div className="mt-2 flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="typo-14-medium flex items-center gap-2 rounded-full border border-gray-800 px-5 py-2.5 text-gray-300 transition-colors hover:border-gray-600 hover:text-white"
            >
              <IcGithub />
              GitHub
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="typo-14-medium flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-white transition-opacity hover:opacity-80"
            >
              <IcMail />
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
