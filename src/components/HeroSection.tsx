import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Moon, Sun, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  roleTitle?: string;
}

export default function HeroSection({
  theme,
  onToggleTheme,
  roleTitle = DEVELOPER_PROFILE.roleTitle,
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      if (videoRef.current) {
        if (mediaQuery.matches) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch(() => {});
        }
      }
    };

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);
    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#09090B]"
    >
      {/* Hero Background Video & Readability Overlays */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${
          theme === 'dark' ? 'bg-[#09090B]' : 'bg-zinc-100'
        }`}
      >
        <video
          ref={videoRef}
          autoPlay={!prefersReducedMotion}
          loop
          muted
          playsInline
          preload="metadata"
          className={`h-full w-full object-cover object-right transition-all duration-300 ${
            theme === 'dark'
              ? 'opacity-80 contrast-105'
              : 'opacity-70 mix-blend-multiply contrast-110'
          }`}
        >
          <source src="/hero-a-loop.mp4" type="video/mp4" />
        </video>

        {theme === 'dark' ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/90 via-[#09090B]/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-transparent to-[#09090B]/25" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-50/90 via-zinc-50/55 to-zinc-50/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/80 via-transparent to-zinc-50/25" />
          </>
        )}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-20 lg:pb-20">
        {/* Top Metadata & Theme Switch Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-200/80 dark:border-white/10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
            <span className="text-zinc-950 dark:text-zinc-100 font-semibold">
              {DEVELOPER_PROFILE.name} ({DEVELOPER_PROFILE.englishName})
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-zinc-800 dark:text-zinc-200">{roleTitle}</span>
            <span aria-hidden="true">·</span>
            <span>{DEVELOPER_PROFILE.location}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={DEVELOPER_PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 min-h-[36px] px-2.5 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-[#0891B2] dark:hover:text-[#22D3EE] transition-colors whitespace-nowrap shrink-0"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
              className="inline-flex items-center gap-1.5 min-h-[36px] px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-300/90 dark:border-white/15 bg-white/70 dark:bg-white/[0.03] text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#22D3EE]" />
                  <span>라이트 모드</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#0891B2]" />
                  <span>다크 모드</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Pure Typographic Hero (No Image, Pure Editorial Focus) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="pt-10 lg:pt-14 max-w-4xl space-y-7"
        >
          <p className="font-mono-tabular text-xs sm:text-sm font-medium text-[#0891B2] dark:text-[#22D3EE]">
            {DEVELOPER_PROFILE.coreStackSummary.join(' · ')}
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.16] text-zinc-950 dark:text-zinc-50">
            {DEVELOPER_PROFILE.headlineLead}{' '}
            <span className="text-[#0891B2] dark:text-[#22D3EE]">
              {DEVELOPER_PROFILE.headlineHighlight}
            </span>
          </h1>

          <p
            id="about"
            className="text-base sm:text-lg leading-[1.75] text-zinc-700 dark:text-zinc-300 max-w-3xl"
          >
            {DEVELOPER_PROFILE.bio}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg text-sm font-semibold bg-zinc-950 text-white hover:bg-[#0891B2] dark:bg-[#22D3EE] dark:text-[#09090B] dark:hover:bg-[#06B6D4] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
            >
              <span>프로젝트 보기</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="#skills"
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg text-sm font-medium border border-zinc-300 dark:border-white/15 bg-white/75 dark:bg-white/[0.02] text-zinc-800 dark:text-zinc-200 hover:border-zinc-950 dark:hover:border-white/40 hover:bg-zinc-100/80 dark:hover:bg-white/5 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
            >
              <Terminal className="w-4 h-4 text-[#0891B2] dark:text-[#22D3EE]" />
              <span>Technical Arsenal 탐색</span>
            </a>

            <a
              href="/resume.pdf"
              download="차백호_이력서.pdf"
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg text-sm font-medium border border-zinc-300 dark:border-zinc-700 bg-white/75 dark:bg-[#141418]/75 text-zinc-800 dark:text-zinc-200 hover:border-[#0891B2] hover:text-[#0891B2] dark:hover:border-[#22D3EE] dark:hover:text-[#22D3EE] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
            >
              <span>이력서 PDF</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Full-Width 4-Column Quantitative Proof Strip */}
        <div className="mt-14 lg:mt-16 pt-8 border-t border-zinc-200/80 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {DEVELOPER_PROFILE.keyMetrics.map((metric) => (
            <div key={metric.label} className="space-y-1.5">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono-tabular text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {metric.value}
                </span>
                <span className="text-sm font-semibold text-[#0891B2] dark:text-[#22D3EE]">
                  {metric.label}
                </span>
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Section Divider Ribbon */}
      <div className="relative z-10 border-t border-zinc-200/80 dark:border-white/10 bg-zinc-100/80 dark:bg-white/[0.02] overflow-hidden py-3">
        <div className="animate-marquee text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, idx) => (
            <span key={idx} className="inline-flex items-center gap-6 px-6">
              <span>Python · LLM · RAG · LangGraph</span>
              <span aria-hidden="true">·</span>
              <span>End-to-End AI Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Frontend · Backend · Deployment</span>
              <span aria-hidden="true">·</span>
              <span>Observability & Reliability</span>
              <span aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}