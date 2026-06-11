import IcGithub from './icons/IcGithub';
import IcMail from './icons/IcMail';

const GITHUB_URL = 'https://github.com/luneyeo';
const EMAIL = 'ssyeo1204@gmail.com';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="mx-auto flex w-280 max-w-280 items-center justify-between px-6 py-8">
        <p className="typo-13-regular text-gray-500">© 2026 YEO Sugyeong</p>
        <div className="flex items-center gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
          >
            <IcGithub />
            <span className="typo-13-regular">GitHub</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
          >
            <IcMail />
            <span className="typo-13-regular">{EMAIL}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
