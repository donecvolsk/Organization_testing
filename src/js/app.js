import formValidators from "./form/formValidators";

const formElement = document.querySelector(".form-inline");
const Validators = new formValidators(formElement);
Validators.subbmit();
