import { DEVELOPER_PROFILE } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            {DEVELOPER_PROFILE.brandWordmark} · {DEVELOPER_PROFILE.name} ({DEVELOPER_PROFILE.englishName})
          </span>
          <span aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href="#projects"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            프로젝트
          </a>
          <a
            href="#postmortem"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            포스트모템
          </a>
          <a
            href="#skills"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            Technical Arsenal
          </a>
          <a
            href={DEVELOPER_PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${DEVELOPER_PROFILE.email}`}
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
