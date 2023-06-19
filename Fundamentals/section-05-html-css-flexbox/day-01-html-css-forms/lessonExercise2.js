// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

// Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método preventDefault para prevenir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
const preventHREF = (event) => {
  event.preventDefault();
};
hrefLink.addEventListener("click", preventHREF);

// Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método preventDefault para prevenir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
const preventCheckbox = (event) => {
  event.preventDefault();
};
inputCheckbox.addEventListener("click", preventCheckbox);

// Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método preventDefault de forma que somente o caractere a (letra “a” minúscula) possa ser digitado na caixinha.
const preventInputText = (event) => {
  if (event.key !== "a") {
    event.preventDefault();
  }
};

inputText.addEventListener("keypress", preventInputText);
