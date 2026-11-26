export type ProjectCategory = 'ai' | 'fullstack' | 'data';

export interface ProjectGalleryItem {
  url: string;
  label: string;
  caption: string;
}

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  categoryLabel: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  role: string;
  period: string;
  summary: string;
  architectureHighlights: string[];
  logObservabilityUsed: string[];
  keyOutcome: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  coverImage: string;
  coverAlt: string;
  gallery?: ProjectGalleryItem[];
  featured?: boolean;
}

export interface CoreTrait {
  index: string;
  title: string;
  englishLabel: string;
  headline: string;
  description: string;
  proofMetric: string;
}

export interface EducationExperienceItem {
  id: string;
  type: '교육' | '경력';
  organization: string;
  title: string;
  period: string;
  status: string;
  description: string;
  skills: string[];
  linkUrl?: string;
}

export interface PostmortemCase {
  id: string;
  index: string;
  title: string;
  category: string;
  symptom: string;
  logClue: string;
  rootCause: string;
  solution: string;
  impact: string;
  metricsBefore: string;
  metricsAfter: string;
  techStack: string[];
  filename: string;
  beforeCode: string;
  afterCode: string;
}

export interface LogPreset {
  id: string;
  label: string;
  category: 'RAG & LLM' | 'LangGraph Flow' | 'Data & Inference';
  log: string;
  hiddenClue: string;
  rootCause: string;
  guardCode: string;
  uxStrategy: string;
  preventionMetric: string;
}

export type ArsenalCategory = 'all' | 'ai' | 'backend' | 'observability';

export interface ArsenalTool {
  id: string;
  category: Exclude<ArsenalCategory, 'all'>;
  categoryLabel: string;
  name: string;
  focus: string;
  summary: string;
  appliedIn: string[];
  capabilityNote: string;
  proficiency: number;
}

export const ROLE_TITLE_PRESETS = {
  fullstack: 'AI Full-Stack Engineer · End-to-End Product Builder',
  application: 'AI Application Engineer · LLM & RAG Systems',
} as const;

export type RoleTitleKey = keyof typeof ROLE_TITLE_PRESETS;

export const ACTIVE_ROLE_TITLE: RoleTitleKey = 'fullstack';

export const DEVELOPER_PROFILE = {
  brandWordmark: 'ㅊBackHo',
  name: '차백호',
  englishName: 'Cha BackHo',
  roleTitle: ROLE_TITLE_PRESETS[ACTIVE_ROLE_TITLE],
  location: 'Busan, South Korea',
  headlineLead: '안녕하세요. 차백호입니다.',
  headlineHighlight: '프론트엔드, 백엔드, 배포까지 서비스 전체 흐름을 책임지고 구현합니다.',
  bio: '단순한 구현에 그치지 않고 Python, LLM, RAG, LangGraph를 서비스 아키텍처에 유기적으로 결합합니다. 실험적인 AI 모델을 실제 사용자가 체감할 수 있는 안정적인 웹 프로덕트로 완성하고 배포까지 끝까지 책임집니다.',
  coreStackSummary: ['Python', 'LLM', 'RAG', 'LangGraph', 'PyTorch', 'React / TypeScript'],
  email: 'cosohotmas@gmail.com',
  githubUrl: 'https://github.com/cosohotmas',
  githubHandle: 'github.com/cosohotmas',
  keyMetrics: [
    {
      value: 'Gemini · RAG',
      label: 'AI 에이전트 · 지식 그래프',
      detail: 'RAG 공식 출처 검증 · LangGraph 상태 오케스트레이션',
    },
    {
      value: 'End-to-End',
      label: '기획 · 프론트 · 백엔드 · 배포',
      detail: 'React/TypeScript · FastAPI · Firestore · Vercel 운영',
    },
    {
      value: '15+',
      label: 'AI · 데이터 · 웹 프로젝트',
      detail: '집밖은여행 · OpenNadeuli · CLIP 검색 · CNN 등',
    },
    {
      value: '1위 달성',
      label: '사용자 중심 UI · SEO 최적화',
      detail: '데이터 기반 UX 개선으로 카테고리 10위 → 1위 달성',
    },
  ],
};

export const CORE_TRAITS: CoreTrait[] = [
  {
    index: '01',
    title: 'Experimental AI',
    englishLabel: '실험정신',
    headline: '실생활 문제를 Python · LLM · RAG로 풀어내는 실험가',
    description:
      '아이디어를 가설로만 남기지 않고 PyTorch, HuggingFace, LangGraph로 빠르게 프로토타이핑하여 실제 동작하는 AI 서비스로 검증합니다.',
    proofMetric: 'CNN 손글씨 분류 · 자전거 수요 예측 · CLIP 패션 검색 등 다수 구현',
  },
  {
    index: '02',
    title: 'Agentic Workflow',
    englishLabel: 'LangGraph & RAG',
    headline: '단순 프롬프트를 넘어 상태 기반 에이전트 흐름 설계',
    description:
      '문서 임베딩 검색(RAG)과 LangGraph의 조건부 분기·재시도 루프를 결합해 환각을 줄이고 일관된 응답 품질을 유지합니다.',
    proofMetric: '문맥 근거 기반 검색 및 다단계 추론 파이프라인 구축',
  },
  {
    index: '03',
    title: 'End-to-End Flow',
    englishLabel: '전체 흐름 책임',
    headline: '프론트엔드부터 백엔드, 배포까지 끊김 없는 제품 완성도',
    description:
      'AI 모델만 따로 존재하는 것이 아니라 사용자가 실제로 만지는 UI, API 서버, 데이터 파이프라인, 클라우드 배포까지 한 흐름으로 엮어냅니다.',
    proofMetric: 'OpenNadeuli · AI-Titude · Streamlit 딥러닝 웹 서비스 직접 배포',
  },
  {
    index: '04',
    title: 'User-Centric UX',
    englishLabel: '사용자 중심 & 가치전달',
    headline: '기술의 복잡함은 숨기고 사용자에게는 명쾌한 경험을 전달',
    description:
      '데이터 전처리·SEO·UI 일관성 개선 경험을 바탕으로 사용자가 이탈하지 않고 직관적으로 가치를 얻는 인터페이스를 설계합니다.',
    proofMetric: '이커머스 UI·SEO 최적화로 카테고리 1위 달성 · 무장애 여행 플래너 구현',
  },
  {
    index: '05',
    title: 'Relentless Grit',
    englishLabel: '끈기와 협업',
    headline: '통계·데이터 병목을 끝까지 파고들어 해결하는 집요함',
    description:
      '전처리 단계의 통계적 난관부터 모델 추론 속도, API 연동 문제까지 시각화하고 반복 검증하며 팀과 투명하게 소통합니다.',
    proofMetric: 'Distil-Whisper 고속 STT 실험 및 K-water 드론 시계열 시스템 협업 구축',
  },
];

