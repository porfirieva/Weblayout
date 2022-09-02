document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".accordion__list", {
    duration: 700,
    elementClass: "accordion__item",
    triggerClass: "accordion__top",
    panelClass: "accordion__bottom",
  });
});
