// 페이지 아래 스크롤시,Header에 다크스타일링을 적용한다.
// <힌트>
// 1. 헤더 요소를 가지고 온다.
// 2. 헤더 높이 측정
// 3. if (y좌표 > 높이) 다크모드로 변경 (클래스 이름 변경)

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
// const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// [자바스크립트 개념]
// window : 브라우저에서 제공하는 기본적인 글로벌 객체
// document : 현재 문서에대한 정보와, API가 담겨있다.

// addEventListener : 콜백함수 등록
// -> 여기서는 스크롤 이벤트가 발생할 때마다 호출한다.
// -> 콜백함수 지정할 때, 람다함수 사용 하는듯함.

// offsetHeight : 요소의 정수 높이를 반환한다.
// getBoundingClientRect().height : 요소의 소수점을 포함한 정확한 높이를 반환한다.