export const EDUCATION_EXPERIENCE: EducationExperienceItem[] = [
  {
    id: 'ai-engineer-07',
    type: '교육',
    organization: '코리아IT아카데미 (이스트캠프)',
    title: 'AI 엔지니어 / AI 휴먼 심화 과정 (7기)',
    period: '2026.06 – 2026.11',
    status: '수료 / 심화',
    description:
      'Python 기초부터 Pandas/Seaborn 대용량 데이터 분석, PyTorch 딥러닝(CNN/시계열), LLM·RAG·LangGraph 기반 AI 서비스 개발까지 전 과정을 집중 수행했습니다.',
    skills: ['Python', 'LLM', 'RAG', 'LangGraph', 'PyTorch', 'Pandas'],
  },
  {
    id: 'kwater-drone',
    type: '경력',
    organization: '한국수자원공사 (K-water) 협력 프로젝트',
    title: '드론 기반 댐 시설물 촬영 및 시계열 관제 시스템 개발',
    period: '2021.09 – 2022.09',
    status: '프로젝트 수행',
    description:
      '국내 기술로 개발된 드론을 활용해 댐 시설물을 촬영하고, 카카오맵 API와 연동하여 시간 흐름에 따른 시설물 상태를 추적하는 시계열 관리 시스템을 구축했습니다.',
    skills: ['Drone Data', 'KakaoMap API', 'Time-Series', 'Web System'],
  },
  {
    id: 'ecommerce-seo-1st',
    type: '경력',
    organization: '자동차용품 브랜드 이커머스',
    title: '브랜드 쇼핑몰 UI 설계 및 SEO 최적화 (카테고리 1위 달성)',
    period: '2010.01 – 2011.02',
    status: '성과 달성',
    description:
      '11번가·옥션 등 오픈마켓 및 자사몰의 일관된 Form UI 설계와 검색엔진 최적화(C-Rank, 페이지랭크)를 적용해 1년 만에 카테고리 10위에서 1위로 도약시켰습니다.',
    skills: ['UI Design', 'SEO', 'Conversion Optimization', 'User Retention'],
  },
  {
    id: 'ai-preprocessing-note',
    type: '교육',
    organization: '데이터 전처리 및 통계 학습 회고',
    title: '통계적 데이터 정제와 AI 학습 품질 개선',
    period: '2026.07 – 2026.08',
    status: '핵심 역량화',
    description:
      '초기 회귀·표본 분포·유의성 검정 개념의 난관을 Matplotlib/Seaborn 분포 시각화와 반복 실험으로 극복하며 AI 모델 성능을 좌우하는 깨끗한 데이터셋 설계 원칙을 체득했습니다.',
    skills: ['Statistics', 'Matplotlib', 'Seaborn', 'Data Cleaning'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-jibak-travel',
    category: 'ai',
    categoryLabel: 'AI 에이전트 · Gemini RAG · 지식 그래프',
    title: '집밖은여행 (Jibak-eun Travel) — 지식 그래프 · RAG 기반 AI 트래블 컨시어지',
    shortTitle: '집밖은여행 (Jibak-eun Travel)',
    subtitle:
      'Gemini LLM과 4단계 지식 그래프·공식 운송약관 RAG를 결합해 7대 이동 수단별 수하물 규정을 검증하고, 3분할 체크리스트와 통합 운영 콘솔까지 구현한 풀스택 AI 서비스',
    role: 'AI 아키텍처 · 풀스택 개발 · 배포',
    period: '2026 대표 프로젝트',
    summary:
      '항공·철도(KTX/SRT)·버스·도보 등 복합 이동 수단마다 다른 휴대 수하물 규정을 Gemini 기반 RAG와 지식 그래프로 교차 계산합니다. 사용자는 대화형 AI 컨시어지를 통해 규격 초과 여부를 즉시 판별받고 3분할 체크리스트 영수증(챙길짐·살물건·현지조달)과 커머스 장바구니로 연결하며, 관리자 콘솔(#admin-console)에서는 Firestore 주문·물류·5대 로그와 Gemini AI 운영 비서를 실시간으로 운용할 수 있습니다.',
    architectureHighlights: [
      '7대 이동 수단(도보·자가용·지하철·버스·철도·배·항공) 교집합 최소규정 자동 계산 및 국토교통부·코레일·법제처 등 공식 약관 RAG 출처 검증',
      '4단계 지식 그래프(이동 수단 → API 출처/공식 원문 → 배너·상품·옵션 18종 → 현지 구매·체험 전환) 실시간 연결 지도 및 규정적합/규격초과 자동 태깅',
      'Gemini AI 운영 비서 탑재 통합 운영 대시보드(#admin-console) 구축: Firestore 실시간 주문·물류, 클릭/전환 퍼널, 5대 로그 추적 연동',
    ],
    logObservabilityUsed: [
      '5대 통합 로그 추적',
      'RAG 공식 출처 검증 스코어',
      'Firestore 실시간 주문·클릭·전환 퍼널',
    ],
    keyOutcome:
      'Gemini LLM · RAG · 지식 그래프 · Firestore 주문/운영 대시보드를 단일 프로덕트로 완성 및 Vercel 라이브 배포',
    techStack: [
      'Gemini API',
      'RAG',
      'Knowledge Graph',
      'Firestore',
      'React',
      'TypeScript',
      'Vercel',
    ],
    githubUrl: 'https://github.com/cosohotmas/jibak-eun-travel',
    demoUrl: 'https://jibak-eun-travel.vercel.app/',
    coverImage: '/assets/aistudio/image_3afa877e.png',
    coverAlt: '집밖은여행 AI 챗봇 상담 및 3분할 체크리스트 영수증 화면',
    gallery: [
      {
        url: '/assets/aistudio/image_3afa877e.png',
        label: '01. AI 컨시어지 · 체크리스트',
        caption:
          '선택된 이동 수단(도보 6kg·105cm 등)의 교집합 최소규정을 RAG로 요약하고, 규격 초과 경고를 계산해 3분할 체크리스트 영수증(챙길짐·살물건·현지조달)과 실시간 추천 상품으로 연결합니다.',
      },
      {
        url: '/assets/aistudio/image_ad861e08.png',
        label: '02. 4단계 지식 그래프 지도',
        caption:
          '7대 이동 수단 최소규정 → 국토교통부·코레일·법제처 등 공식 출처 원문 → 18개 상품·규격 옵션 노드 → 현지 대체 구매 전환까지 4단계 관계망을 실시간 시각화합니다.',
      },
      {
        url: '/assets/aistudio/image_7f02365b.png',
        label: '03. 통합 운영 콘솔 · Gemini AI 비서',
        caption:
          'Firestore 실제 주문·물류, 클릭·전환 퍼널, 5대 로그와 지식 그래프를 실시간 연동하고, Gemini AI 운영 비서가 재고·전환율·로그 기반 운영 액션을 제안합니다.',
      },
    ],
    featured: true,
  },
  {
    id: 'project-opennadeuli',
    category: 'fullstack',
    categoryLabel: '풀스택 · 공공데이터',
    title: 'OpenNadeuli — 무장애(Barrier-Free) 여행 일정 플래너',
    shortTitle: 'OpenNadeuli',
    subtitle:
      '공공데이터와 규칙 기반 추천 로직을 결합해 교통약자와 모든 여행자를 위한 무장애 여행 일정을 설계하는 웹 서비스',
    role: '풀스택 개발 · 기획 · 배포',
    period: '2026 프로젝트',
    summary:
      '이동 편의성과 접근성 정보를 일일이 찾기 어려웠던 문제를 해결하기 위해 공공데이터 API를 연동하고, 동선·편의시설 기준에 맞춘 여행 일정 추천 및 플래너를 구현하여 Vercel로 배포했습니다.',
    architectureHighlights: [
      '공공데이터 기반 무장애 관광지·편의시설 데이터 정제 및 필터링 파이프라인 구축',
      '여행자 조건에 따른 규칙 기반 일정 추천 로직과 직관적인 일정표 UI 설계',
      '프론트엔드부터 API 데이터 연동, Vercel 프로덕션 배포까지 단독 엔드투엔드 구현',
    ],
    logObservabilityUsed: ['Vercel Deployment Logs', 'API Response Validation'],
    keyOutcome: '무장애 관광 공공데이터를 실사용 가능한 웹 일정 플래너로 구현 및 Vercel 라이브 배포',
    techStack: ['TypeScript', 'HTML/CSS', 'Public Data API', 'Rule-Based Engine', 'Vercel'],
    githubUrl: 'https://github.com/cosohotmas/OpenNadeuli',
    demoUrl: 'https://opennadeuli.vercel.app',
    coverImage: '/src/assets/images/hero_developer_workspace_1795666502914.jpg',
    coverAlt: 'OpenNadeuli 무장애 여행 일정 플래너 아키텍처',
    featured: true,
  },
  {
    id: 'project-aititude',
    category: 'ai',
    categoryLabel: 'AI 서비스 · 풀스택',
    title: 'AI-Titude — AI 활용 역량 진단 및 레벨 테스트 플랫폼',
    shortTitle: 'AI-Titude',
    subtitle:
      '사용자의 프롬프트 활용도와 AI 이해도를 입체적으로 진단하고 맞춤형 피드백을 제공하는 TypeScript 기반 인터랙티브 웹 앱',
    role: '풀스택 개발 · 서비스 설계',
    period: '2026 프로젝트',
    summary:
      '생성형 AI 시대에 개인의 AI 활용 수준을 객관적으로 점검할 수 있도록 문항 설계, 상태 기반 진단 플로우, 결과 리포트 화면을 TypeScript로 구현하고 Vercel에 배포했습니다.',
    architectureHighlights: [
      '단계별 문항 진행 상태 관리 및 응답 점수 가중치 산출 엔진 구현',
      '타입 안전한 TypeScript 기반 컴포넌트 설계 및 반응형 진단 리포트 UI 구축',
      'Vercel 기반 지속적 배포(CD) 환경 구성 및 빠른 초기 로딩 최적화',
    ],
    logObservabilityUsed: ['Vercel Runtime Logs', 'Client State Validation'],
    keyOutcome: 'AI 활용 레벨 진단 웹 애플리케이션 구축 및 Vercel 상용 배포 완료',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'State Management', 'Vercel'],
    githubUrl: 'https://github.com/cosohotmas/ai_titude',
    demoUrl: 'https://aititude.vercel.app',
    coverImage: '/src/assets/images/project_ai_agents_visual_1795666502840.jpg',
    coverAlt: 'AI-Titude 역량 진단 시스템',
    featured: true,
  },
  {
    id: 'project-dl-portfolio',
    category: 'ai',
    categoryLabel: '딥러닝 · PyTorch',
    title: 'Deep Learning Portfolio — MNIST CNN & 서울 자전거 수요 예측기',
    shortTitle: 'Deep Learning Portfolio',
    subtitle:
      'PyTorch 기반 CNN 이미지 분류와 날씨·시간 변수 기반 서울 공공자전거 대여량 회귀 예측 모델을 통합한 Streamlit 딥러닝 서비스',
    role: 'AI 모델링 · 데이터 전처리 · 배포',
    period: '2026.07',
    summary:
      '이론으로 배운 분류(Classification)와 회귀(Regression) 모델을 실제 웹 인터페이스에서 바로 테스트할 수 있도록 PyTorch 모델 학습, 하이퍼파라미터 튜닝, Streamlit 실시간 추론 UI까지 완성했습니다.',
    architectureHighlights: [
      'MNIST 손글씨 인식용 CNN 아키텍처 설계 및 PyTorch 학습·추론 파이프라인 구축',
      '서울시 시간대·기온·습도·강수량 피처 엔지니어링 기반 자전거 수요 예측 회귀 모델 구현',
      'Streamlit을 활용한 인터랙티브 추론 대시보드 및 3종 라이브 앱 분리·통합 배포',
    ],
    logObservabilityUsed: ['PyTorch Epoch Loss/Accuracy Metrics', 'Streamlit Cloud Logs'],
    keyOutcome: '분류(CNN) + 회귀(수요 예측) 모델 학습 및 Streamlit Cloud 3개 서비스 라이브 배포',
    techStack: ['Python', 'PyTorch', 'CNN', 'Scikit-learn', 'Streamlit', 'Pandas'],
    githubUrl: 'https://github.com/cosohotmas/deep-learning-portpolio',
    demoUrl: 'https://deep-learning-portpolio.streamlit.app/',
    coverImage: '/src/assets/images/project_industrial_mes_visual_1795666503660.jpg',
    coverAlt: '딥러닝 CNN 및 시계열 수요 예측 모델',
  },
  {
    id: 'project-clip-fashion',
    category: 'ai',
    categoryLabel: '멀티모달 AI · 검색',
    title: 'CLIP Fashion Search — 멀티모달 이미지·텍스트 패션 검색',
    shortTitle: 'CLIP Fashion Search',
    subtitle:
      'OpenAI CLIP 임베딩 공간을 활용해 자연어 설명이나 이미지로 유사한 패션 아이템을 즉시 찾아내는 시맨틱 검색 엔진',
    role: 'AI 엔지니어 · Python 개발',
    period: '2026 프로젝트',
    summary:
      '기존 키워드 태그 매칭의 한계를 넘기 위해 CLIP 모델로 이미지와 텍스트를 동일 벡터 공간에 임베딩하고, 코사인 유사도 기반으로 원하는 스타일의 의류를 검색하는 파이프라인을 구현했습니다.',
    architectureHighlights: [
      'CLIP 비전-언어 인코더를 활용한 패션 데이터셋 벡터 임베딩 추출 및 인덱싱',
      '텍스트 쿼리 ↔ 이미지 및 이미지 ↔ 이미지 간 코사인 유사도 랭킹 구현',
      'RAG 기반 멀티모달 검색 구조로의 확장을 고려한 임베딩 파이프라인 모듈화',
    ],
    logObservabilityUsed: ['Embedding Cosine Similarity Score', 'Inference Latency Trace'],
    keyOutcome: '멀티모달 임베딩 기반 텍스트-이미지 교차 패션 검색 프로토타입 완성',
    techStack: ['Python', 'CLIP', 'PyTorch', 'Vector Search', 'Multimodal AI'],
    githubUrl: 'https://github.com/cosohotmas/clip-fashion-search',
    coverImage: '/src/assets/images/project_ai_agents_visual_1795666502840.jpg',
    coverAlt: 'CLIP 멀티모달 벡터 검색 파이프라인',
  },
  {
    id: 'project-distil-whisper',
    category: 'ai',
    categoryLabel: '음성 AI · STT',
    title: 'Distil-Whisper — 경량 고속 음성 인식(STT) 파이프라인',
    shortTitle: 'Distil-Whisper',
    subtitle:
      '기존 Whisper 대비 최대 6배 빠른 추론 속도와 50% 경량화를 목표로 WER 1% 이내 정확도를 검증한 음성 인식 파이프라인',
    role: 'AI 모델 최적화 · Python',
    period: '2026 프로젝트',
    summary:
      '실시간 AI 서비스에서 STT 추론 지연이 전체 응답 병목이 되는 문제를 해결하기 위해 Distil-Whisper 아키텍처를 테스트하고, 음성 분할·추론 속도 및 단어 오류율(WER)을 계측했습니다.',
    architectureHighlights: [
      'Knowledge Distillation 기반 Whisper 경량 모델 추론 파이프라인 구성',
      '원본 Whisper 대비 모델 크기 50% 축소 및 추론 속도 6배 향상 벤치마크 검증',
      '음성 기반 LLM/RAG 에이전트 입력 계층과의 연동을 위한 전사 출력 포맷 정제',
    ],
    logObservabilityUsed: ['WER Benchmark Metrics', 'Audio Chunk Inference Timing'],
    keyOutcome: '경량 STT 파이프라인으로 추론 지연 단축 및 실시간 음성 인터페이스 기반 마련',
    techStack: ['Python', 'Distil-Whisper', 'PyTorch', 'HuggingFace', 'Audio Processing'],
    githubUrl: 'https://github.com/cosohotmas/distil-whisper',
    coverImage: '/src/assets/images/project_voice_cooking_visual_1795666504109.jpg',
    coverAlt: 'Distil-Whisper 고속 음성 인식 파이프라인',
  },
  {
    id: 'project-nlp-suite',
    category: 'data',
    categoryLabel: 'NLP · 데이터 분석',
    title: 'Seq2Seq 번역기 & 한국어 영화 리뷰 감성 분석',
    shortTitle: 'NLP & Sentiment Suite',
    subtitle:
      '시퀀스-투-시퀀스 신경망 번역 모델과 대용량 한국어 텍스트 전처리 기반 감성 분류 파이프라인',
    role: 'AI / NLP 개발',
    period: '2026 프로젝트',
    summary:
      '자연어 토큰화, 불용어 정제, 시퀀스 패딩부터 Seq2Seq 인코더-디코더 학습 및 한국어 영화 리뷰 감성 분석까지 NLP 핵심 원리를 직접 구현하고 검증했습니다.',
    architectureHighlights: [
      '한국어 형태소 기반 텍스트 정제 및 어휘 사전(Vocabulary) 구축 파이프라인',
      'Seq2Seq 인코더-디코더 구조 학습 및 문장 길이별 번역 품질 평가',
      'Pandas · Seaborn 기반 데이터 분포 탐색 및 불균형 클래스 전처리 적용',
    ],
    logObservabilityUsed: ['Token Distribution Stats', 'Validation Loss Curves'],
    keyOutcome: '한국어 텍스트 전처리부터 시퀀스 모델링까지 NLP 엔드투엔드 파이프라인 구축',
    techStack: ['Python', 'PyTorch', 'Seq2Seq', 'NLP', 'Pandas', 'Seaborn'],
    githubUrl: 'https://github.com/cosohotmas/korean-movie-review-analysis',
    coverImage: '/src/assets/images/hero_developer_workspace_1795666502914.jpg',
    coverAlt: '자연어 처리 및 감성 분석 파이프라인',
  },
  {
    id: 'project-kwater-drone',
    category: 'fullstack',
    categoryLabel: '실무 프로젝트 · 관제',
    title: 'K-water 드론 기반 댐 시설물 시계열 관제 시스템',
    shortTitle: 'K-water 드론 관제',
    subtitle:
      '국내 기술 드론의 시설물 촬영 데이터와 카카오맵 API를 연동해 시간대별 상태 변화를 추적하는 시계열 관리 시스템',
    role: '웹 시스템 개발 · API 연동',
    period: '2021.09 – 2022.09',
    summary:
      '한국수자원공사(K-water) 시설물 점검 현장에서 드론이 촬영한 위치·영상 데이터를 지도 위에 시각화하고, 시계열 이력을 비교 관리할 수 있도록 웹 관제 인터페이스를 구축했습니다.',
    architectureHighlights: [
      '카카오맵(KakaoMap) API 기반 댐 시설물 GPS 마커 및 구역별 오버레이 시각화',
      '촬영 일시별 점검 이미지·메타데이터 시계열 조회 및 변화 추적 워크플로우 구현',
      '현장 점검 담당자가 직관적으로 이력을 탐색할 수 있는 UI/UX 설계',
    ],
    logObservabilityUsed: ['GPS Coordinate Sync Logs', 'Map API Response Trace'],
    keyOutcome: '드론 촬영 데이터와 지도 API를 결합한 시설물 시계열 모니터링 체계 구축',
    techStack: ['JavaScript', 'KakaoMap API', 'Time-Series Data', 'Web Dashboard'],
    githubUrl: 'https://github.com/cosohotmas',
    coverImage: '/src/assets/images/project_industrial_mes_visual_1795666503660.jpg',
    coverAlt: '드론 시설물 관제 및 시계열 모니터링',
  },
  {
    id: 'project-bike-mnist',
    category: 'data',
    categoryLabel: '데이터 · 딥러닝 웹',
    title: '서울 자전거 수요 예측기 & MNIST CNN 웹 앱',
    shortTitle: 'Bike & MNIST Web',
    subtitle:
      '기상·시간 데이터를 활용한 자전거 대여량 예측 앱(bike-ai)과 실시간 손글씨 숫자 판별 앱(ai-mnist-cnn)',
    role: '모델 학습 · Streamlit 풀스택 배포',
    period: '2026.07',
    summary:
      '학습된 PyTorch 모델을 Jupyter Notebook 안에만 두지 않고 누구나 브라우저에서 직접 입력 값을 바꾸며 결과를 확인할 수 있도록 경량 웹 서비스로 배포했습니다.',
    architectureHighlights: [
      '서울 자전거 대여 데이터 결측치·이상치 정제 및 시간/날씨 파생 피처 생성',
      '사용자가 직접 숫자 이미지를 업로드/입력해 CNN 예측 확률 분포를 확인하는 UI',
      'Streamlit Cloud 독립 배포로 상시 데모 접속 환경 제공',
    ],
    logObservabilityUsed: ['Feature Correlation Matrix', 'Prediction Confidence Score'],
    keyOutcome: '독립된 2종의 AI 체험 웹 서비스(bike-ai, ai-mnist-cnn) 상시 배포 운영',
    techStack: ['Python', 'PyTorch', 'CNN', 'Streamlit', 'NumPy', 'Pandas'],
    githubUrl: 'https://github.com/cosohotmas/bike',
    demoUrl: 'https://bike-ai.streamlit.app/',
    coverImage: '/src/assets/images/project_industrial_mes_visual_1795666503660.jpg',
    coverAlt: '서울 자전거 수요 예측 및 MNIST CNN 웹 앱',
  },
];

