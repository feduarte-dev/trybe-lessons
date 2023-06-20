//Faça uma função que substitui o X pela string do parâmetro.
function substituaX(nome) {
  const frase = 'Tryber x aqui';
  const arrayFrase = frase.split(' ');
  for (let index = 0; index < arrayFrase.length; index += 1) {
    if (arrayFrase[index] === 'x') {
      arrayFrase[index] = nome;
    }
  }
  let fraseCompleta = arrayFrase.join(' ');
  return fraseCompleta;
}

//Faça uma função que concatene os itens de um array.
function minhasSkills(fraseCompleta) {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  let bio = `${fraseCompleta}
Minhas três principais habilidades são:
${skills[0]}
${skills[1]}
${skills[2]}`;
  return bio;
}

console.log(minhasSkills(substituaX('felipe')));
