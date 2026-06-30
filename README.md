# 🚀 프론트엔드 개발자 여수경의 포트폴리오 사이트

> 사용자의 시각적 즐거움과 웹 성능 최적화를 동시에 고민하는 개발자, 여수경의 개인 포트폴리오 저장소입니다.

🔗 **[포트폴리오 보기](https://fe-portfolio-puce.vercel.app/)**

---

## 📱 프로젝트 프리뷰

|      메인 화면      |  프로젝트 아카이빙  | 반응형 뷰 (모바일)  |
| :-----------------: | :-----------------: | :-----------------: |
| <이미지나 GIF 링크> | <이미지나 GIF 링크> | <이미지나 GIF 링크> |

---

## 🛠️ 기술 스택 및 선정이유

- **Framework**: Next.js 14 (App Router)
  - 초기 로딩 속도 향상(SSR) 및 포트폴리오의 SEO 최적화를 위해 채택했습니다.
- **Language**: TypeScript
  - 명확한 타입 정의를 통해 컴포넌트 간 데이터 흐름의 안정성을 높였습니다.
- **Styling**: Tailwind CSS
  - 미디어 쿼리를 통한 유연한 반응형 레이아웃 구현 및 빠른 스타일링을 위해 사용했습니다.

---

## 💡 주요 고민 및 성능 최적화

### 1. 웹 접근성(Accessibility)과 SEO 최적화

- `Lighthouse` 검사 기준 접근성과 SEO 점수 **100점**을 목표로 시맨틱 태그 사용 및 이미지 메타태그(alt)를 철저히 관리했습니다.
- Next.js의 `Metadata API`를 활용하여 페이지 title, description, favicon을 정적으로 선언해 검색 엔진 노출을 최적화했습니다.
- 모달의 닫기 버튼에 `aria-label`을 명시하고, `Escape` 키로도 닫힐 수 있도록 키보드 접근성을 보장했습니다.

### 2. 재사용 가능한 컴포넌트 및 인터랙션 설계

- 모달을 `createPortal`로 `#modal-root`에 렌더링하여 부모 컴포넌트의 `z-index` 스택 영향을 받지 않도록 분리했습니다.
- 모달이 열리는 동안 `body.overflow = 'hidden'`으로 배경 스크롤을 잠그고, 닫힐 때 원복하도록 `useEffect` cleanup에서 처리했습니다.

### 3. 스크롤 기반 인터랙션 최적화

- 헤더 배경 전환에 `scroll` 이벤트를 사용하되 `{ passive: true }` 옵션을 적용해 브라우저의 스크롤 스레드를 차단하지 않도록 했습니다.
- 페이지 새로고침 시 스크롤 위치가 복원되더라도 헤더 상태가 올바르게 반영되도록 마운트 시점에 즉시 감지 함수를 실행했습니다.
- 섹션 진입 감지는 `IntersectionObserver`를 사용해 스크롤 이벤트 대신 브라우저 네이티브 API로 처리했습니다.

### 4. 뷰포트 진입 애니메이션

- `useInView` 커스텀 훅으로 `IntersectionObserver`를 추상화하여 요소가 뷰포트에 진입할 때만 애니메이션을 실행했습니다.
- 한 번 진입한 요소는 `observer.disconnect()`로 감지를 즉시 해제해 불필요한 콜백 실행을 방지했습니다.
- `AnimateOnView` 컴포넌트에 `delay` prop을 두어 목록 아이템이 순차적으로 등장하는 효과를 CSS `transitionDelay`만으로 구현했습니다.

---

## ⚙️ 시작 가이드 (Local Development)

### 1. Clone & Directory 이동

```bash
git clone [https://github.com/luneyeo/fe-portfolio.git](https://github.com/luneyeo/fe-portfolio.git)
cd portfolio
```
