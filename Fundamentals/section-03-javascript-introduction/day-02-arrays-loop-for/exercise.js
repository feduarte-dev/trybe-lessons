// Considere esse array para realizar os próximos exercícios.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado.
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  console.log((sum = sum + numbers[index]));
}

// Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
for (let index = 0; index < numbers.length; index += 1) {
  console.log((sum = sum + numbers[index] / numbers.length));
}
if (sum > 20) {
  console.log('O valor da média aritmética é maior que 20');
} else {
  console.log('O valor da média aritmética é menor ou igual a 20');
}

// Utilizando for, descubra o maior valor contido no array e imprima-o.
for (let index = 0; index < numbers.length; index += 1) {
  console.log(Math.max(...numbers));
}

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    console.log(numbers[index]);
  } else {
    console.log('Nenhum valor ímpar encontrado');
  }
}

// Descubra o menor número dentro do array
for (let index = 0; index < numbers.length; index += 1) {
  console.log(Math.min(...numbers));
}

// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Calcule 10 fatorial (!10):
let dez = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let fatorial = 1;
for (let index = 0; index < dez.length; index += 1) {
  fatorial = fatorial * dez[index];
}

console.log(fatorial);

//  Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let reverse = '';
for (let index = word.length - 1; index >= 0; index -= 1) {
  reverse += word[index];
}
console.log(reverse);

//Encontre a menor palavra dentro do array
let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMenor = array[0].length;
let palavraMaior = '';

for (let index = 0; index < array.length; index += 1) {
  array[index].length;
  if (array[index].length < palavraMenor) {
    palavraMenor = array[index].length;
  }
}
//Encontre a maior palavra dentro do array
for (let index = 0; index < array.length; index += 1) {
  array[index].length;
  if (array[index].length > palavraMaior) {
    palavraMaior = array[index].length;
  }
}
console.log('A maior palavra tem ', palavraMaior, 'letras.');
console.log('A menor palavra tem ', palavraMenor, 'letras.');

//Verifique se existe numero primo entre 45 e 51;
let primo = 0;

for (let index = 45; index < 51; index += 1) {
  let ePrimo = true;
  for (let index1 = 2; index1 < index / 2; index1 += 1) {
    if (index % index1 == 0) {
      ePrimo = false;
      break;
    }
  }
  if (ePrimo) {
    primo = index;
  }
}
console.log(primo);

//  Coloque o array numbers em ordem crescente
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

//  Coloque o array numbers em ordem decrescente
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

// Multiplique o index pelo seu proximo
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multi = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (index < numbers.length - 1) {
    multi.push(numbers[index] * numbers[index + 1]);
  } else {
    multi.push(numbers[index] * 2);
  }
}
console.log(multi);

//Faça um triangulo de asteriscos
let n = 5;
let str = '*';
let espaco = ' ';

for (let index = 0; index <= n; index += 1) {
  console.log(espaco.repeat(n - index) + str.repeat(index));
}
