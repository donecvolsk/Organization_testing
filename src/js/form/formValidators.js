import paymentSystem from "../paymentSystem/paymentSystem";

export default class Form {
  constructor(element) {
    this.element = element;
    this.cardArray = document.querySelectorAll(".card"); //список платежных систем
    this.input = element.querySelector(".form-control"); //поле ввода номера карты
    this.button = element.querySelector(".btn"); //кнопка проверки номера карты
  }

  subbmit() {
    this.element.addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector("#fols").classList.remove("message-fols");
      document.querySelector("#true").classList.remove("message-true");
      this.cardArray.forEach((el) => {
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
