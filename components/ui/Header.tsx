'use client';

import { useEffect, useState } from 'react';
import IcMenu from './icons/IcMenu';
import IcX from './icons/IcX';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

export default function Header() {
  const [activeId, setActiveId] = useState<string>('');
  const [solidBg, setSolidBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsEl = document.getElementById('skills');
      if (!skillsEl) return;
      setSolidBg(skillsEl.getBoundingClientRect().top <= 232);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - (72 + 40);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setActiveId(id);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 h-18 transition-colors duration-300 ${solidBg ? 'bg-white shadow-[0_1px_0_0_rgba(229,231,235,1)]' : ''}`}
      >
        <div className="mx-0 flex h-full max-w-280 items-center justify-between px-6 lg:mx-auto lg:w-auto">
          <button
            type="button"
            className={`cursor-pointer ${solidBg ? 'text-black' : 'text-white'}`}
            onClick={() => window.location.reload()}
          >
            <span className="typo-16-semibold">여수경 </span>| 프론트엔드 개발자
          </button>
          {/* 데스크탑 nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-4">
              {navItems.map(({ id, label }) => (
                <li key={id} className="flex">
                  <button
                    type="button"
                    onClick={() => handleNavClick(id)}
                    className={`typo-14-medium cursor-pointer transition-colors hover:text-gray-700 ${
                      activeId === id ? 'text-gray-700' : ''
                    } ${solidBg ? 'text-gray-400' : 'text-white hover:text-gray-900'}`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            type="button"
            className={`cursor-pointer md:hidden ${solidBg ? 'text-gray-600' : 'text-white'}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="메뉴 열기"
          >
            {menuOpen ? <IcX /> : <IcMenu />}
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-white pt-18 md:hidden">
          <ul className="flex flex-col items-center pt-8">
            {navItems.map(({ id, label }) => (
              <li key={id} className="w-full py-3">
                <button
                  type="button"
                  onClick={() => handleNavClick(id)}
                  className={`typo-20-medium w-full cursor-pointer transition-colors ${
                    activeId === id ? 'text-gray-900' : 'text-gray-400'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
