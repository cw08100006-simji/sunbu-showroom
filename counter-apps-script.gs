/**
 * 안산선부점 3D 체험관 · 누적 체험 고객 카운터 (구글 Apps Script)
 *
 * 설치 방법
 * 1. script.google.com 접속 → [새 프로젝트]
 * 2. 기본 코드를 모두 지우고 이 파일 내용을 붙여넣기 → 저장
 * 3. 오른쪽 위 [배포] → [새 배포] → 유형 선택(톱니바퀴)에서 [웹 앱]
 *    - 실행 사용자: 나
 *    - 액세스 권한: 모든 사용자
 * 4. [배포] → 권한 승인 → 나오는 "웹 앱 URL"을 복사
 * 5. index.html 위쪽 COUNTER 의 url:"" 따옴표 안에 붙여넣기
 *
 * 동작
 *  - ?hit=1 : 입장 1명 추가 후 현재 누적 수를 돌려줌
 *  - ?hit=0 : 숫자만 확인 (20초마다 화면 갱신용)
 *  - 화면에는 index.html 의 시작값(base, 80) + 이 숫자가 표시돼요.
 */
function doGet(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(5000);
  try {
    var props = PropertiesService.getScriptProperties();
    var n = Number(props.getProperty('visits') || 0);
    if (e && e.parameter && e.parameter.hit === '1') {
      n += 1;
      props.setProperty('visits', String(n));
    }
    return ContentService
      .createTextOutput(JSON.stringify({ count: n }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/** 숫자를 0으로 되돌리고 싶을 때 편집기에서 이 함수를 선택해 [실행] */
function resetCount() {
  PropertiesService.getScriptProperties().setProperty('visits', '0');
}
