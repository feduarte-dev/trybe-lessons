// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// emailListInData.forEach((email) => {
// console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
// });


// const numbers = [19, 21, 30, 3, 45, 22, 15];

// numbers.find((number) => number % 3 === 0 && number % 5 === 0);
// console.log(numbers.find((number) => number % 3 === 0 && number % 5 === 0));


// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// names.find((name) => name.length === 5);
// console.log(names.find((name) => name.length === 5));

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// musicas.find((musica) => musica.id === '31031685');
// console.log(musicas.find((musica) => musica.id === '31031685'));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//  return arr.some((index) => index === name);
// };

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];


const verifyAges = (array, idade) => {
  return array.every((obj) => obj.age >= idade)

};
 
console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));