import { FormEvent, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Copy,
  Database,
  GitBranch,
  Layers,
  Mail,
  Send,
  Terminal,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ARSENAL_TOOLS,
  ArsenalCategory,
  ArsenalTool,
  DEVELOPER_PROFILE,
} from '../data/portfolioData';

const TOOL_ICON_MAP: Record<string, typeof Terminal> = {
  'tool-python-fastapi': Terminal,
  'tool-llm-rag': BrainCircuit,
  'tool-langgraph': GitBranch,
  'tool-pytorch-ml': Layers,
  'tool-react-ts': Code2,
  'tool-api-data': Database,
  'tool-observability': Activity,
  'tool-deploy': Cloud,
};

const ARSENAL_TABS: { id: ArsenalCategory; label: string }[] = [
  { id: 'all', label: '전체 역량' },
  { id: 'ai', label: 'AI · LLM · RAG' },
  { id: 'backend', label: 'Full-Stack · API' },
  { id: 'observability', label: 'Observability · 배포' },
];

export default function SkillsAndContactSection() {
  const [activeCategory, setActiveCategory] = useState<ArsenalCategory>('all');
  const [selectedToolId, setSelectedToolId] = useState<string>(ARSENAL_TOOLS[0].id);

  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formNotice, setFormNotice] = useState('');

  const filteredTools =
    activeCategory === 'all'
      ? ARSENAL_TOOLS
      : ARSENAL_TOOLS.filter((tool) => tool.category === activeCategory);

  const activeTool: ArsenalTool =
    filteredTools.find((t) => t.id === selectedToolId) ?? filteredTools[0];

  const handleCategoryChange = (cat: ArsenalCategory) => {
    setActiveCategory(cat);
    const nextList =
      cat === 'all' ? ARSENAL_TOOLS : ARSENAL_TOOLS.filter((t) => t.category === cat);
    if (nextList.length > 0 && !nextList.some((t) => t.id === selectedToolId)) {
      setSelectedToolId(nextList[0].id);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleComposeMail = (e: FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject.trim() || `[포트폴리오 문의] ${senderName.trim() || '방문자'}님으로부터의 메시지`
    );
    const mailBody = encodeURIComponent(
      `안녕하세요, 차백호 AI 엔지니어님.\n\n보낸 분: ${senderName.trim() || '미기재'}\n\n${message.trim()}`
    );
    window.location.href = `mailto:${DEVELOPER_PROFILE.email}?subject=${mailSubject}&body=${mailBody}`;
    setFormNotice('기본 메일 앱으로 작성 화면을 연결했습니다.');
  };

  return (
    <>
      {/* Dynamic Technical Arsenal */}
      <section
        id="skills"
        className="relative py-16 lg:py-24 border-b border-zinc-200 dark:border-white/10 overflow-hidden"
      >
        {/* Subtle Ambient Cyan Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[220px] rounded-full bg-[#22D3EE]/[0.07] blur-[110px]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6 mb-12">
            <div className="max-w-2xl space-y-3 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#0891B2]/30 bg-[#0891B2]/10 text-[#0891B2] dark:border-[#22D3EE]/35 dark:bg-[#22D3EE]/10 dark:text-[#22D3EE] dark:shadow-[0_0_18px_rgba(34,211,238,0.16)] text-[11px] font-mono-tabular font-semibold tracking-wider">
                <span>TECHNICAL ARSENAL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                보이지 않는 곳을 다루는 기술 역량
              </h2>
              <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                백엔드 아키텍처부터 관찰도구(Observability), 그리고 서버리스/컨테이너 배포까지 체계적인 도구 모음을 갖추고 있습니다.
              </p>
            </div>

            {/* Centered Animated Segmented Category Filter Below Subtitle */}
            <div
              role="tablist"
              aria-label="기술 역량 카테고리"
              className="relative inline-flex flex-wrap items-center justify-center gap-1 p-1 rounded-xl bg-zinc-200/70 dark:bg-[#121215] border border-zinc-200 dark:border-white/10"
            >
              {ARSENAL_TABS.map((tab) => {
                const isSelected = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleCategoryChange(tab.id)}
                    className={`relative min-h-[36px] px-4 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'text-white dark:text-[#09090B] font-semibold'
                        : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-[#22D3EE]'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="arsenal-active-tab"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-lg bg-[#0891B2] hover:bg-[#0E7490] dark:bg-[#22D3EE] dark:hover:bg-[#06B6D4] shadow-sm"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Split Inspector: Left 2-Col Card Grid (~67%) + Right Detail Panel (~33%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Dynamic 2-Column Tool Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredTools.map((tool) => {
                  const isActive = tool.id === activeTool.id;
                  const IconComponent = TOOL_ICON_MAP[tool.id] ?? Terminal;
                  return (
                    <motion.button
                      layout
                      key={tool.id}
                      type="button"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -2 }}
                      onClick={() => setSelectedToolId(tool.id)}
                      className={`group text-left p-5 rounded-2xl border transition-all duration-150 cursor-pointer flex flex-col justify-between gap-5 ${
                        isActive
                          ? 'border-[#0891B2] dark:border-[#22D3EE] bg-white dark:bg-[#16161A] shadow-sm dark:shadow-[0_0_24px_rgba(34,211,238,0.18)]'
                          : 'border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-[#121215] hover:border-zinc-400 dark:hover:border-[#22D3EE]/40'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <span
                              className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border shrink-0 transition-colors ${
                                isActive
                                  ? 'border-[#0891B2]/40 bg-[#0891B2]/10 text-[#0891B2] dark:border-[#22D3EE]/45 dark:bg-[#22D3EE]/15 dark:text-[#22D3EE]'
                                  : 'border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-[#1B1B20] text-zinc-600 dark:text-zinc-400 group-hover:text-[#0891B2] dark:group-hover:text-[#22D3EE]'
                              }`}
                            >
                              <IconComponent className="w-4 h-4" />
                            </span>
                            <div className="min-w-0">
                              <span className="font-mono-tabular text-[11px] font-medium text-[#0891B2] dark:text-[#22D3EE] block truncate">
                                {tool.categoryLabel}
                              </span>
                              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block truncate">
                                {tool.focus}
                              </span>
                            </div>
                          </div>

                          <ChevronRight
                            className={`w-4 h-4 shrink-0 mt-1 transition-transform duration-150 ${
                              isActive
                                ? 'text-[#0891B2] dark:text-[#22D3EE] translate-x-0.5'
                                : 'text-zinc-400 group-hover:text-[#0891B2] dark:group-hover:text-[#22D3EE]'
                            }`}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-50">
                            {tool.name}
                          </h3>
                          <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">
                            {tool.summary}
                          </p>
                        </div>
                      </div>

                      {/* Thin Cyan Proficiency Bar */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-[11px] font-mono-tabular">
                          <span className="text-zinc-500 dark:text-zinc-400">{tool.focus}</span>
                          <span className="font-semibold text-[#0891B2] dark:text-[#22D3EE]">
                            숙련도 {tool.proficiency}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-white/10 overflow-hidden">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: tool.proficiency / 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{ transformOrigin: 'left' }}
                            className="h-full w-full rounded-full bg-[#0891B2] dark:bg-[#22D3EE]"
                          />
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Right Animated Arsenal Detail Inspector (~33%) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTool.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-zinc-200 dark:border-[#22D3EE]/30 bg-white dark:bg-[#16161A] dark:shadow-[0_0_24px_rgba(34,211,238,0.1)] p-6 space-y-5"
                >
                  <div className="space-y-2 pb-5 border-b border-zinc-200 dark:border-white/10">
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <span className="font-mono-tabular font-medium text-[#0891B2] dark:text-[#22D3EE] truncate">
                        {activeTool.categoryLabel} · {activeTool.focus}
                      </span>
                      <span className="font-mono-tabular font-semibold text-[#0891B2] dark:text-[#22D3EE] whitespace-nowrap shrink-0">
                        숙련도 {activeTool.proficiency}%
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 leading-snug">
                      {activeTool.name}
                    </h3>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                      아키텍처 운용 방식
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                      {activeTool.summary}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-[#0891B2]/25 bg-[#0891B2]/[0.05] dark:border-[#22D3EE]/30 dark:bg-[#22D3EE]/[0.07] space-y-1.5">
                    <h4 className="text-xs font-semibold text-[#0891B2] dark:text-[#22D3EE]">
                      실무 · 프로젝트 적용 인사이트
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                      {activeTool.capabilityNote}
                    </p>
                  </div>

                  <div className="pt-1 space-y-2">
                    <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                      연관 프로젝트
                    </h4>
                    <ul className="space-y-1.5">
                      {activeTool.appliedIn.map((proj) => (
                        <li
                          key={proj}
                          className="flex items-center gap-2 font-mono-tabular text-xs text-zinc-900 dark:text-zinc-100"
                        >
                          <span
                            aria-hidden="true"
                            className="w-1.5 h-1.5 rounded-full bg-[#0891B2] dark:bg-[#22D3EE] shrink-0"
                          />
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Direct Collaboration Section */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-medium text-[#0891B2] dark:text-[#22D3EE]">
                  Contact
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  함께 AI 서비스를 만들어갈 기회를 기다립니다
                </h2>
                <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Python · LLM · RAG · LangGraph 기반 AI 엔지니어링 및 풀스택 웹 개발 협업 문의는 아래 이메일이나 GitHub로 편하게 연락해 주세요.
                </p>
              </div>

              <div className="divide-y divide-zinc-200 dark:divide-white/10 border-t border-b border-zinc-200 dark:border-white/10">
                <div className="py-4 flex items-center justify-between gap-4">
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 block">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${DEVELOPER_PROFILE.email}`}
                      className="text-sm sm:text-base font-semibold text-zinc-950 dark:text-zinc-100 hover:text-[#0891B2] dark:hover:text-[#22D3EE] transition-colors truncate block"
                    >
                      {DEVELOPER_PROFILE.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 min-h-[38px] px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-white/10 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#0891B2] dark:text-[#22D3EE]" />
                        <span>복사됨</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>주소 복사</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="py-4 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 block">
                      GitHub Profile
                    </span>
                    <a
                      href={DEVELOPER_PROFILE.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-zinc-950 dark:text-zinc-100 hover:text-[#0891B2] dark:hover:text-[#22D3EE] transition-colors"
                    >
                      {DEVELOPER_PROFILE.githubHandle}
                    </a>
                  </div>
                  <a
                    href={DEVELOPER_PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-[38px] px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-white/10 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>방문하기</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Quick Inquiry Form */}
            <form
              onSubmit={handleComposeMail}
              className="lg:col-span-7 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#141418] p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-white/10">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-zinc-50">
                    빠른 메일 작성
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    입력한 내용으로 기본 메일 클라이언트를 바로 열어드립니다.
                  </p>
                </div>
                <Mail className="w-5 h-5 text-[#0891B2] dark:text-[#22D3EE] shrink-0" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold text-zinc-600 dark:text-zinc-400"
                  >
                    성함 또는 소속
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="예: 김OO / OO팀"
                    className="w-full min-h-[42px] px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#0D0D10] text-sm text-zinc-950 dark:text-zinc-100 focus:outline-none focus:border-[#22D3EE]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-semibold text-zinc-600 dark:text-zinc-400"
                  >
                    문의 제목
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="예: AI 엔지니어 / LLM 서비스 협업 문의"
                    className="w-full min-h-[42px] px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#0D0D10] text-sm text-zinc-950 dark:text-zinc-100 focus:outline-none focus:border-[#22D3EE]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold text-zinc-600 dark:text-zinc-400"
                >
                  메시지 내용
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="협업 내용이나 전달하실 말씀을 자유롭게 작성해 주세요."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#0D0D10] text-sm text-zinc-950 dark:text-zinc-100 leading-relaxed focus:outline-none focus:border-[#22D3EE]"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 min-h-[42px] px-5 py-2.5 rounded-lg text-sm font-semibold bg-zinc-950 text-white hover:bg-[#0891B2] dark:bg-[#22D3EE] dark:text-[#09090B] dark:hover:bg-[#06B6D4] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>메일 앱으로 보내기</span>
                </button>
                {formNotice && (
                  <p className="text-xs font-medium text-[#0891B2] dark:text-[#22D3EE]">
                    {formNotice}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
