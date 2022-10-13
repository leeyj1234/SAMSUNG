// HEADER
const BTN_HEADER_PRODUCT = document.querySelector(".product_list");
const CONTENS_HEADER_2DEPTH = document.querySelector(".gnb2depth");

BTN_HEADER_PRODUCT.addEventListener("click", () => {
  CONTENS_HEADER_2DEPTH.classList.toggle("toggle_hide");
});

// MAIN
const BTN_MODAL_SHOW = document.querySelector(".btn_join2");

BTN_MODAL_SHOW.addEventListener("click", () => {
  CONTENS_MODAL_HIDE.classList.toggle("toggle_hide");
});

// FOOTER
const BTN_FOOTER_HIDE = document.querySelector(".btn_inform");
const CONTENS_FOOTER_HIDE = document.querySelector(".hide_inform");

BTN_FOOTER_HIDE.addEventListener("click", () => {
  CONTENS_FOOTER_HIDE.classList.toggle("toggle_hide");
});

// ASIDE - MODAL
const BTN_MODAL_HIDE = document.querySelector(".btn_modal_close");
const CONTENS_MODAL_HIDE = document.querySelector(".modal_wrap");

BTN_MODAL_HIDE.addEventListener("click", () => {
  CONTENS_MODAL_HIDE.classList.toggle("toggle_hide");
});
