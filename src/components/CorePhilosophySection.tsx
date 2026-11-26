import { CORE_TRAITS, EDUCATION_EXPERIENCE } from '../data/portfolioData';

export default function CorePhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-16 lg:py-24 border-b border-zinc-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Sticky Editorial Intro + Education & Experience */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-medium text-[#0891B2] dark:text-[#22D3EE]">
                Education & Experience
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                실전 교육과 현장 경험으로 다진 문제 해결 역량
              </h2>
              <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                AI 심화 과정에서의 모델 실험부터 수자원공사 드론 관제, 이커머스 UX 개선까지 데이터와 사용자를 연결해 온 기록입니다.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-white/10 space-y-5">
              {EDUCATION_EXPERIENCE.map((item) => (
                <div
                  key={item.id}
                  className="space-y-2 pb-5 border-b border-zinc-200/70 dark:border-white/10 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                      {item.type}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-tabular">{item.period}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#0891B2] dark:text-[#22D3EE] font-medium">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-zinc-950 dark:text-zinc-100 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {item.organization}
                  </p>
                  <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="font-mono-tabular text-[11px] text-zinc-500 dark:text-zinc-500 pt-0.5">
                    {item.skills.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 Core Engineering Traits */}
          <div className="lg:col-span-7 divide-y divide-zinc-200 dark:divide-white/10 border-t border-b border-zinc-200 dark:border-white/10 self-start">
            {CORE_TRAITS.map((trait) => (
              <article
                key={trait.index}
                className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start"
              >
                <div className="sm:col-span-4 flex items-baseline gap-3">
                  <span className="font-serif-editorial text-2xl italic text-[#0891B2] dark:text-[#22D3EE] tabular-nums">
                    {trait.index}.
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                      {trait.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {trait.englishLabel}
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-8 space-y-2">
                  <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {trait.headline}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {trait.description}
                  </p>
                  <p className="text-xs font-medium text-[#0891B2] dark:text-[#22D3EE] pt-1 font-mono-tabular">
                    검증 성과 · {trait.proofMetric}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
