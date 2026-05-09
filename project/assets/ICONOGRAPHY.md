# Icons

Pick Log uses **[Lucide](https://lucide.dev)** as its single icon system. Load via CDN:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="bookmark"></i>
<script>lucide.createIcons();</script>
```

## Rules
- Stroke width: `1.75` (slightly heavier than default for warmth).
- Color: always `currentColor` — inherit from container's `color`.
- Active state: change container `color` to `var(--ink-1)` or `var(--accent)`. Don't fill.
- Exceptions: `bookmark` and `heart` may use `fill="currentColor"` when "saved/liked" state is active.

## Common mappings

| Pick Log concept | Lucide name |
|---|---|
| 홈 / Home | `house` |
| 검색 / Search | `search` |
| 저장 (FAB) | `plus` |
| 보관함 / Library | `bookmark` |
| 마이 / Profile | `user-round` |
| 알림 | `bell` |
| 폴더 수정 | `pencil` |
| 더보기 | `more-horizontal` |
| 좋아요 | `heart` |
| 공유 | `share` |
| 링크 | `link` |
| 설정 | `settings` |
| 닫기 | `x` |

## Substitution flag

원본 스크린샷에는 emoji (`🔥 저장 랭킹`, `🛍️ Pick-Log에 오신 걸 환영해요!`) 와 카테고리 이모지 (`💄 뷰티`, `👗 패션`, `📦 식품`)가 사용되었습니다. 새 디자인 시스템에서는:

- **시스템 라벨의 emoji** → 모두 제거 (`저장 랭킹`만)
- **카테고리 표시** → 색상 닷(`--cat-fashion` 등)으로 대체
- **장식용 이모지** → 손글씨 폰트(`Caveat`)의 짧은 메모로 대체

자체 아이콘 세트가 있다면 `assets/icons/` 안에 SVG 파일을 추가해주세요. 예: `bookmark.svg`, `home.svg` 등.
