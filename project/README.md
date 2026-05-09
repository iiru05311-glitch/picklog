# Pick Log Design System

Pick Log은 **링크와 상품을 저장하고 공유하는 SNS**입니다. 사용자는 자신이 발견한 링크/상품을 폴더 단위로 보관하고, 팔로우한 인플루언서의 픽을 피드에서 보고, 자신의 큐레이션을 프로필에 쌓아 나갑니다. 인스타그램과 iOS 기본 패턴에서 출발해, 일상에 자연스럽게 스며드는 **따뜻한 종이 감성**으로 재해석한 디자인 시스템입니다.

> **Audience.** 20–30대 SNS 헤비 유저, 특히 쇼핑·뷰티·패션·푸드 분야에 관심이 많은 여성 사용자와 인플루언서.
> **Tone.** 군더더기 없는 짧은 라벨 (`저장됨`, `보관함`, `픽`). 감정 과잉 없이 차분.
> **Languages.** 한국어 우선, 영문 보조 (이중언어 UI).

---

## Sources

이 디자인 시스템은 사용자가 제공한 다음 자료로부터 출발합니다:

- **참조 스크린샷** (`uploads/` 폴더):
  - `스크린샷 2026-05-09 223308.png` — Profile screen (마이)
  - `스크린샷 2026-05-09 223312.png` — 보관함 screen
  - `스크린샷 2026-05-09 223319.png` — Home/Feed screen with 저장 랭킹
- **방향성 지침**: 기존 핑크/그라데이션/이모지 일러스트 톤을 **off-white 종이 + 단일 테라코타 액센트 + 손글씨 느낌의 세리프**로 전면 교체. UI 기능과 화면 배치는 유지.
- **참고 제품**: Instagram, iOS 기본 컴포넌트 (탭바, 시트, 프로필 그리드 패턴).

> 원본 코드베이스나 Figma 파일은 제공되지 않았기 때문에, 컴포넌트는 스크린샷 + 사양 회의 결과를 토대로 재구성되었습니다. 더 정밀한 픽셀 일치가 필요하면 코드베이스/Figma를 첨부해주세요.

---

## Index

| File | Purpose |
|---|---|
| `README.md` | 이 문서 — 시스템 개요, 콘텐츠/비주얼/아이코노그래피 가이드라인 |
| `SKILL.md` | Agent Skill (Claude Code 호환). 디자인 작업 시 자동 로드되는 규칙 |
| `colors_and_type.css` | 컬러 토큰, 타입 스케일, spacing, radius, shadow CSS 변수 |
| `fonts/` | 웹폰트 라이선스/링크 노트. 실제 폰트는 CDN 로드. |
| `assets/` | 로고, 아이콘 SVG, 아이콘 사용 노트 |
| `preview/` | 디자인 시스템 탭에 표시되는 카드 HTML (타입/컬러/스페이싱/컴포넌트) |
| `ui_kits/mobile/` | Pick Log 모바일 앱 UI 키트 (5개 핵심 화면, JSX 컴포넌트) |

---

## Content fundamentals

Pick Log의 카피는 **"필요한 만큼만, 군더더기 없이"** 가 원칙입니다.

### Voice
- **Casing.** 한국어는 자연스러운 띄어쓰기, 영문은 제품명만 `Pick Log` (스페이스 포함, 두 단어 모두 대문자 시작). 약어 `PL` 사용 가능.
- **Pronouns.** 1인칭/2인칭 모두 가능한 한 생략. "내 보관함" 처럼 소유 관계만 명시. "당신"·"여러분" 같은 호칭은 쓰지 않음.
- **Mood.** 종결 어미는 `-됨`, `-함`, `-개` 또는 명사형 (`저장됨`, `폴더 수정`, `링크 3개`). 감탄/이모지/느낌표 자제.
- **Emoji.** 시스템 UI에서는 **사용하지 않음**. 사용자가 입력한 폴더 이름이나 노트에는 자유.
- **Numbers.** 한국식 단위 우선 — `187 팔로워`, `링크 3개`, `D-5`. 천 단위 콤마 사용 (`1,204`).

### Examples

| 상황 | 좋음 | 피하기 |
|---|---|---|
| 저장 완료 토스트 | `저장됨` | `링크가 보관함에 저장되었어요! 🎉` |
| 빈 상태 | `아직 저장된 링크가 없음` | `여기에 멋진 링크를 추가해보세요!` |
| 팔로우 버튼 | `팔로우` / `팔로잉` | `팔로우하기` / `팔로우 중이에요` |
| 폴더 액션 | `폴더 수정` | `폴더 편집하기` |
| 랭킹 라벨 | `저장 랭킹` | `🔥 가장 핫한 픽 모음 🔥` |
| CTA | `픽 추가` | `+ 새로운 픽을 저장해보세요` |