export const POSTMORTEMS: PostmortemCase[] = [
  {
    id: 'postmortem-rag-hallucination',
    index: 'Case 01',
    title: 'RAG 파이프라인: 근거 없는 LLM 환각 응답 차단 및 출처 강제',
    category: 'LLM & RAG Guardrail',
    symptom: '검색된 문서(Context)에 없는 수치나 정책을 LLM이 사전 학습 기억으로 지어내어 잘못된 답변을 반환하는 현상 발생',
    logClue: 'LangGraph Trace에서 Retriever 반환 청크 유사도(score < 0.42)가 낮은 상태에서도 Generator가 단정적 응답을 생성함을 포착',
    rootCause: '검색 유사도 임계치 필터(Threshold Gate) 부재 및 출력 스키마 검증 없이 자유 텍스트를 그대로 반환한 구조',
    solution: 'LangGraph 조건부 엣지에 Relevance Grader 노드를 추가해 저신뢰 청크를 걸러내고, 출처 ID 인용을 Pydantic 스키마로 강제',
    impact: '근거 없는 환각 응답 차단 및 출처 검증 통과율 대폭 향상, 검색 실패 시 안전한 재질문/폴백 안내 제공',
    metricsBefore: '저신뢰 문서에서도 단정 응답 생성',
    metricsAfter: '유사도 게이트 + 출처 인용 스키마 강제',
    techStack: ['Python', 'LangGraph', 'RAG', 'Pydantic', 'LLM'],
    filename: 'rag_guardrail_graph.py',
    beforeCode: `# [문제 원인] 검색 결과 검증 없이 바로 LLM에 전달하여 환각 발생
docs = vector_store.similarity_search(query, k=4)
response = llm.invoke(f"Context: {docs}\\nQuestion: {query}")
return response.content`,
    afterCode: `# [근본 해결] LangGraph 조건부 분기 + 유사도 임계치 & 출처 스키마 강제
scored_docs = vector_store.similarity_search_with_score(query, k=4)
valid_docs = [doc for doc, score in scored_docs if score >= 0.72]
if not valid_docs:
    return GroundedAnswer(answer="관련 문서를 찾지 못했습니다.", citations=[])
return structured_llm.invoke(build_cited_prompt(valid_docs, query))`,
  },
  {
    id: 'postmortem-data-preprocessing',
    index: 'Case 02',
    title: '수요 예측 모델: 데이터 누수(Leakage) 제거 및 통계 기반 피처 정제',
    category: 'Data Preprocessing',
    symptom: '학습 검증(Validation) 정확도는 높게 나왔으나 실제 신규 기상 입력 테스트에서 예측 오차가 급격히 증가',
    logClue: 'Seaborn 분포 플롯과 상관행렬 점검 중 타깃 대여량과 직결된 사후 집계 컬럼 및 결측치 전처리 순서 오류 발견',
    rootCause: 'Train/Test 분할 이전에 전체 데이터셋 기준으로 스케일링과 결측치 대체를 수행해 분포 정보가 누수됨',
    solution: 'Scikit-learn Pipeline 내부로 전처리(Imputer, StandardScaler)를 캡슐화해 Train 폴드에만 fit을 수행하도록 재구성',
    impact: '실제 테스트 환경에서 예측 일관성 확보 및 재현 가능한 ML 전처리 파이프라인 정립',
    metricsBefore: 'Data Leakage로 실측 오차 편차 큼',
    metricsAfter: 'Pipeline 격리로 안정적 일반화 성능 확보',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn', 'Statistics'],
    filename: 'bike_demand_pipeline.py',
    beforeCode: `# [문제 원인] 분할 전 전체 데이터 스케일링으로 Data Leakage 발생
X_scaled = StandardScaler().fit_transform(df[features])
X_train, X_test, y_train, y_test = train_test_split(X_scaled, df[target])
model.fit(X_train, y_train)`,
    afterCode: `# [근본 해결] Train/Test 분할 후 Scikit-learn Pipeline으로 전처리 격리
X_train, X_test, y_train, y_test = train_test_split(df[features], df[target], test_size=0.2)
pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", StandardScaler()),
    ("regressor", model),
])
pipeline.fit(X_train, y_train)`,
  },
  {
    id: 'postmortem-langgraph-loop',
    index: 'Case 03',
    title: 'LangGraph 멀티스텝 에이전트: 무한 재시도 루프 및 상태 유실 방지',
    category: 'Agent Orchestration',
    symptom: '툴 호출 검증이 실패할 경우 에이전트가 동일 검색 쿼리를 반복 호출하며 토큰 비용과 응답 지연이 폭증',
    logClue: 'Graph State 이벤트 로그에서 retry_count 증가 없이 동일 노드(researcher → critic → researcher)가 10회 이상 순환됨을 확인',
    rootCause: 'StateGraph 상태 객체에 반복 횟수 상한(max_retries)과 직전 실패 피드백 누적이 없어 동일 판단을 반복함',
    solution: 'AgentState에 retry_count와 error_feedback 필드를 추가하고, 조건부 엣지에서 상한 도달 시 Fallback 요약 노드로 강제 종료',
    impact: '무한 루프 0건 달성, 불필요한 LLM 토큰 소모 차단 및 예측 가능한 응답 시간 보장',
    metricsBefore: '검증 실패 시 무한 루프 · 타임아웃 위험',
    metricsAfter: 'max_retries 가드 · 결정적 종료 보장',
    techStack: ['Python', 'LangGraph', 'StateGraph', 'LLM', 'FastAPI'],
    filename: 'agent_loop_guard.py',
    beforeCode: `# [문제 원인] 재시도 상한 없이 상태 결과만으로 루프 분기
def route_review(state: AgentState):
    if state["needs_revision"]:
        return "developer"
    return "reporter"`,
    afterCode: `# [근본 해결] retry_count 상한 및 피드백 컨텍스트 기반 안전 종료
def route_review(state: AgentState):
    if state["needs_revision"] and state["retry_count"] < 3:
        return "developer"
    return "fallback_reporter" if state["needs_revision"] else "reporter"`,
  },
  {
    id: 'postmortem-stt-latency',
    index: 'Case 04',
    title: '음성 AI 파이프라인: Distil-Whisper 도입을 통한 STT 추론 병목 개선',
    category: 'Inference & Deployment',
    symptom: '대용량 음성 입력을 전사할 때 기존 모델의 추론 지연으로 후속 LLM 응답까지 체감 대기 시간이 크게 길어짐',
    logClue: '오디오 전처리 ~ 디코딩 구간 프로파일링 결과 전체 파이프라인 지연의 65% 이상이 STT 디코더 단계에서 발생',
    rootCause: '단일 대형 모델에 긴 오디오 청크를 동기식으로 처리하며 경량화·배치 분할이 적용되지 않음',
    solution: 'Distil-Whisper 경량 모델 전환 및 청크 단위 스트리밍 전처리 적용으로 정확도(WER 1% 이내)를 유지하며 속도 개선',
    impact: '음성 인식 속도 최대 6배 향상 및 모델 크기 50% 절감으로 웹 서비스 연동 가능 수준 확보',
    metricsBefore: '대형 모델 동기 추론 지연 누적',
    metricsAfter: '6x 빠른 추론 · 모델 50% 경량화',
    techStack: ['Python', 'Distil-Whisper', 'PyTorch', 'HuggingFace'],
    filename: 'stt_distil_inference.py',
    beforeCode: `# [문제 원인] 대형 Whisper 모델로 전체 오디오를 블로킹 추론
model = WhisperForConditionalGeneration.from_pretrained("openai/whisper-large-v2")
result = model.generate(input_features)  # 긴 지연 발생`,
    afterCode: `# [근본 해결] Distil-Whisper + 청크 파이프라인으로 고속 추론
pipe = pipeline(
    "automatic-speech-recognition",
    model="distil-whisper/distil-large-v2",
    chunk_length_s=25,
    batch_size=8,
)`,
  },
];

