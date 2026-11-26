<div align="center">

# `>_` ㅊBackHo — Cha BackHo Portfolio

**AI Full-Stack Engineer · End-to-End Product Builder**  
*프론트엔드, 백엔드, 배포까지 서비스 전체 흐름을 책임지고 구현합니다.*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=22D3EE)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-09090B?style=flat-square&logo=tailwindcss&logoColor=22D3EE)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-09090B?style=flat-square&logo=vite&logoColor=22D3EE)](https://vite.dev/)

[GitHub](https://github.com/cosohotmas) · [Email](mailto:cosohotmas@gmail.com) · [Resume PDF](./public/resume.pdf)

</div>

---

## Overview

단순한 기능 구현에 그치지 않고 **Python · LLM · RAG · LangGraph** 기반 AI 파이프라인을 실제 사용자가 체감할 수 있는 웹 프로덕트로 완성하는 **차백호(Cha BackHo)**의 개발자 포트폴리오 애플리케이션입니다.

- **Design System**: `#09090B` 다크 서피스 기반 + **Electric Cyan (`#22D3EE`)** 포인트 컬러 (라이트 모드 WCAG AA 대비 `#0891B2` 자동 전환 지원)
- **Data-Driven Architecture**: 모든 프로젝트, 경력/교육 타임라인, 장애 회고(Postmortem), 로그 분석 프리셋, Technical Arsenal을 `src/data/portfolioData.ts` 단일 소스에서 선언적으로 관리

---

## Core Sections & Interactive Features

### 1. Typographic Hero & Quick Actions (`HeroSection.tsx`)
- 이미지 없이 타이포그래피와 핵심 역량(`Python · LLM · RAG · LangGraph · PyTorch · React / TypeScript`) 중심으로 메시지를 전달하는 히어로 섹션
- `ACTIVE_ROLE_TITLE` 프리셋 전환 지원:
  - `fullstack`: `AI Full-Stack Engineer · End-to-End Product Builder`
  - `application`: `AI Application Engineer · LLM & RAG Systems`
- 원클릭 **이력서 PDF 다운로드 (`/resume.pdf`)**, **다크/라이트 테마 토글**, **GitHub 연동** 제공

### 2. Selected Works & Multi-Screenshot Gallery (`ProjectsSection.tsx`)
- 카테고리 필터(`전체` / `AI · LLM · 딥러닝` / `풀스택 · 관제` / `NLP · 데이터 분석`) 및 Bento Grid 레이아웃
- 대표 프로젝트 **집밖은여행 (Jibak-eun Travel)** 포함 다수 프로젝트 수록:
  - Gemini RAG · 4단계 지식 그래프 지도 · 3분할 체크리스트 영수증 · `#admin-console` Firestore 통합 운영 대시보드
  - 라이트박스 모달 내 멀티 스크린샷 갤러리 전환(탭 + 키보드 `←` / `→` / `ESC` 지원)

### 3. Engineering Postmortem & Log Analyzer (`PostmortemSection.tsx`)
- AI/ML/LLM 실전 트러블슈팅 사례 4종(`RAG 환각 가드레일`, `Data Leakage 격리`, `LangGraph 무한 루프 방지`, `Distil-Whisper STT 병목 개선`)의 **Before / After 코드 Diff** 뷰어
- **Interactive Log Root-Cause Analyzer**: 실제 에러 로그 프리셋 선택 시 hidden clue, 근본 원인, 방어 코드, UX 폴백 전략을 즉시 분석

### 4. Technical Arsenal (`SkillsAndContactSection.tsx`)
- `전체 역량` / `AI · LLM · RAG` / `Full-Stack · API` / `Observability · 배포` 4개 필터 탭
- **좌측 2열 역량 카드 그리드 + 우측 Sticky 상세 인사이트 패널** 구조로 숙련도(`%`), 아키텍처 운용 방식, 실무 적용 프로젝트를 동적으로 탐색

---

## Tech Stack

| Layer | Stack |
| :--- | :--- |
| **Core** | React 19, TypeScript, Vite 8 |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`), Lucide React |
| **Typography** | Plus Jakarta Sans, Noto Sans KR, JetBrains Mono, Cormorant Garamond |
| **Static Assets** | Local UI Screenshots (`/public/assets/aistudio/`), Resume (`/public/resume.pdf`) |

---

## Project Structure

```text
.
├── index.html                  # HTML 진입점, SEO 메타태그 및 웹폰트 로드
├── metadata.json               # 앱 메타데이터
├── package.json                # 스크립트 및 의존성 명세
├── public/
│   ├── resume.pdf              # 이력서 다운로드 정적 파일
│   └── assets/aistudio/        # 집밖은여행 등 프로젝트 실제 UI 스크린샷
└── src/
    ├── App.tsx                 # 최상위 레이아웃, 테마 상태 및 섹션 조합
    ├── main.tsx                # React DOM 마운트 엔트리
    ├── index.css               # Tailwind v4 설정, 다크 모드 커스텀 변형 및 유틸리티
    ├── data/
    │   └── portfolioData.ts    # 프로필, 프로젝트, 포스트모템, 기술 역량 단일 데이터 소스
    └── components/
        ├── Navbar.tsx                  # 애니메이션 터미널 로고(ㅊBackHo) 및 GNB
        ├── HeroSection.tsx             # 타이포그래피 히어로, 이력서 PDF/테마 토글, 지표 바
        ├── CorePhilosophySection.tsx   # 교육/경력 타임라인 및 5가지 핵심 엔지니어링 철학
        ├── ProjectsSection.tsx         # Bento 프로젝트 그리드 & 멀티 스크린샷 라이트박스
        ├── PostmortemSection.tsx       # Before/After 코드 Diff & 인터랙티브 로그 분석기
        ├── SkillsAndContactSection.tsx # Technical Arsenal 그리드/상세 패널 & 연락처 복사
        └── Footer.tsx                  # 푸터 및 빠른 이동 링크
```

---

## Getting Started

### Prerequisites
- Node.js `>= 20` (or Bun)

### Installation & Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:3000)
npm run dev
```

### Type Check & Production Build

```bash
# TypeScript static verification
npm run lint

# Build production bundle into dist/
npm run build

# Preview production bundle
npm run preview
```

---

## Configuration Tips

직군 포지션 표기는 `src/data/portfolioData.ts`의 상수 한 줄로 즉시 전환할 수 있습니다.

```ts
// src/data/portfolioData.ts
export const ACTIVE_ROLE_TITLE: RoleTitleKey = 'fullstack'; // 'fullstack' | 'application'
```

---

## Contact

- **Name**: 차백호 (Cha BackHo)
- **Email**: [cosohotmas@gmail.com](mailto:cosohotmas@gmail.com)
- **GitHub**: [@cosohotmas](https://github.com/cosohotmas)
- **Featured Project**: [집밖은여행 Live](https://jibak-eun-travel.vercel.app/) · [Repo](https://github.com/cosohotmas/jibak-eun-travel)
