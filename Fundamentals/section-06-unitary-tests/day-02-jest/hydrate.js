// Implemente a função hydrate a partir dos testes a seguir. É importante nunca alterar os testes ou as variáveis já escritas no código.
const hydrate = (string) => {
  let array = string.split('');
  let arrayNumbers = [];
  for (let index = 0; index < array.length; index += 1) {
    if (!isNaN(parseInt(array[index]))) {
      arrayNumbers.push(parseInt(array[index]));
    }
  }
  let sum = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    sum += arrayNumbers[index];
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  } else {
    return `${sum} copos de água`;
  }
};

module.exports = hydrate;
