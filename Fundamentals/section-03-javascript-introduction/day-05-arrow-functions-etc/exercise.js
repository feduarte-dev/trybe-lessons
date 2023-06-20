//Faça uma função que imprima a idade de 30 a 40 anos no console.
function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log(`Idade dentro do for: ${idade}`);
  }
}
imprimeIdade();

//Troque os valores de um objeto.
const pessoa = {
  nome: 'Henri',
  idade: 20,
};

pessoa.nome = 'Luna';
pessoa.idadae = 19;

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);

//Concatene os nomes para dar boas-vindas.
const name = 'Adriana';
const lastName = 'Soares';
console.log('Olá' + ',' + name + ' ' + lastName + '!');

//Faça uma função que some
function soma(a, b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a, b));
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a, b)}`);

//Faça uma função que retorne números aleatórios
const randomNumber = () => Math.random();

console.log(randomNumber());

//Faça uma função que dê boas-vindas.
const greeting = (nome) => `Olá, ${nome}!`;

let nome = 'Ivan';
console.log(greeting(nome));

//Faça uma função que retorne o nome e sobrenome concatenado
const fullName = (nome, sobrenome) => `${nome} ${sobrenome}`;

//let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(fullName(nome, sobrenome));

//Faça uma função que verifica se a velocidade do carro ultrapassou o limite.
let speed = 190;
const speedCar = (speed) =>
  speed >= 120
    ? `Você ultrapassou o limite de velocidade`
    : `Você está na velocidade permitida`;
console.log(speedCar(speed));
