import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { href: '#about', label: '소개' },
  { href: '#philosophy', label: '교육 · 역량' },
  { href: '#projects', label: '프로젝트' },
  { href: '#postmortem', label: '포스트모템' },
  { href: '#skills', label: '기술 역량' },
];

export default function Navbar({ onContactClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 dark:border-white/10 bg-[#F8F8FA]/90 dark:bg-[#0D0D10]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Dynamic animated terminal icon + ㅊBackHo wordmark */}
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
        >
          <motion.span
            whileHover={{ scale: 1.06, rotate: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 24 }}
            className="relative inline-flex items-center justify-center w-8 h-8 rounded-lg border border-zinc-300 dark:border-[#22D3EE]/35 bg-zinc-100 dark:bg-[#17171C] text-[#0891B2] dark:text-[#22D3EE] shadow-sm"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.polyline
                points="6 8 11 12 6 16"
                animate={{ x: [0, 1.2, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.line
                x1="13"
                y1="16"
                x2="18"
                y2="16"
                animate={{ opacity: [1, 0.25, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </motion.span>
          <span className="text-lg font-bold tracking-tight text-zinc-950 dark:text-zinc-50 group-hover:text-[#0891B2] dark:group-hover:text-[#22D3EE] transition-colors">
            {DEVELOPER_PROFILE.brandWordmark}
          </span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="주요 섹션 이동"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-zinc-950 dark:hover:text-white underline-offset-4 hover:underline transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onContactClick}
            className="hidden md:inline-flex items-center justify-center min-h-[40px] px-4 py-2 text-sm font-semibold rounded-lg bg-zinc-950 text-white hover:bg-[#0891B2] dark:bg-[#22D3EE] dark:text-[#09090B] dark:hover:bg-[#06B6D4] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
          >
            문의하기
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-white/10 bg-[#F8F8FA] dark:bg-[#0D0D10] px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onContactClick();
              }}
              className="w-full min-h-[44px] px-4 py-2.5 text-sm font-semibold rounded-lg bg-zinc-950 text-white dark:bg-[#22D3EE] dark:text-[#09090B] dark:hover:bg-[#06B6D4] cursor-pointer"
            >
              문의하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
