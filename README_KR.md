# Princess Grammar Garden v5 Deluxe

## 핵심 업그레이드
- Sia 이름 발음 보정: 화면에는 Sia, 음성은 See-ah로 읽음
- v4보다 나은 SVG 공주/궁전/문법방 그래픽 추가
- MP3 음성 우선 재생 구조 추가
- MP3가 없으면 브라우저 TTS fallback
- PWA 설치형 구조 유지
- 단어풀: 총 고유 단어 약 875개
- 라운드 10문제 / 7개 이상 클리어

## 사람 같은 공주 목소리로 바꾸는 방법
`audio` 폴더에 아래 파일명을 가진 MP3를 넣으면 브라우저 TTS 대신 MP3가 먼저 재생됩니다.

- hello.mp3
- wonderful.mp3
- try_again.mp3
- room_cleared.mp3
- palace_unlocked.mp3

현재 패키지에는 실제 MP3 음성 파일은 포함되어 있지 않습니다. 대신 구조는 이미 준비되어 있습니다.

## 스마트폰 설치
GitHub Pages / Netlify / Vercel 같은 HTTPS 정적 호스팅에 폴더 전체를 올린 뒤:
- Android Chrome: Install app
- iPhone Safari: Share → Add to Home Screen
