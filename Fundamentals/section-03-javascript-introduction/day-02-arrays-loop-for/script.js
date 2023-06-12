/*//Exercise 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercise 2
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu[2] ;

console.log(indexOfPortfolio);

//Exercise 3
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu);

//Exercise 4
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index=0; index < groceryList.length; index+=1) {
  console.log(groceryList[index])
}

//Exercise 5
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let elementos of names) {console.log(elementos)}
*/
//Exercise 6
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//for (let index=0; index<numbers.length; index+=1) {console.log(numbers[index])}

//let sum = 0;
//for (let index=0; index<numbers.length; index+=1) {console.log(sum=sum+numbers[index])}

//for (let index=0; index<numbers.length; index+=1) {console.log(sum=sum+numbers[index]/numbers.length)}
//if (sum>20) {console.log("O valor da média aritmética é maior que 20");}
//else {console.log("O valor da média aritmética é menor ou igual a 20")}

//for (let index=0; index<numbers.length; index+=1) {console.log(Math.max(...numbers))}

//for (let index=0; index<numbers.length; index+=1) {
//  if (numbers[index]%2===1) {console.log(numbers[index])}
//  else {console.log("Nenhum valor ímpar encontrado")}}

//for (let index=0; index<numbers.length; index+=1) {console.log(Math.min(...numbers))}

//let array1 = [];
//for (let index=1; index<26; index+=1) {array1.push(index)}
//console.log(array1)

//let array1 = [];

//for (let index=1; index<26; index+=1) {array1.push(index/2)}

//console.log(array1)

//Exercise 7
// let dez = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// let fatorial = 1;
// for (let index=0; index<dez.length; index+=1) {fatorial=fatorial*dez[index]}

// console.log(fatorial)

// let word = 'tryber';
// let reverse = "";
// for (let index=word.length-1; index>=0; index-=1)
// {reverse+=word[index]}
// console.log(reverse)

// let array = ["java", "javascript", "python", "html", "css"]
// let palavraMenor = array[0].length;
// let palavraMaior = "";

// for (let index = 0; index < array.length; index += 1) {
//   array[index].length;

//   if (array[index].length < palavraMenor) {

//     palavraMenor = array[index].length;
//   }

// }

// for (let index = 0; index < array.length; index += 1) {
//   array[index].length;

//   if (array[index].length > palavraMaior) {

//     palavraMaior = array[index].length;
//   }

// }
// console.log("A maior palavra tem ",palavraMaior, "letras.");
// console.log("A menor palavra tem ",palavraMenor, "letras.");

// let primo = 0;

// for (let index = 45; index <51; index += 1) {
//   let ePrimo = true;
//   for (let index1 = 2; index1 < index/2; index1 += 1) {
//     if (index % index1 == 0) {
//       ePrimo = false;
//       break
//     }
//   }
//   if (ePrimo) {
//     primo = index;
//   }
// }
// console.log(primo);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }
// console.log(numbers)

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }
// console.log(numbers)

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let multi = [];
// for (let index = 0; index < numbers.length; index += 1) {
//   if (index<numbers.length-1) {multi.push(numbers[index] * numbers[index+1])} else {multi.push(numbers[index] * 2)}

//   } console.log(multi)
let n = 5
let str = "*"
let espaco = " "

for (let index=0; index<=n; index+=1){
  console.log(espaco.repeat(n-index)+str.repeat(index))}

// let n = 7;
// let str = "*";
// let espaco = " ";
// let str2 = "*"
// let espaco2 = " ";

// for (let index = n; index >= 0; index -= 2) {
//   if (index % 2 !== 0) {
//     console.log(espaco.repeat(n - index / 2) + str.repeat(index/index) + espaco2.repeat(n - index / 2) + str2.repeat(index/index));
//   }
// }
