// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

const preventHREF = (event) => {
  event.preventDefault();
};
hrefLink.addEventListener("click", preventHREF);

const preventCheckbox = (event) => {
  event.preventDefault();
};
inputCheckbox.addEventListener("click", preventCheckbox);

const preventInputText = (event) => {
  if (event.key !== "a") {
    event.preventDefault();
  }
};

inputText.addEventListener("keypress", preventInputText);
