/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/paymentSystem/paymentSystem.js
function paymentSystem(el) {
  document.querySelector("#true").classList.add("message-true");
  const oneDigit = el.slice(0, 1);
  switch (oneDigit) {
    case "4":
      document.querySelector(".visa").classList.replace("card", "cardActiv");
      break;
    default:
      break;
  }
  const twoDigits = el.slice(0, 2);
  switch (twoDigits) {
    case "22":
      document.querySelector(".mir").classList.replace("card", "cardActiv");
      break;
    case "34":
    case "37":
      document.querySelector(".amex").classList.replace("card", "cardActiv");
      break;
    case "36":
    case "38":
      document.querySelector(".diners_club").classList.replace("card", "cardActiv");
      break;
    case "51":
    case "52":
    case "53":
    case "54":
    case "55":
      document.querySelector(".master").classList.replace("card", "cardActiv");
      break;
    case "65":
      document.querySelector(".discover").classList.replace("card", "cardActiv");
      break;
    case "35":
      document.querySelector(".jcb").classList.replace("card", "cardActiv");
      break;
    default:
      break;
  }
  const threeDigits = el.slice(0, 3);
  switch (threeDigits) {
    case "300":
    case "301":
    case "302":
    case "303":
    case "304":
    case "305":
      document.querySelector(".diners_club").classList.replace("card", "cardActiv");
      break;
    default:
      break;
  }
  const fourDigits = el.slice(0, 4);
  switch (fourDigits) {
    case "6011":
      document.querySelector(".discover").classList.replace("card", "cardActiv");
      break;
    default:
      break;
  }
}
;// CONCATENATED MODULE: ./src/js/form/formValidators.js

class Form {
  constructor(element) {
    this.element = element;
    this.cardArray = document.querySelectorAll(".card"); //список платежных систем
    this.input = element.querySelector(".form-control"); //поле ввода номера карты
    this.button = element.querySelector(".btn"); //кнопка проверки номера карты
  }

  subbmit() {
    this.element.addEventListener("submit", e => {
      e.preventDefault();
      document.querySelector("#fols").classList.remove("message-fols");
      document.querySelector("#true").classList.remove("message-true");
      this.cardArray.forEach(el => {
        el.classList.replace("cardActiv", "card");
      });
      this.inputValue = this.input.value; //значение поля ввода номера карты

      this.controlNumber(this.inputValue);
    });
  }

  // расчет контрольной суммы номера карты
  controlNumber(numCard) {
    let sum = 0;
    if (numCard.length % 2 === 0) {
      for (let i = 0; i < numCard.length; i++) {
        if (i % 2 === 0) {
          sum += +numCard[i] * 2 > 9 ? +numCard[i] * 2 - 9 : +numCard[i] * 2;
        } else {
          sum += +numCard[i];
        }
      }
    } else {
      for (let i = 0; i < numCard.length; i++) {
        if (i % 2 !== 0) {
          sum += +numCard[i] * 2 > 9 ? +numCard[i] * 2 - 9 : +numCard[i] * 2;
        } else {
          sum += +numCard[i];
        }
      }
    }
    if (sum % 10 === 0) {
      paymentSystem(this.inputValue);
    } else {
      document.querySelector("#fols").classList.add("message-fols");
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const formElement = document.querySelector(".form-inline");
const Validators = new Form(formElement);
Validators.subbmit();
;// CONCATENATED MODULE: ./src/index.js





// TODO: write your code in app.js
/******/ })()
;
//# sourceMappingURL=main.js.map