const modalBackgroundColor = document.querySelector(".modalBackgroundColor");
const modalContainer = document.querySelector(".modalContainer");
const scrollButton = document.querySelector(".scrollButton");
const sideBar = document.querySelector(".sideBar");
const cards = document.querySelectorAll(".card");
const cardsContainer = document.querySelectorAll(".cardsContainer");
const modalImg = document.querySelector(".modalImg");
const modalTitle = document.querySelector(".modalTitle");
const modalContent = document.querySelector(".modalContent");
const body = document.querySelector("body");
const darkModeButton = document.querySelector(".darkModeButton");

window.addEventListener("DOMContentLoaded", () => {
  cards.forEach((card) => card.addEventListener("click", toggleModal));
  document.documentElement.setAttribute("color-theme", "light");
});

////화면을 누를 때 닫힌다.
const outerClick = (e) => {
  if (e.target === modalBackgroundColor) {
    modalContainer.classList.remove("visible");
    modalBackgroundColor.classList.remove("visible");
    sideBar.classList.remove("visible");
    body.style.overflow = "auto";
  }
};

const toggleModal = (e) => {
  if (modalContainer.classList.contains("visible")) {
    modalContainer.classList.remove("visible");
    modalBackgroundColor.classList.remove("visible");
    body.style.overflow = "auto";
    document.removeEventListener("click", outerClick);
  } else {
    // 보일떄
    ///모달 컨테이너와 모달 백그라운드에 visible을 추가한다.
    modalContainer.classList.add("visible");
    modalBackgroundColor.classList.add("visible");
    body.style.overflow = "hidden";
    const targetImg = e.currentTarget.children[0].src;
    const targetTitle = e.currentTarget.children[1].innerText;
    const targetContent = e.currentTarget.children[2].innerText;
    modalImg.src = targetImg;
    modalTitle.innerText = targetTitle;
    modalContent.innerText = targetContent;
    document.addEventListener("click", outerClick);
  }
};

const checkScroll = () => {
  let pageOffset = window.scrollY;
  if (pageOffset > 100) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// document.addEventListener("scroll", () => {
//   let pageOffset = window.scrollY;
//   // console.log(pageOffset, "<pageOffset");
//   if (pageOffset > 100) {
//     scrollButton.classList.add("visible");
//   } else if (pageOffset === 0) {
//     scrollButton.classList.remove("visible");
//   }
// });

////이 함수가 호출될때는?

//1.관찰대상이 root와 교차할 때
// 2. observer가 최초로 타겟 관측하도록 요청받을때마다
let 교차될때실행함수 = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry, "entry");
    if (entry.isIntersecting) {
      scrollButton.classList.add("visible");
    } else {
      scrollButton.classList.remove("visible");
    }
  });
  // let move = entry.isIntersecting;
  // if (!move) {
  //   scrollButton.classList.remove("visible");
  //   console.log("??");
  // } else {
  //   scrollButton.classList.add("visible");
  //   console.log("~");
  // }
};

const test = () => {};

let options = {
  root: null,
  rootMargin: "10px",
  threshold: 0.5,
};
let observer = new IntersectionObserver(교차될때실행함수, options);

// console.log(observer, "<observer");

let 관찰대상 = observer.observe(cards[7]);
// document.addEventListener("scroll", () => {
//   let pageOffset = window.scrollY;
//   // console.log(pageOffset, "<pageOffset");
//   if (pageOffset > 100) {
//     test();
//   } else if (pageOffset === 0) {
//     // scrollButton.classList.remove("visible");
//   }
// });

darkModeButton.addEventListener("click", () => {
  if (darkModeButton.innerText === "light_mode") {
    darkModeButton.innerText = "dark_mode";
    document.documentElement.setAttribute("color-theme", "dark");
  } else {
    darkModeButton.innerText = "light_mode";
    document.documentElement.setAttribute("color-theme", "light");
  }
});

const toggleMenu = () => {
  if (sideBar.classList.contains("visible")) {
    modalBackgroundColor.classList.remove("visible");
    sideBar.classList.remove("visible");
    document.removeEventListener("click", outerClick);
  } else {
    modalBackgroundColor.classList.add("visible");
    sideBar.classList.add("visible");
    document.addEventListener("click", outerClick);
  }
};
