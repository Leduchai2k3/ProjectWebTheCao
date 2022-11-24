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

const chooseTagDetail = document.querySelector(".choose_tag_detail");
const chooseCode = document.querySelector(".choose_code");
const priceCodeDetail = document.querySelector(".price_code_detail");
const priceCode = document.querySelector(".price_code");
const itemPriceCode = priceCode.querySelectorAll("p");
const btnif = document.querySelector(".btnif");
const btnifContent = document.querySelector(".btnif_content");
const ifChooseCode = document.querySelector(".if_choose_code");
const itemifChooseCode = ifChooseCode.querySelectorAll("p");
const btn1 = document.querySelector(".btn1");
const ifPriceCode = document.querySelector(".if_price_code");
const itemifPriceCode = ifPriceCode.querySelectorAll("p");
const itemChooseCode = chooseCode.querySelectorAll("p");
const chooseContent = document.querySelector(".choose_content");
const priceCodeContent = document.querySelector(".price_code_content");
const btn1CodeContent = document.querySelector(".btn1_code_content");

[...itemChooseCode].forEach((item) => {
  item.addEventListener("click", () => {
    chooseContent.textContent = item.textContent;
    btnifContent.textContent = item.textContent;
  });
});

[...itemPriceCode].forEach((item) => {
  item.addEventListener("click", () => {
    priceCodeContent.textContent = item.textContent;
    btn1CodeContent.textContent = item.textContent;
  });
});
[...itemifChooseCode].forEach((item) => {
  item.addEventListener("click", () => {
    btnifContent.textContent = item.textContent;
  });
});

[...itemifPriceCode].forEach((item) => {
  item.addEventListener("click", () => {
    btn1CodeContent.textContent = item.textContent;
  });
});

chooseTagDetail.addEventListener("click", () => {
  chooseCode.classList.toggle("hide_code");
  chooseTagDetail.classList.toggle("avtive_btn");
});

priceCodeDetail.addEventListener("click", () => {
  priceCode.classList.toggle("hide_code");
  priceCodeDetail.classList.toggle("avtive_btn");
});

btnif.addEventListener("click", () => {
  ifChooseCode.classList.toggle("hide_code");
  btnif.classList.toggle("avtive_btn");
});
btn1.addEventListener("click", () => {
  ifPriceCode.classList.toggle("hide_code");
  btn1.classList.toggle("avtive_btn");
});
