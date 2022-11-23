const menu = document.querySelector("#menu");
const nav = document.querySelector(".nav");
const close = document.querySelector(".close");
const header = document.querySelector(".header");
const slide = document.querySelector(".slide");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");

function navHide() {
  nav.classList.remove("nav_show");
}
menu.addEventListener("click", () => {
  nav.classList.add("nav_show");
  nav.classList.remove("nav_hide");
});

close.addEventListener("click", () => {
  nav.classList.add("nav_hide");
  nav.classList.remove("nav_show");
});

header.addEventListener("click", navHide);
slide.addEventListener("click", navHide);
content.addEventListener("click", navHide);
footer.addEventListener("click", navHide);