export const LOG_PRESETS: LogPreset[] = [
  {
    id: 'preset-rag',
    label: 'RAG 저신뢰 청크 & 환각 응답 발생',
    category: 'RAG & LLM',
    log: `2026-10-14T09:41:12.310Z [WARN] [rag-retriever] Top-k similarity scores below threshold: [0.38, 0.34, 0.29] for query="환불 예외 규정"
2026-10-14T09:41:13.840Z [ERROR] [output-validator] CitationMismatchError: Claimed reference [DOC-99] not found in retrieved context chunks.`,
    hiddenClue: 'Retriever 유사도가 모두 0.40 미만인데도 LLM Generator가 존재하지 않는 문서 번호 [DOC-99]를 인용한 시점',
    rootCause: '검색 유사도 Threshold Gate 부재와 출력 단계 Citation 화이트리스트 검증 미적용',
    guardCode: 'score >= 0.72 필터링 후 빈 컨텍스트면 즉시 "근거 문서 없음" 분기 + Pydantic validator로 retrieved_ids 외 인용 차단',
    uxStrategy: '확신 없는 답변을 그럴듯하게 지어내지 않고, 확인된 문서 범위와 추가 질문 가이드를 투명하게 안내합니다.',
    preventionMetric: 'CitationMismatchError 0건 & Groundedness Score >= 95%',
  },
  {
    id: 'preset-langgraph',
    label: 'LangGraph 에이전트 무한 재시도 루프',
    category: 'LangGraph Flow',
    log: `2026-10-14T11:05:02.114Z [INFO] [langgraph-runner] node=critic status=NEEDS_FIX iteration=9
2026-10-14T11:05:04.402Z [WARN] [token-budget] Token usage exceeded 24,000 tokens on thread_id=th_881a
2026-10-14T11:05:04.405Z [ERROR] [langgraph-runner] GraphRecursionError: Recursion limit of 12 reached without reaching END.`,
    hiddenClue: 'iteration=9까지 반복되는 동안 동일 쿼리·동일 컨텍스트로 Critic와 Developer가 교착 상태에 빠진 패턴',
    rootCause: 'AgentState에 retry_count 상한과 실패 사유 누적(error_feedback)이 없어 조건부 엣지가 END로 수렴하지 못함',
    guardCode: 'StateGraph 조건부 엣지에 retry_count < 3 상한 적용 + recursion_limit 명시 + 초과 시 partial_summary 노드로 안전 회수',
    uxStrategy: '사용자가 타임아웃 에러 화면을 보지 않고, 현재까지 수집된 검증 결과와 함께 재실행 옵션을 받을 수 있습니다.',
    preventionMetric: 'GraphRecursionError 0건 & 요청당 평균 토큰 상한 준수',
  },
  {
    id: 'preset-inference',
    label: 'PyTorch / API 추론 타임아웃 및 전처리 불일치',
    category: 'Data & Inference',
    log: `2026-10-14T15:22:19.002Z [WARN] [ml-inference] Feature schema drift detected: missing key 'humidity_lag_1'
2026-10-14T15:22:24.890Z [ERROR] [fastapi-gateway] Inference latency 5890ms exceeded SLA threshold (2000ms) -> 504 Timeout`,
    hiddenClue: '학습 시 사용한 파생 피처(humidity_lag_1)가 추론 요청 페이로드에서 누락되고 동기 추론이 블로킹된 지점',
    rootCause: '학습 전처리 로직과 서빙 API 전처리 로직이 분리되어 스키마 불일치가 발생하고, 모델 싱글톤 캐싱이 누락됨',
    guardCode: '학습-서빙 공용 Scikit-learn Pipeline 직렬화 + FastAPI lifespan에서 모델 1회 프리로드 및 Pydantic 입력 스키마 검증',
    uxStrategy: '입력값 검증 오류는 즉시 친절한 필드 안내로 반환하고, 워밍업된 모델로 300ms 이내 예측 결과를 제공합니다.',
    preventionMetric: '추론 p95 지연 < 350ms & 스키마 불일치 0건',
  },
];

