// let phone = document.querySelector("input[type='tel']");
// var im = new Inputmask("+7 (999) 999-99-99");
// im.mask(phone);

// const validation = new JustValidate("#form");

// validation
//   .addField("#name", [
//     {
//       rule: "reqiered",
//       errorMessage: "Вы не ввели имя",
//     },
//   ])
//   .addField("#email", [
//     {
//       rule: "required",
//       errorMessage: "Вы не ввели e-mail",
//     },
//     {
//       rule: "email",
//       errorMessage: "Некорректный e-mail",
//     },
//   ])
//   .addField("#tel", [
//     {
//       rule: "required",
//       errorMessage: "Вы не ввели телефон",
//     },
//   ]);

let phone = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(phone);

new window.JustValidate(".form", {
  colorWrong: "#FF5C00",
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const ph = phone.inputmask.unmaskedvalue();
        return Number(ph) && ph.length === 10;
      },
    },
  },
  messages: {
    email: {
      required: "Вы не ввели e-mail",
    },
    name: "Вы не ввели имя",
    tel: {
      required: "Вы не ввели телефон",
      function: "Не достаточно количество символов",
    },
  },
});
