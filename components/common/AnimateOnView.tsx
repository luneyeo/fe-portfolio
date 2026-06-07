'use client';

import { useInView } from '@/hooks/useInView';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimateOnView({ children, delay = 50 }: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
