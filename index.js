const modalBackgroundColor = document.querySelector(".modalBackgroundColor");
const modalContainer = document.querySelector(".modalContainer");
const scrollButton = document.querySelector(".scrollButton");
const sideBar = document.querySelector(".sideBar");
const cards = document.querySelectorAll(".card");
const modalImg = document.querySelector(".modalImg");
const modalTitle = document.querySelector(".modalTitle");
const modalContent = document.querySelector(".modalContent");
const body = document.querySelector("body");
const darkModeButton = document.querySelector(".darkModeButton");

window.addEventListener("DOMContentLoaded", () => {
  cards.forEach((card) => card.addEventListener("click", toggleModal));
  document.documentElement.setAttribute("color-theme", "light");
});

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

document.addEventListener("scroll", () => {
  let pageOffset = window.scrollY;
  if (pageOffset > 100) {
    scrollButton.classList.add("visible");
  } else if (pageOffset === 0) {
    scrollButton.classList.remove("visible");
  }
});

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
