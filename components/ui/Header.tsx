'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

export default function Header() {
  const [activeId, setActiveId] = useState<string>('');
  const [solidBg, setSolidBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsEl = document.getElementById('skills');
      if (!skillsEl) return;
      setSolidBg(skillsEl.getBoundingClientRect().top <= 232);
    };
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

  return (
    <header
      className={`sticky top-0 z-50 h-18 transition-colors duration-300 ${solidBg ? 'bg-white shadow-[0_1px_0_0_rgba(229,231,235,1)]' : 'bg-linear-to-b from-[#4C7CC9]/75 to-transparent'}`}
    >
      <div className="mx-0 flex h-full max-w-280 items-center justify-between px-6 lg:mx-auto lg:w-auto">
        <div className="h-9 w-9 rounded-full bg-gray-200" />
        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-4">
            {navItems.map(({ id, label }) => (
              <li key={id} className="flex">
                <button
                  type="button"
                  onClick={() => {
                    scrollTo(id);
                    setActiveId(id);
                  }}
                  className={`typo-14-medium cursor-pointer transition-colors hover:text-gray-700 ${
                    activeId === id ? 'text-gray-700' : ''
                  } ${solidBg ? 'text-gray-400' : 'text-white hover:text-gray-900'} `}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
