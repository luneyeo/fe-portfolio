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
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - (72 + 40);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <header className="bg-primary-900 sticky top-0 z-50 h-18 border-b border-gray-400">
      <div className="mx-auto flex h-full w-280 max-w-280 items-center justify-between px-6">
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
                  className={`typo-14-medium cursor-pointer text-gray-500 transition-colors hover:text-white ${
                    activeId === id ? 'typo-14-medium text-white' : ''
                  }`}
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
