const btn = document.querySelector(".header__btn-toggle");
const headerList = document.querySelector(".header__list");

btn.addEventListener("click", function () {
  headerList.classList.toggle("header__list-show");
});
