// Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
});

// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(numbers.find((number) => number % 3 === 0 && number % 5 === 0));

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
// const names = ['João', 'Irene', 'Fernando', 'Maria']; <<< Retirar comentário para o código funcionar!!

names.find((name) => name.length === 5);
console.log(names.find((name) => name.length === 5));

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

musicas.find((musica) => musica.id === '31031685');
console.log(musicas.find((musica) => musica.id === '31031685'));

// A função hasName é responsável por verificar se o nome da pessoa está ou não na lista. Essa função recebe dois parâmetros: arr, que é o array com o nome das pessoas convidadas, e name, que é o nome a ser verificado na lista de convidados (array names).

// Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false.
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((index) => index === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

// Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;

// Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (array, idade) => {
  return array.every((obj) => obj.age >= idade);
};

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));
