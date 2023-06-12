// function imprimeIdade() {
//   for (let idade = 30; idade <= 40; idade += 1) {
//     console.log(`Idade dentro do for: ${idade}`)
//   }
// }
// imprimeIdade()

//-------------------------------//

  // const pessoa = {
  //   nome: 'Henri',
  //   idade: 20
  // }

  // pessoa.nome = 'Luna';
  // pessoa.idadae= 19;

  // console.log('Nome:', pessoa.nome);
  // console.log('Idade:', pessoa.idade);

  //-------------------------------//

  // let favoriteFood = 'Lasanha';
  // favoriteFood = 'Hambúrguer';
  // console.log(favoriteFood);

//-------------------------------//

  // const name = 'Adriana';
  // const lastName = 'Soares';
  // console.log('Olá' + ',' + name + ' ' + lastName + '!');
  // function soma(a,b) {
  //   let resultado = a + b;
  //   return resultado;
  // }
  // let a = 3;
  // let b = 5;
  // console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
  // console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

//-------------------------------//

// const randomNumber = () => Math.random();

// console.log(randomNumber());

//-------------------------------//

// const greeting = nome => `Olá, ${nome}!`

// let nome = 'Ivan';
// console.log(greeting(nome));

//-------------------------------//

// const fullName = (nome, sobrenome) => `${nome} ${sobrenome}`;

// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(fullName(nome, sobrenome));

//-------------------------------//

let speed = 190;
const speedCar = (speed) => speed >= 120? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
console.log(speedCar(speed));