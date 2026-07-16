'use client';

import { useEffect, useState } from 'react';
import { IcArrowDown } from './icons';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 1000);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="맨 위로 이동"
      className={`z-scroll-to-top fixed right-5 bottom-10 flex size-12 cursor-pointer items-center justify-center rounded-full bg-lime-400 shadow-md transition-all duration-400 lg:bottom-20 2xl:right-30 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      <IcArrowDown className="rotate-180 text-black" />
    </button>
  );
}
