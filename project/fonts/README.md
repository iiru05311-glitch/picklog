# Fonts

All fonts are loaded from CDN — see `colors_and_type.css` for `@import` URLs.

| Family | Use | Source | License |
|---|---|---|---|
| **Pretendard** | Body, UI, all general text (KR + Latin) | jsDelivr (orioncactus/pretendard v1.3.9) | SIL Open Font License 1.1 |
| **Gowun Batang** | Korean display / serif headlines | Google Fonts | SIL Open Font License 1.1 |
| **Instrument Serif** | Latin display partner (italic accents) | Google Fonts | SIL Open Font License 1.1 |
| **Caveat** | Sparing handwritten accent (`pl-hand`) | Google Fonts | SIL Open Font License 1.1 |

## Substitution flag

**브랜드 디스플레이 폰트**: 사용자가 `Cafe24Ssurround Air` (`Cafe24SsurroundAir-v1.1.otf`) 를 업로드해주셨습니다. 다만 업로드된 파일이 macOS 리소스 포크(`._...otf`, 319 bytes)만 포함되어 있어 실제 OTF 파일을 읽을 수 없습니다.

→ **임시 대체**: 같은 계열(둥글고 따뜻한 한글 sans)인 **Gowun Dodum** (Google Fonts) 으로 폴백 처리했습니다. 토큰 파일에서 `--font-display` 의 첫 번째 값으로 `"Cafe24Ssurround Air"` 가 등록되어 있으므로, OTF 파일이 정상적으로 첨부되어 `@font-face` 로 등록되면 자동으로 우선 적용됩니다.

→ **다음 단계**: OTF/TTF 원본 파일을 다시 업로드해주세요. 받는 즉시 `@font-face` 블록을 추가하고, Cafe24Ssurround Air 가 시스템 전체 디스플레이 폰트로 적용됩니다.

본문 폰트는 원본 스크린샷의 Apple SD Gothic Neo 계열 톤을 유지하기 위해 **Pretendard** 를 그대로 사용합니다.

## Self-host

배포 환경에서 CDN을 쓰지 않을 경우, 다음 ttf/woff2를 받아서 `fonts/` 안에 넣고 `colors_and_type.css`의 `@import`를 `@font-face`로 교체하세요:

- Pretendard: https://github.com/orioncactus/pretendard/releases (Pretendard-Regular.woff2, -SemiBold.woff2, -Bold.woff2)
- Gowun Batang: https://fonts.google.com/specimen/Gowun+Batang
- Instrument Serif: https://fonts.google.com/specimen/Instrument+Serif
- Caveat: https://fonts.google.com/specimen/Caveat
