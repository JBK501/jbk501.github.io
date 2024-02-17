"use strict";

//---------------------------------------
// 프로젝트 필터링관련 로직 처리

/*
1. 카테고리 컨테이너를 가져온다.
2. 프로젝트 목록 전체를 가져온다. 
3. 카테고리 버튼이 클릭되었을때
 3.1. 프로젝트의 카테고리 데이터를 가져온다.
 3.2. 프로젝트 개수만큼 반복한다.
  3.2.1. 카테고리 버튼 데이터가 All 이거나 카테고리 버튼 데이터와 프로젝트 데이터가 일치하면
   3.2.1.1. 프로젝트를 표시한다.
  3.2.2. 일치하지 않으면
   3.2.2.1. 프로젝트를 표시하지 않는다.
*/

const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

categories.addEventListener("click", (event) => {
  const filter = event.target.dataset.category; // 카테고리 목록->클릭한 버튼->커스텀데이터
  if (filter == null) {
    return;
  }

  HandleActiveSelection(event.target);
  FilterProjects(filter);
});

function HandleActiveSelection(target) {
  // Active메뉴를 재설정
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function FilterProjects(filter) {
  // 프로젝트 필터링
  projects.forEach((project) => {
    if (filter === "all" || filter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });

  // 애니메이션
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 250);
}

/*
[자바스크립트 개념]
querySelectorAll : 해당 선택자에 매칭되는 모든 요소들을 가져온다.
-> 여기서는 순회해서 데이터를 가져오면서, 카테고리 커스텀데이터와 비교해야하기 때문에 사용했음. 

(event) : 콜백함수에 이벤트가 발생하면, 해당 이벤트에 해당하는 객체를 첫번째 인자에 전달한다.
target : 클릭이된 html요소가 나온다.
target.dataset : html에서 추가한 커스텀데이터

setTimeout() : 지정한 시간 이후에, 원하는 함수를 실행한다. 

콜백함수 수행개념
코드들이 전부 수행이 된후, 브라우저에 한번에 업데이트 된다. 
*/

//---------------------------------------
// 현재 보여지는 Section별로 Active메뉴를 설정한다.
// Item, 화살표 클릭 시 자연스러운 화면 스크롤링

/*
[자바스크립트 개념]
<InterSectionObserver연습파일 참고.





*/
