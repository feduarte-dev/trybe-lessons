// Faça os exercícios de fixação a seguir para consolidar os conhecimentos adquiridos! 😉

// Crie uma variável player e atribua a ela um objeto que contenha as variáveis listadas na sequência.

// Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e concatene as informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

// Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa chave um array que contenha as datas em que a jogadora Marta foi considerada a melhor do mundo.

// Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

// Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
  golden: 2,
  silver: 3}
};

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player.name);
console.log(player.lastName);
console.log(player.age);
console.log("A jogadora " + player.name + " tem " + player.age + " anos de idade.");
console.log(player['bestInTheWorld']);
console.log("A jogadora" + player.name + ' ' + player.lastName + 'foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');
console.log(player.medals);
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.")