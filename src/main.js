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

//---------------------------------------
// 스크롤링할때, 홈화면을 투명하게 처리한다.
// <힌트>
// 1. css의 opacity(0~1)를 사용한다.
// 2. home섹션의 높이를 기준으로, y축이 0에 가까워 질수록 opacity = 1 home섹션 높이에 가까워지면 opacity = 0

const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// [자바스크립트 개념]
// ??? : 동일한 스크롤링 이벤트를 왜 한곳에서 처리하지 않음?
// set이라면 한곳에서 처리하는게 맞다.나중에 등록한 이벤트리스너가 이전에 등록한 이벤트리스너를 덮어씌우기 때문이다.
// 하지만 add이다. 우리가 원하는 만큼의 리스너를 여러번 등록할 수 있다. (동일한 이벤트라 할지라도 말이다.) 굳이 복잡하게 한곳에서 여러가지 로직을 처리할 필요가 없다.
// 코드 가독성과 유지보수를 위해서, 따로 처리하는게 좋다.
