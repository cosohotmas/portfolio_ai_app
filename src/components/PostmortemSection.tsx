import { useState } from 'react';
import { Code2, Play, RotateCcw } from 'lucide-react';
import { LOG_PRESETS, LogPreset, POSTMORTEMS } from '../data/portfolioData';

interface CustomAnalysisResult {
  category: string;
  hiddenClue: string;
  rootCause: string;
  guardCode: string;
  uxStrategy: string;
  preventionMetric: string;
}

function analyzeCustomLog(input: string): CustomAnalysisResult {
  const normalized = input.toLowerCase();

  const matchingPreset = LOG_PRESETS.find((preset) => {
    if (preset.id === 'preset-race') {
      return normalized.includes('er_dup_entry') || normalized.includes('duplicate entry') || normalized.includes('max(lot_no)') || normalized.includes('race');
    }
    if (preset.id === 'preset-slow') {
      return normalized.includes('slow query') || normalized.includes('full table scan') || normalized.includes('seq scan') || normalized.includes('n+1') || normalized.includes('504');
    }
    if (preset.id === 'preset-jwt') {
      return normalized.includes('401') || normalized.includes('jwt') || normalized.includes('unauthorized') || normalized.includes('token expired');
    }
    return false;
  });

  if (matchingPreset) {
    return {
      category: matchingPreset.category,
      hiddenClue: matchingPreset.hiddenClue,
      rootCause: matchingPreset.rootCause,
      guardCode: matchingPreset.guardCode,
      uxStrategy: matchingPreset.uxStrategy,
      preventionMetric: matchingPreset.preventionMetric,
    };
  }

  return {
    category: 'General Diagnostics',
    hiddenClue: '스택 트레이스의 최초 발생 지점(Origin Frame)과 선행 경고 로그 간의 타임스탬프 상관관계 확인 필요',
    rootCause: '외부 요청 타임아웃, 미처리 예외 전파 또는 스키마 검증 누락으로 인한 런타임 중단 가능성',
    guardCode: '요청 경계(Boundary)에서 Pydantic/Zod 스키마 검증 + 지수 백오프 재시도 및 명시적 폴백 응답(503/Retry) 적용',
    uxStrategy: '원인 없는 빈 화면이나 강제 이탈 대신 사용자 입력 상태를 보존하고 안전한 재시도 안내를 제공합니다.',
    preventionMetric: '구조화 로그(trace_id · latency_ms · status_code) 수집 및 p95 에러율 알람 임계치 설정',
  };
}

