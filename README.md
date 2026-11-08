# 하이마트 안산선부점 온라인 체험관

3D로 걷는 전문관(대형가전 · 생활주방 · 모바일 모토피아) 웹페이지입니다.

## 파일
- `index.html` — 페이지 전체(부스·링크 데이터는 파일 위쪽 `LANDING`, `HALLS`, `TALK` 부분에서 수정)
- `store.jpg` — 첫 화면 매장 전경
- `motopia.jpg` — 모토피아 로고
- `NEW_STORE_GUIDE.md` — 다른 매장 체험관을 만들 때 쓰는 복제 가이드

## GitHub Pages로 배포
1. GitHub에서 새 저장소 만들기 (예: `ansan-3d-showroom`, Public)
2. 이 폴더의 파일 3개를 그대로 업로드 (Add file → Upload files)
3. Settings → Pages → Branch를 `main` / `(root)`로 저장
4. 1~2분 뒤 `https://<아이디>.github.io/ansan-3d-showroom/` 주소로 열림

전문관 바로가기: 주소 뒤에 `#major`, `#living`, `#mobile`

## 누적 체험 고객 실시간 카운터 (선택)
`counter-apps-script.gs` 파일 맨 위 설명대로 구글 Apps Script에 붙여넣고 웹 앱으로 배포한 뒤,
나온 주소를 `index.html` 위쪽 `COUNTER` 의 `url:""` 안에 넣으면 모든 방문자의 입장이 합산돼요.
주소를 넣기 전에는 각 휴대폰 안에서만 숫자가 올라가요.
