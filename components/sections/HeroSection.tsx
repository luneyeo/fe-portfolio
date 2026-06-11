import IcGithub from '@/components/ui/icons/IcGithub';
import IcMail from '@/components/ui/icons/IcMail';

const GITHUB_URL = 'https://github.com/luneyeo';
const EMAIL = 'ssyeo1204@gmail.com';

export default function HeroSection() {
  return (
    <section id="about" className="sticky top-18 overflow-hidden">
      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] w-280 max-w-280 flex-col items-center justify-center bg-gray-500 px-10">
        <div className="font-archivo text-ink mb-10 flex flex-col text-center text-[60px] leading-16">
          <p>Thinking for</p>
          <p>Better</p>
          <p className="">Experiences.</p>
        </div>

        <div className="mb-10">
          <p className="typo-16-regular max-w-sm text-center leading-relaxed">
            사용자의 작은 행동 하나까지 고민하며,
            <br />더 나은 경험을 만드는 프론트엔드 개발자입니다.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="typo-14-medium flex items-center gap-2 rounded-full border border-gray-300 bg-gray-950/50 px-5 py-2.5 text-white transition-colors hover:border-gray-900 hover:bg-white hover:text-gray-900"
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
      </div>
    </section>
  );
}
