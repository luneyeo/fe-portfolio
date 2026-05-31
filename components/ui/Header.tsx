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
    const top = el.getBoundingClientRect().top + window.scrollY - (64 + 40);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 h-16 bg-white">
      <div className="mx-auto flex h-full w-280 max-w-280 items-center justify-between px-6">
        <nav className="flex items-center gap-6">
          <div className="h-9 w-9 rounded-full bg-gray-200" />
          <ul className="flex items-center gap-4">
            {navItems.map(({ id, label }) => (
              <li key={id} className="flex">
                <button
                  type="button"
                  onClick={() => {
                    scrollTo(id);
                    setActiveId(id);
                  }}
                  className={`typo-14-medium cursor-pointer text-gray-300 transition-colors hover:text-gray-950 ${
                    activeId === id ? 'typo-14-medium text-gray-950' : ''
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => scrollTo('contact')}
          className="typo-13-semibold bg-primary-900 cursor-pointer rounded-full px-5 py-2 text-white transition-opacity hover:bg-blue-500"
        >
          CONTACT
        </button>
      </div>
    </header>
  );
}
