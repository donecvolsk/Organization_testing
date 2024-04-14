export default function paymentSystem(el) {
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
      document
        .querySelector(".diners_club")
        .classList.replace("card", "cardActiv");
      break;
    case "51":
    case "52":
    case "53":
    case "54":
    case "55":
      document.querySelector(".master").classList.replace("card", "cardActiv");
      break;
    case "65":
      document
        .querySelector(".discover")
        .classList.replace("card", "cardActiv");
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
      document
        .querySelector(".diners_club")
        .classList.replace("card", "cardActiv");
      break;
    default:
      break;
  }

  const fourDigits = el.slice(0, 4);
  switch (fourDigits) {
    case "6011":
      document
        .querySelector(".discover")
        .classList.replace("card", "cardActiv");
      break;
    default:
      break;
  }
}
