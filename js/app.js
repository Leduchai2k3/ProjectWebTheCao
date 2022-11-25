function addInfo(item) {
  var div = document.createElement("div");
  // div.classList.add("info");
  div.setAttribute("class", "info");
  div.innerHTML = `
<button class="btnif"><span class="btnif_content"
          style="font-size: 1.2rem;">Viettel</span>
              <i class="fa-solid fa-angle-down"></i>
                <div class="if_choose_code hide_code">
                   <p>Viettel</p>
                    <p>Vinaphone</p>
                     <p>Mobifone</p>
                    <p>Vietnammobile</p>
                    <p>Zing</p>
                    <p>Garena</p>
                    <p>Gata</p>
                    <p>Vcoin</p>
                            </div>
                        </button>
                        <button class="btn2"><input type="text" placeholder="Mã thẻ"></button>
                        <button class="btn2"><input type="text" placeholder="Serial thẻ"></button>
                        <button class="btn1"><span class="btn1_code_content"
                                style="font-size: 1.2rem;">Chọn mệnh giá</span>
                            <i class="fa-solid fa-angle-down"></i>
                            <div class="if_price_code hide_code">
                                <p>20.000đ</p>
                                <p>30.000đ</p>
                                <p>50.000đ</p>
                                <p>100.000đ</p>
                                <p>200.000đ</p>
                                <p>300.000đ</p>
                                <p>500.000đ</p>
                                <p>1000.000đ</p>
                            </div>
                        </button>
                        <button class="remove"><i class="fa-solid fa-trash"></i>
                            <p>Xóa</p></button>`;
  // const remove = document.querySelectorAll(".remove");
  // [...remove].forEach((item) => {
  //   item.addEventListener("click", () => {
  //     console.log(this);
  //   });
  // });
  content.appendChild(div);
}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu = $("#menu");
const nav = $(".nav");
const close = $(".close");
const header = $(".header");
const slide = $(".slide");
const content = $("#content");
const footer = $(".footer");
const subContent = $(".sub_content");
const add = $(".add");
// add.addEventListener("click", () => {
//   addInfo();
// });

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

const chooseTagDetail = $(".choose_tag_detail");
const priceCodeDetail = $(".price_code_detail");
const btn1CodeContent = $(".btn1_code_content");

const btnif = $$(".btnif");

const btn1 = $$(".btn1");
const ifPriceCode = $(".if_price_code");
const itemifPriceCode = ifPriceCode.querySelectorAll("p");

const btnifContent = $(".btnif_content");
const ifChooseCode = $(".if_choose_code");
const itemifChooseCode = ifChooseCode.querySelectorAll("p");

const priceCodeContent = $(".price_code_content");
const priceCode = $(".price_code");
const itemPriceCode = priceCode.querySelectorAll("p");

const chooseContent = $(".choose_content");
const chooseCode = $(".choose_code");
const itemChooseCode = chooseCode.querySelectorAll("p");
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

[...btnif].forEach((e) => {
  e.addEventListener("click", () => {
    ifChooseCode.classList.toggle("hide_code");
    e.classList.toggle("avtive_btn");
  });
});

[...btn1].forEach((e) => {
  e.addEventListener("click", () => {
    ifPriceCode.classList.toggle("hide_code");
    e.classList.toggle("avtive_btn");
  });
});
