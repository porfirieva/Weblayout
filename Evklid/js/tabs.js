// секция табов в блоке шаги
const tabSteps = document.querySelectorAll(".steps-content__item");
const tabContent = document.querySelectorAll(".steps-descr__item");
const tabImg = document.querySelectorAll(".steps-descr__img");

tabSteps.forEach((el) => {
  el.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabSteps.forEach(function (element) {
      element.classList.remove("active");
    });

    tabContent.forEach(function (element) {
      element.classList.remove("active");
    });

    tabImg.forEach(function (element) {
      element.classList.remove("active");
    });

    e.currentTarget.classList.add("active");
    document.querySelectorAll(`[data-target="${path}"]`).forEach(function (el) {
      el.classList.add("active");
    });
  });
});