export const ARSENAL_TOOLS: ArsenalTool[] = [
  {
    id: 'tool-python-fastapi',
    category: 'ai',
    categoryLabel: 'AI · LLM Core',
    name: 'Python / FastAPI',
    focus: 'AI Serving & Async API',
    summary: '비동기 AI 백엔드 구축, Pydantic 입출력 계약 검증, 모델 추론 API 서빙',
    appliedIn: ['Distil-Whisper', 'CLIP Fashion Search', 'Deep Learning Portfolio'],
    capabilityNote: '요청 경계에서 Pydantic으로 스키마를 검증해 잘못된 페이로드가 AI 모델로 유입되지 않도록 차단합니다.',
    proficiency: 95,
  },
  {
    id: 'tool-llm-rag',
    category: 'ai',
    categoryLabel: 'AI · LLM Core',
    name: 'Gemini / LLM / RAG Pipeline',
    focus: 'Grounded Generation',
    summary: 'Gemini API 기반 문서·규정 청킹, 지식 그래프 연동 및 유사도 게이트 기반 근거 답변 생성',
    appliedIn: ['집밖은여행 (Jibak-eun Travel)', 'CLIP Fashion Search', 'RAG Guardrail Architecture'],
    capabilityNote: '공식 약관·문서 원문 출처와 임계치 게이트를 결합해 환각(Hallucination)을 구조적으로 줄입니다.',
    proficiency: 92,
  },
  {
    id: 'tool-langgraph',
    category: 'ai',
    categoryLabel: 'AI · LLM Core',
    name: 'LangGraph / LangChain',
    focus: 'Stateful Agent Flow',
    summary: 'StateGraph 기반 다단계 에이전트 오케스트레이션, 조건부 분기 및 재시도 상한 제어',
    appliedIn: ['Agent Loop Guardrail', 'Multi-Step AI Workflow'],
    capabilityNote: '단일 프롬프트 호출이 아닌 상태 전이 그래프로 에이전트의 판단·검증·폴백 흐름을 제어합니다.',
    proficiency: 88,
  },
  {
    id: 'tool-pytorch-ml',
    category: 'ai',
    categoryLabel: 'AI · LLM Core',
    name: 'PyTorch / Scikit-learn / Pandas',
    focus: 'ML · DL & Data Prep',
    summary: 'CNN 이미지 분류, 시계열 수요 예측, 통계적 결측치·이상치 정제 및 Pipeline 격리',
    appliedIn: ['MNIST CNN', '서울 자전거 수요 예측기', '한국어 영화 리뷰 감성 분석'],
    capabilityNote: 'Train/Test 누수를 막는 전처리 파이프라인과 재현 가능한 모델 평가 체계를 구현합니다.',
    proficiency: 90,
  },
  {
    id: 'tool-react-ts',
    category: 'backend',
    categoryLabel: 'Full-Stack · API',
    name: 'React / Next.js / TypeScript',
    focus: 'End-to-End Frontend',
    summary: 'AI 결과를 직관적으로 전달하는 타입 안전 UI, 3분할 체크리스트 및 통합 운영 대시보드',
    appliedIn: ['집밖은여행 (Jibak-eun Travel)', 'AI-Titude', 'OpenNadeuli'],
    capabilityNote: '복잡한 AI 추론 결과와 지식 그래프·주문 데이터를 사용자가 즉시 이해하고 조작할 수 있는 화면으로 구현합니다.',
    proficiency: 90,
  },
  {
    id: 'tool-api-data',
    category: 'backend',
    categoryLabel: 'Full-Stack · API',
    name: 'REST API / Firestore / SQL · 공공데이터',
    focus: 'Data Integration',
    summary: 'Firestore 실시간 주문·로그 연동, 외부 공공 API 수집·정규화 및 지도 기반 시계열 관제',
    appliedIn: ['집밖은여행 (Jibak-eun Travel)', 'K-water 드론 관제', 'OpenNadeuli'],
    capabilityNote: '실시간 데이터베이스와 외부 API 응답 편차·결측 필드를 안전하게 방어하며 데이터 정합성을 유지합니다.',
    proficiency: 87,
  },
  {
    id: 'tool-observability',
    category: 'observability',
    categoryLabel: 'Observability · Infra',
    name: 'Observability (Logging · Tracing · Eval)',
    focus: 'Runtime Visibility',
    summary: '5대 운영 로그, 클릭·전환 퍼널, LLM 토큰·유사도 스코어 추적 및 WER/Loss 계측',
    appliedIn: ['집밖은여행 (#admin-console)', 'Distil-Whisper WER Eval', 'LangGraph Trace'],
    capabilityNote: '보이지 않는 모델 내부와 운영 로그·전환 수치를 계측해 감이 아닌 근거로 성능을 개선합니다.',
    proficiency: 88,
  },
  {
    id: 'tool-deploy',
    category: 'observability',
    categoryLabel: 'Observability · Infra',
    name: 'Vercel / Streamlit / Docker / Git',
    focus: 'Serverless & Container',
    summary: '서버리스 웹 배포(Vercel), ML 데모 서빙(Streamlit), 컨테이너 기반 일관된 실행 환경',
    appliedIn: ['집밖은여행 (Jibak-eun Travel)', 'OpenNadeuli', 'Deep Learning Portfolio'],
    capabilityNote: '로컬 실험 코드를 누구나 접속할 수 있는 라이브 서비스로 빠르게 배포하고 운영 로그를 관리합니다.',
    proficiency: 89,
  },
];
