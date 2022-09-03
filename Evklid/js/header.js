//работа бургера
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav");
const menuLinks = document.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("stop-scroll")
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("active");
    menu.classList.remove("active");
  document.body.classList.remove("stop-scroll")
  });
});

//работа формы поиска
const openBtn = document.querySelector(".header__search-button");
const visibleForm = document.querySelector(".header__form");
openBtn.addEventListener("click", () => {
  visibleForm.classList.add("active"); // добавляем форме класс для отображения
});

const closeBtn = document.querySelector(".header__form-closed");
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  visibleForm.classList.remove("active"); // закрыть форму поиска
})