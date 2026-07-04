import IcGithub from './icons/IcGithub';
import IcMail from './icons/IcMail';

const GITHUB_URL = 'https://github.com/luneyeo';
const EMAIL = 'ssyeo1204@gmail.com';

export default function Footer() {
  return (
    <footer className="typo-14-regular border-t border-gray-800 bg-gray-900 text-white">
      <div className="mx-auto flex max-w-280 flex-col items-center justify-between gap-2 px-6 py-8 md:flex-row">
        <p className="">© 2026 YEO Sugyeong</p>
        <div className="flex items-center gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors"
          >
            <IcGithub />
            GitHub
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 transition-colors"
          >
            <IcMail />
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
