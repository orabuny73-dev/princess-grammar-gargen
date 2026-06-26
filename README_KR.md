# Princess Grammar Garden v4 — PWA Installable Personal Version

세아 개인용 영어 문법 게임입니다. 상용 앱스토어 배포가 아니라, 스마트폰 홈 화면에 설치해서 쓰는 PWA 방식입니다.

## v4 업그레이드
- 스마트폰 홈 화면 설치용 PWA 구조 추가
- manifest / service worker / app icon 추가
- 오프라인 캐시 구조 추가
- 초등 기본 수준 단어풀 확장
- 각 라운드 10문제, 7개 이상 맞추면 클리어
- 총 고유 단어 약 932개
- 진행률/보석/별 저장

## PC 테스트
`index.html`을 더블클릭하면 PC 브라우저에서 바로 확인할 수 있습니다.

## 스마트폰 설치
PWA 설치는 보통 `file://`로 직접 열면 제한이 있습니다. 스마트폰 홈 화면에 설치하려면 이 폴더 전체를 HTTPS 웹공간에 올려야 합니다.

방법:
1. ZIP 압축을 풉니다.
2. 폴더 전체를 GitHub Pages, Netlify, Vercel 같은 정적 호스팅에 업로드합니다.
3. 스마트폰에서 주소를 엽니다.
4. Android Chrome: Install app 또는 Add to Home screen
5. iPhone Safari: Share → Add to Home Screen
