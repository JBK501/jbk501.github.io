// 구현계획
// 1. 모든 섹션요소들과 메뉴 아이템을 가져온다.
// 2, IntersectionOeserver를 사용해서 가져온 요소들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 섹션
// - 다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션을 선택한다.
// - 마지막 contact섹션이 보여진다면, 가장 마지막 섹션을 선택한다.

// 아이디를 기준으로 섹션과 메뉴아이템을 가져온다.
const selectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonial",
  "#contact",
];

const sections = selectionIds.map((id) => document.querySelector(id));
const navItems = selectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = selectionIds.map(() => false); // 섹션아이디 요소와 길이랑 일치해야함. 그래서 매핑함.
let activeNavItem = navItems[0];

const options = {
  rootMargin: "-20% 0px 0px 0px",
  threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  entries.forEach((entry) => {
    const index = selectionIds.indexOf(`#${entry.target.id}`); //보여지는 섹션의 인덱스 정보를 가져온다.
    visibleSections[index] = entry.isIntersecting; // 현재 요소가 보여지는지 여부를 저장한다.

    // 마지막 섹션인지 여부를 구한다.
    selectLastOne =
      index === selectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;

    // console.log(entry.target.id);
    // console.log(entry.isIntersecting);
  });

  // console.log(visibleSections);
  // console.log("무조건 마지막 섹션!", selectLastOne);

  // 활성화 시킬 메뉴아이템의 위치를 구한다.
  const navIndex = selectLastOne
    ? selectionIds.length - 1
    : findIntersecting(visibleSections);
  // console.log("타깃 인덱스 아이디", sections[navIndex]);

  // 현재 메뉴를 활성화 한다.
  SelectNavItem(navIndex);
}

function findIntersecting(visibleSections) {
  const index = visibleSections.indexOf(true);
  return index >= 0 ? index : 0;
}

function SelectNavItem(navIndex) {
  const navItem = navItems[navIndex];
  if (!navItem) return;
  activeNavItem.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}
