// бургер-меню по клику
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header__nav--active");
  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
  });
});

// показать больше в блоке articles
const btnMore = document.querySelector(".articles-more");
const articlesItems = document.querySelectorAll(".articles__item");

btnMore.addEventListener("click", () => {
  articlesItems.forEach((element) => {
    element.classList.add("articles__item-visible");
  });

  btnMore.closest(".articles-center").classList.add("articles-center--hidden");
});

// таб по ховеру на карточки services
let tabServices = document.querySelectorAll(".services__item");
let tabText = document.querySelectorAll(".services__hide-block");

tabServices.forEach((el) => {
  el.addEventListener("mouseover", function (e) {
    const path = e.currentTarget.dataset.path;

    tabServices.forEach(function (item) {
      item.classList.remove("services__item-active");
    });
    e.currentTarget.classList.add("services__item-active");

    tabText.forEach(function (element) {
      element.classList.remove("services__hide-block-active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("services__hide-block-active");
  });
});