### Bilingual rules
- 라벨에 영문이 필요한 경우, 한글 라벨 + 영문 작은 메타 (`보관함 / Library`)는 **헤더에서만** 사용. 본문에서는 한 언어만.
- 숫자 단위: 한국어 화면에서는 `명/개/원`, 영문 화면에서는 `followers/items/won`.

---

## Visual foundations

### Mood
**일기장이나 무지 노트의 펼친 면.** 약간 누런 종이 위에 검고 부드러운 잉크로 쓴 메모. 사진은 따뜻한 톤(웜 화이트 밸런스), 약간의 그레인. 디자인은 차분하고 비어 있음을 두려워하지 않음.

### Color
- **단 하나의 액센트** — `--accent` (테라코타 #B85B3D). 사용처: 알림 뱃지 카운트, 활성 탭 인디케이터, primary CTA 배경, 셀렉션 ring, 손글씨 스크립트, 강조 라벨. **그 외 어디에도 쓰지 않음.**
- **나머지는 모두 종이 + 잉크 스케일.** 보더는 hairline `--line`, 카드 배경은 `--paper-0`, 앱 배경은 `--paper-1`.
- **카테고리 닷**은 채도가 낮은 페이퍼-친화 4색(블러시·세이지·스카이·버터). 채워진 동그란 점으로만 표시. 카드 배경/그라데이션으로 쓰지 않음.
- **그라데이션 금지** (원본의 핑크→오렌지 hero card 같은 풀-블리드 그라데이션은 모두 종이 + 손글씨 헤드라인으로 대체).

### Typography
- **Display:** `Instrument Serif` (Latin) + `Gowun Batang` (Korean). 라이트 가중치, 좁은 트래킹, 최소한의 leading. 환영 헤드라인이나 큰 숫자에만.
- **Body:** `Pretendard` 전 영역. 본문 15px / 1.55, 메타 12px / 1.4.
- **Hand-feel accent:** `Caveat`. 빨간 펜으로 끄적인 듯한 작은 라벨 (`new`, `오늘의 픽`)에만 매우 절제해서 사용.
- **숫자.** 통계(`187 팔로워`)는 본문 폰트 + 600 weight. 큰 카운터(`12,304`)는 디스플레이 세리프.

### Backgrounds
- 메인 배경은 **종이 텍스처** — `--paper-1`에 두 개의 미세한 점 패턴 레이어 (`.pl-paper` 클래스). 거의 보이지 않지만 평면적이지 않은 느낌을 줌.
- **풀-블리드 이미지 금지.** 모든 사진은 라운드 카드 안에 격리. 배경 채움이나 hero 그라디언트는 사용하지 않음.
- 모달/시트는 종이 위에 올라온 또 다른 종이 (`--paper-0`).

### Animation
- **부드러운 ease-out.** `cubic-bezier(.2, .7, .2, 1)`, 200ms 기본.
- **fade + 작은 translateY** (4–8px) 조합. 바운스나 스프링 없음.
- 토스트는 위에서 떨어져서 (translateY -8 → 0) 페이드 인.
- 하트/북마크 액션만 작은 스케일 펄스 (1 → 1.15 → 1, 320ms).

### Hover / Press
- **Hover** (마우스 환경): 카드는 `--paper-2` 배경 또는 `--sh-2 → --sh-3` shadow 강화. 텍스트 링크는 underline.
- **Press** (모바일): `transform: scale(0.97)` + `--sh-inset`. 색상 변화는 primary 버튼만 — `--accent` → `--accent-press`.
- **Disabled:** `opacity: 0.4`, no shadow.

### Borders
- 두께는 **항상 1px** (Retina에서 hairline). 색상 `--line` (~#DCD2BD) 또는 더 옅은 `--line-soft`.
- 분리선은 카드 안 항목 사이에서만. 화면 단위 분리는 여백으로.

### Shadows
- 4단계: `--sh-1` (rest), `--sh-2` (raised card), `--sh-3` (modal), `--sh-lift` (sheet/peek). 모두 **웜 톤** (rgba(76,56,28,...)).
- inner shadow는 press 상태와 input focus에서 사용.
- **컬러 글로우 / 네온 / 리프트 그림자 금지.**

### Layout
- 모바일 414px 기준, 페이지 패딩 `--s-5` (20px). 카드 안쪽 패딩 `--s-4` (16px).
- 바텀 탭바 고정, height 72px. Center FAB는 56×56 종이-검정 원 (`--ink-1`)에 + 아이콘.
- 상단 헤더는 stick, paper-1과 동색이지만 스크롤 시 hairline border 노출.

### Transparency / Blur
- iOS 시트 위 backdrop은 `rgba(31, 26, 20, 0.32)` (다크모드와 무관하게 워밍 블랙).
- **Backdrop blur는 사용하지 않음** — 종이 감성과 충돌. 시트는 항상 견고한 paper 위에.

### Imagery
- 색감: **웜 화이트 밸런스, 약한 그레인.** 푸른 톤 사진은 가능하면 보정 후 사용.
- 모서리: 모든 이미지 카드 `--r-md` (14px).
- 비어 있을 때: `--paper-2` 사각형 + 중앙에 "이미지 없음" 픽토그램 (Lucide `image-off`, ink-3).

### Corner radii
| Token | px | Use |
|---|---|---|
| `--r-xs` | 6 | inline tag, dot wrapper |
| `--r-sm` | 10 | small input, chip |
| `--r-md` | 14 | thumbnail, card image |
| `--r-lg` | 20 | card, sheet content |
| `--r-xl` | 28 | bottom sheet top |
| `--r-pill` | 999 | tab pill, badge, FAB |

### Cards
- 배경 `--paper-0`, border `1px solid var(--line-soft)`, radius `--r-lg`, shadow `--sh-1` (거의 안 보임). hover 시 `--sh-2`.
- **항상 hairline + soft shadow 동시 사용.** 둘 중 하나만 쓰지 않음.

---

## Iconography

### System
- **Lucide** (https://lucide.dev) — 모든 시스템 아이콘. 1.75px stroke, rounded join/cap, 24×24 viewBox.
- 색상은 `currentColor`만 — 컨테이너의 `color: var(--ink-2)` 등을 상속.
- 활성 상태는 stroke를 `--ink-1` 또는 `--accent`로, fill은 사용하지 않음 (예외: 북마크/하트 활성화 시 fill).

> **Substitution flag.** 원본 앱은 emoji 카테고리 픽토그램 (🔥, 👜, 💄, 🍔)과 iOS-style filled 아이콘을 혼용했습니다. Pick Log Design System은 이를 **Lucide outline** 단일 시스템으로 통일했습니다. 만약 사내에 자체 아이콘 세트가 있다면 `assets/icons/`에 SVG 파일을 추가해주세요 — 시스템을 그쪽으로 마이그레이션하겠습니다.

### Logo
- `assets/logo-wordmark.svg` — `Pick·Log` (서체: Instrument Serif + 점 구분자).
- `assets/logo-mark.svg` — 북마크 모양의 단색 마크 (앱 아이콘/파비콘용).
- 로고 색상은 항상 `--ink-1` (페이퍼 위) 또는 `--paper-0` (잉크 위). 액센트 컬러로 칠하지 않음.

### Emoji & unicode
- **시스템 UI에는 사용하지 않음.** 단, 사용자가 폴더명·노트에 입력한 emoji는 그대로 렌더링.
- D-Day, 단위(`개`, `명`)는 텍스트로.

### Illustration
- 빈 상태(empty state)는 **얇은 라인 일러스트 + 작은 손글씨 라벨**. 일러스트는 Lucide의 큰 사이즈 아이콘 한두 개를 조합 (예: `bookmark` + `sparkles`). 채색 일러스트나 3D 캐릭터는 사용하지 않음.
- 추후 브랜드 일러스트가 생기면 `assets/illustrations/`에 추가.

---

## Iteration notes / Caveats

- **Fonts**: Instrument Serif와 Gowun Batang을 디스플레이 페어로 채택했습니다. 한글 헤드라인이 너무 손글씨 느낌이라면 `Gowun Batang` → `Nanum Myeongjo`로 교체 가능. 폰트 파일은 모두 CDN 로드 — 오프라인/사내 사용을 위한 라이선스 첨부가 필요하면 알려주세요.
- **Icons**: Lucide CDN 기본. 자체 아이콘이 있다면 마이그레이션해드립니다.
- **Logo**: 워드마크/심볼은 placeholder 수준 — 실제 브랜드 로고가 있다면 교체 부탁드립니다.
- **사진**: 카드 썸네일은 placeholder 박스로 남겨뒀습니다. 실제 이미지 톤(웜 화이트 밸런스 권장)이 결정되면 톤 가이드를 추가하겠습니다.

