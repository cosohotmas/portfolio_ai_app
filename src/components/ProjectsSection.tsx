import { useEffect, useState } from 'react';
import { ArrowUpRight, ExternalLink, Layers, X } from 'lucide-react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';

type FilterType = 'all' | ProjectCategory;

const FILTER_OPTIONS: { id: FilterType; label: string }[] = [
  { id: 'all', label: `전체 (${PROJECTS.length})` },
  {
    id: 'ai',
    label: `AI · LLM · 딥러닝 (${PROJECTS.filter((p) => p.category === 'ai').length})`,
  },
  {
    id: 'fullstack',
    label: `풀스택 · 관제 (${PROJECTS.filter((p) => p.category === 'fullstack').length})`,
  },
  {
    id: 'data',
    label: `NLP · 데이터 분석 (${PROJECTS.filter((p) => p.category === 'data').length})`,
  },
];

function ProjectCover({
  src,
  alt,
  fallbackTitle,
  contain = false,
  alignTop = false,
  zoomOnHover = true,
}: {
  src: string;
  alt: string;
  fallbackTitle: string;
  contain?: boolean;
  alignTop?: boolean;
  zoomOnHover?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-[#082f38]">
        <Layers className="w-8 h-8 text-[#22D3EE] mb-2" />
        <span className="text-sm font-semibold text-zinc-100">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`w-full h-full ${contain ? 'object-contain' : 'object-cover'} ${
        alignTop ? 'object-top' : 'object-center'
      } ${zoomOnHover ? 'transition-transform duration-300 group-hover:scale-[1.03]' : ''}`}
    />
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const openProjectModal = (project: ProjectItem) => {
    setActiveImageIndex(0);
    setSelectedProject(project);
  };

  useEffect(() => {
    if (!selectedProject) return;
    const galleryLength = selectedProject.gallery?.length ?? 0;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      } else if (galleryLength > 1 && e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % galleryLength);
      } else if (galleryLength > 1 && e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + galleryLength) % galleryLength);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-16 lg:py-24 border-b border-zinc-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Segmented Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-medium text-[#0891B2] dark:text-[#22D3EE]">
              Selected Works
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              AI 실험부터 실서비스 배포까지 완성한 프로젝트
            </h2>
            <p className="text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-400">
              카드를 클릭하면 아키텍처 설계 포인트, 검증 지표, 라이브 데모 및 GitHub 저장소를 확인할 수 있습니다.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="프로젝트 카테고리 필터"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-zinc-200/70 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 self-start"
          >
            {FILTER_OPTIONS.map((option) => {
              const active = filter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(option.id)}
                  className={`min-h-[36px] px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white text-zinc-950 shadow-sm dark:bg-[#22D3EE] dark:text-[#09090B] dark:font-semibold'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isHeroFeature = filter === 'all' && index === 0;
            return (
              <article
                key={project.id}
                className={`group rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#141418] overflow-hidden flex flex-col justify-between transition-colors duration-200 hover:border-zinc-400 dark:hover:border-white/25 ${
                  isHeroFeature ? 'md:col-span-2' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => openProjectModal(project)}
                  className="text-left flex-1 flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
                >
                  <div
                    className={`relative w-full overflow-hidden bg-zinc-900 ${
                      isHeroFeature ? 'aspect-[16/9] lg:aspect-[21/10]' : 'aspect-[4/3]'
                    }`}
                  >
                    <ProjectCover
                      src={project.coverImage}
                      alt={project.coverAlt}
                      fallbackTitle={project.shortTitle}
                      alignTop={Boolean(project.gallery?.length)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-3">
                      <span className="text-xs font-medium text-zinc-200">
                        {project.categoryLabel} · {project.period}
                      </span>
                      <span className="text-xs font-medium text-[#67E8F9] whitespace-nowrap shrink-0">
                        {project.gallery?.length
                          ? `실제 화면 ${project.gallery.length}장 보기 →`
                          : '상세 아키텍처 보기 →'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-2.5">
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {project.role}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 group-hover:text-[#0891B2] dark:group-hover:text-[#22D3EE] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-200/80 dark:border-white/10 space-y-2">
                      <p className="text-xs font-medium text-zinc-900 dark:text-zinc-200">
                        {project.keyOutcome}
                      </p>
                      <p className="font-mono-tabular text-[12px] text-zinc-500 dark:text-zinc-400 truncate">
                        {project.techStack.join(' · ')}
                      </p>
                    </div>
                  </div>
                </button>

                <div className="px-6 py-3.5 border-t border-zinc-200/80 dark:border-white/10 bg-zinc-50/70 dark:bg-white/[0.02] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs font-medium">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#0891B2] dark:text-[#22D3EE] hover:underline whitespace-nowrap shrink-0"
                      >
                        <span>라이브 데모</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => openProjectModal(project)}
                    className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-[#0891B2] dark:hover:text-[#22D3EE] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    세부 내역 열기
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-200 dark:border-white/15 bg-white dark:bg-[#141418] text-zinc-950 dark:text-zinc-50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
              <div className="border-b border-zinc-200 dark:border-white/10 bg-zinc-950">
                <div className="relative aspect-[16/9] w-full bg-zinc-950 overflow-hidden">
                  <ProjectCover
                    src={selectedProject.gallery[activeImageIndex]?.url ?? selectedProject.coverImage}
                    alt={selectedProject.gallery[activeImageIndex]?.label ?? selectedProject.coverAlt}
                    fallbackTitle={selectedProject.shortTitle}
                    contain
                    zoomOnHover={false}
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    aria-label="모달 닫기"
                    className="absolute top-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/70 border border-white/15 text-white hover:bg-black transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Screenshot Switcher Bar */}
                <div className="px-4 sm:px-6 py-3.5 bg-[#0e1015] border-t border-white/10 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    {selectedProject.gallery.map((shot, idx) => {
                      const isActive = idx === activeImageIndex;
                      return (
                        <button
                          key={shot.url}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            isActive
                              ? 'bg-[#22D3EE] text-[#09090B] font-semibold'
                              : 'bg-white/[0.06] text-zinc-300 hover:bg-white/[0.12] hover:text-white'
                          }`}
                        >
                          {shot.label}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs leading-relaxed text-zinc-300">
                    {selectedProject.gallery[activeImageIndex]?.caption}
                  </p>
                </div>

                <div className="px-6 sm:px-8 py-5 bg-white dark:bg-[#141418] border-t border-zinc-200 dark:border-white/10">
                  <p className="text-xs font-medium text-[#0891B2] dark:text-[#22D3EE]">
                    {selectedProject.categoryLabel} · {selectedProject.role} · {selectedProject.period}
                  </p>
                  <h3
                    id="project-modal-title"
                    className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white mt-1"
                  >
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
            ) : (
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-zinc-900 overflow-hidden">
                <ProjectCover
                  src={selectedProject.coverImage}
                  alt={selectedProject.coverAlt}
                  fallbackTitle={selectedProject.shortTitle}
                  zoomOnHover={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="모달 닫기"
                  className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/65 text-white hover:bg-black transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-xs font-medium text-[#67E8F9]">
                    {selectedProject.categoryLabel} · {selectedProject.role} · {selectedProject.period}
                  </p>
                  <h3
                    id="project-modal-title"
                    className="text-xl sm:text-2xl font-bold text-white mt-1"
                  >
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
            )}

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                {selectedProject.summary}
              </p>

              <div className="p-4 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.03] space-y-1">
                <span className="text-xs font-medium text-[#0891B2] dark:text-[#22D3EE]">
                  핵심 검증 성과
                </span>
                <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                  {selectedProject.keyOutcome}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-zinc-950 dark:text-zinc-100">
                  아키텍처 및 문제 해결 하이라이트
                </h4>
                <ul className="space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                  {selectedProject.architectureHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="font-mono-tabular text-xs text-[#0891B2] dark:text-[#22D3EE] mt-0.5 shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.logObservabilityUsed.length > 0 && (
                <div className="pt-4 border-t border-zinc-200 dark:border-white/10 space-y-1.5">
                  <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    활용한 로그 · 관측성 지표
                  </h4>
                  <p className="text-sm text-zinc-800 dark:text-zinc-200">
                    {selectedProject.logObservabilityUsed.join(' · ')}
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-zinc-200 dark:border-white/10 space-y-1.5">
                <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  기술 스택
                </h4>
                <p className="font-mono-tabular text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                  {selectedProject.techStack.join(' · ')}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-lg border border-zinc-300 dark:border-white/15 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>GitHub 저장소</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-lg bg-zinc-950 text-white hover:bg-[#0891B2] dark:bg-[#22D3EE] dark:text-[#09090B] dark:hover:bg-[#06B6D4] text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>라이브 서비스 열기</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="min-h-[40px] px-4 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white cursor-pointer"
                >
                  닫기 (ESC)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
