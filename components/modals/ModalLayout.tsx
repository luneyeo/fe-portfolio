'use client';

import { cn } from '@/utils/cn';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import IcX from '../ui/icons/IcX';

interface ModalLayoutProps {
  onClose: () => void;
  children: ReactNode;
}

export default function ModalLayout({ onClose, children }: ModalLayoutProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/50 md:px-6"
      onClick={onClose}
    >
      <div
        className="relative h-full w-full max-w-5xl overflow-hidden bg-gray-50 md:h-162.5 md:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className={cn(
            'text-ink absolute top-5 right-5 flex size-10 cursor-pointer items-center justify-center rounded-full md:size-8',
            'bg-gray-100 transition-colors hover:bg-olive-500 hover:text-white'
          )}
          aria-label="닫기"
        >
          <IcX />
        </button>

        {/* 프로젝트 상세 내용 영역 */}
        <div className="modal-scroll h-full overflow-y-auto px-8 pt-14 pb-8">
          {children}
        </div>
      </div>
    </div>,

    document.getElementById('modal-root') ?? document.body
  );
}