export default function PostmortemSection() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(POSTMORTEMS[0].id);
  const [codeTab, setCodeTab] = useState<'after' | 'before'>('after');

  const [selectedPreset, setSelectedPreset] = useState<LogPreset>(LOG_PRESETS[0]);
  const [logInput, setLogInput] = useState<string>(LOG_PRESETS[0].log);
  const [analysisResult, setAnalysisResult] = useState<CustomAnalysisResult>(() =>
    analyzeCustomLog(LOG_PRESETS[0].log)
  );
  const [inputError, setInputError] = useState<string>('');

  const activeCase = POSTMORTEMS.find((c) => c.id === selectedCaseId) ?? POSTMORTEMS[0];

  const handleSelectPreset = (preset: LogPreset) => {
    setSelectedPreset(preset);
    setLogInput(preset.log);
    setInputError('');
    setAnalysisResult({
      category: preset.category,
      hiddenClue: preset.hiddenClue,
      rootCause: preset.rootCause,
      guardCode: preset.guardCode,
      uxStrategy: preset.uxStrategy,
      preventionMetric: preset.preventionMetric,
    });
  };

  const handleRunAnalysis = () => {
    if (!logInput.trim()) {
      setInputError('분석할 로그 텍스트를 입력하거나 상단의 장애 Preset을 선택해 주세요.');
      return;
    }
    setInputError('');
    setAnalysisResult(analyzeCustomLog(logInput));
  };

  const handleResetLog = () => {
    handleSelectPreset(LOG_PRESETS[0]);
  };

  return (
    <section
      id="postmortem"
      className="py-16 lg:py-24 border-b border-zinc-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Part 1: 4 Real Root-Cause Postmortem Case Studies */}
        <div>
          <div className="max-w-2xl space-y-2 mb-10">
            <p className="text-xs font-medium text-[#0891B2] dark:text-[#22D3EE]">
              Root-Cause Postmortems
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              임시 조치 없이 장애의 뿌리를 제거한 기록
            </h2>
            <p className="text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-400">
              로그 단서 포착부터 실행계획 분석, 동시성 가드, 인터셉터 설계까지 실제 현장에서 검증한 개선 사례입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Case Selector List */}
            <div className="lg:col-span-5 divide-y divide-zinc-200 dark:divide-white/10 border-t border-b border-zinc-200 dark:border-white/10">
              {POSTMORTEMS.map((item) => {
                const isActive = item.id === activeCase.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedCaseId(item.id);
                      setCodeTab('after');
                    }}
                    className={`w-full text-left py-5 px-4 transition-colors duration-150 cursor-pointer flex flex-col gap-1.5 ${
                      isActive
                        ? 'bg-zinc-100/90 dark:bg-white/[0.05]'
                        : 'hover:bg-zinc-50 dark:hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span
                        className={`font-mono-tabular font-semibold ${
                          isActive
                            ? 'text-[#0891B2] dark:text-[#22D3EE]'
                            : 'text-zinc-500 dark:text-zinc-400'
                        }`}
                      >
                        {item.index} · {item.category}
                      </span>
                      <span className="font-mono-tabular text-zinc-500 dark:text-zinc-400">
                        {item.metricsAfter}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-zinc-100">
                      {item.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Active Case Detail & Before/After Code */}
            <div className="lg:col-span-7 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#141418] p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-zinc-200 dark:border-white/10">
                <div className="space-y-1">
                  <p className="text-xs font-mono-tabular text-[#0891B2] dark:text-[#22D3EE]">
                    {activeCase.index} · {activeCase.category}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-zinc-50">
                    {activeCase.title}
                  </h3>
                </div>
                <div className="text-left sm:text-right space-y-0.5">
                  <p className="font-mono-tabular text-xs text-zinc-500 dark:text-zinc-400 line-through">
                    Before: {activeCase.metricsBefore}
                  </p>
                  <p className="font-mono-tabular text-sm font-bold text-[#0891B2] dark:text-[#22D3EE]">
                    After: {activeCase.metricsAfter}
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                <div className="space-y-1">
                  <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    현상 (Symptom)
                  </dt>
                  <dd className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
                    {activeCase.symptom}
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    포착한 로그 단서 (Log Clue)
                  </dt>
                  <dd className="text-zinc-800 dark:text-zinc-200 leading-relaxed font-mono-tabular text-xs">
                    {activeCase.logClue}
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    근본 원인 (Root Cause)
                  </dt>
                  <dd className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
                    {activeCase.rootCause}
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    개선 성과 (Impact)
                  </dt>
                  <dd className="text-zinc-900 dark:text-zinc-100 font-medium leading-relaxed">
                    {activeCase.impact}
                  </dd>
                </div>
              </dl>

              {/* Code Diff Viewer */}
              <div className="rounded-xl border border-zinc-200 dark:border-white/10 overflow-hidden bg-[#111114] text-zinc-100">
                <div className="px-4 py-2.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-white/[0.03]">
                  <div className="flex items-center gap-2 text-xs font-mono-tabular text-zinc-400">
                    <Code2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                    <span>{activeCase.filename}</span>
                  </div>
                  <div className="flex items-center gap-1 p-0.5 rounded-lg bg-black/40 border border-white/10">
                    <button
                      type="button"
                      onClick={() => setCodeTab('before')}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        codeTab === 'before'
                          ? 'bg-zinc-700 text-white'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Before (원인)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCodeTab('after')}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        codeTab === 'after'
                          ? 'bg-[#22D3EE] text-[#09090B] font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      After (해결)
                    </button>
                  </div>
                </div>
                <pre className="p-4 text-xs leading-relaxed font-mono-tabular overflow-x-auto text-zinc-200">
                  <code>
                    {codeTab === 'after' ? activeCase.afterCode : activeCase.beforeCode}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Interactive Log Root-Cause Analyzer */}
        <div className="pt-12 border-t border-zinc-200 dark:border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-medium text-[#0891B2] dark:text-[#22D3EE]">
                Interactive Log Diagnostics
              </p>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                장애 로그 단서 추적 시뮬레이터
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                실제 프로젝트에서 겪었던 장애 로그 Preset을 선택하거나 스택 트레이스를 입력해, 어떤 단서로 근본 원인과 UX 수호 전략을 도출하는지 확인해보세요.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Log Input */}
            <div className="lg:col-span-6 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#141418] p-5 sm:p-6 flex flex-col gap-4">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  실제 장애 로그 Preset 선택
                </span>
                <div className="flex flex-wrap gap-2">
                  {LOG_PRESETS.map((preset) => {
                    const active = selectedPreset.id === preset.id && logInput === preset.log;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => handleSelectPreset(preset)}
                        className={`min-h-[36px] px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          active
                            ? 'border-[#0891B2] bg-[#0891B2]/10 text-[#0891B2] dark:border-[#22D3EE] dark:bg-[#22D3EE]/15 dark:text-[#22D3EE]'
                            : 'border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-white/25'
                        }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1.5 flex-1 flex flex-col">
                <label
                  htmlFor="log-trace-input"
                  className="text-xs font-semibold text-zinc-500 dark:text-zinc-400"
                >
                  시스템 에러 로그 / 스택 트레이스
                </label>
                <textarea
                  id="log-trace-input"
                  rows={7}
                  value={logInput}
                  onChange={(e) => {
                    setLogInput(e.target.value);
                    if (inputError) setInputError('');
                  }}
                  placeholder="분석할 에러 스택 트레이스나 Slow Query 로그를 붙여넣으세요..."
                  className="w-full flex-1 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-950 text-zinc-100 p-4 font-mono-tabular text-xs leading-relaxed focus:outline-none focus:border-[#22D3EE]"
                />
                {inputError && (
                  <p className="text-xs text-rose-500 font-medium pt-1">{inputError}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleRunAnalysis}
                  className="inline-flex items-center gap-2 min-h-[40px] px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-950 text-white hover:bg-[#0891B2] dark:bg-[#22D3EE] dark:text-[#09090B] dark:hover:bg-[#06B6D4] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>로그 근본 원인 추적 실행</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetLog}
                  className="inline-flex items-center gap-1.5 min-h-[40px] px-3 py-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>기본 로그로 초기화</span>
                </button>
              </div>
            </div>

            {/* Right Diagnosis Output */}
            <div className="lg:col-span-6 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#141418] p-5 sm:p-6 divide-y divide-zinc-200 dark:divide-white/10">
              <div className="pb-4 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  추적 진단 리포트
                </span>
                <span className="font-mono-tabular text-xs font-semibold text-[#0891B2] dark:text-[#22D3EE]">
                  {analysisResult.category}
                </span>
              </div>

              <div className="py-4 space-y-1">
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  01. 결정적 숨겨진 단서 (Hidden Clue)
                </p>
                <p className="text-sm font-medium text-zinc-950 dark:text-zinc-100 leading-relaxed">
                  {analysisResult.hiddenClue}
                </p>
              </div>

              <div className="py-4 space-y-1">
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  02. 근본 원인 분석 (Root Cause)
                </p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {analysisResult.rootCause}
                </p>
              </div>

              <div className="py-4 space-y-1">
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  03. 권장 가드 코드 (Guard Strategy)
                </p>
                <p className="font-mono-tabular text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed">
                  {analysisResult.guardCode}
                </p>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    04. 사용자 UX 수호 전략
                  </p>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {analysisResult.uxStrategy}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    05. 예방 모니터링 기준
                  </p>
                  <p className="font-mono-tabular text-xs text-[#0891B2] dark:text-[#22D3EE] leading-relaxed">
                    {analysisResult.preventionMetric}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
