// Faça uma função que ligue e desligue um motor
const motorSwitch = () =>
  turnOn === true ? (turnOn = false) : (turnOn = true);
let turnOn = false;
console.log(motorSwitch());

//Faça uma função que calcule a área de um círculo e que recebe o raio como parâmetro
const areaCirculo = (raio) => pi * (raio * raio);
const pi = 3.14;

console.log(areaCirculo(10));

//Faça uma função que retorna a maior palavra dentro de uma string.
function longestWord(frase) {
  const palavras = frase.split(' ');
  let maiorPalavra = '';
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index].length > maiorPalavra.length) {
      maiorPalavra = palavras[index];
    }
  }

  console.log(maiorPalavra);
}

longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu');
