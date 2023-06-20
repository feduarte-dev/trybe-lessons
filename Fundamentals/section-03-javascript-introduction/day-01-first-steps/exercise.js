// Create a variable called “weekDay” that receives the string “Wednesday”.
// Using if/else, implement the following conditionals:
// If the variable “weekDay” is “Monday”, “Tuesday”, “Wednesday”, “Thursday” or “Friday”, print “Yay, another day of learning at Trybe >: D”.
// If the variable is some weekend day, print “FINALLY, well deserved rest! UwU!”.
let weekDay = 'segunda-feira';

if (
  weekDay === 'segunda-feira' ||
  weekDay === 'terça-feira' ||
  weekDay === 'quarta-feira' ||
  weekDay === 'quinta-feira' ||
  weekDay === 'sexta-feira'
) {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
  console.log('FINALMENTE, descanso merecido! UwU!');
}

// Create a variable to store the candidate's status in a selection process. The possibilities are: 'approved', 'listed' or 'disapproved'.
// Create a conditional structure with switch/case to print the following messages:
// If 'approved', print “Congratulations, you are in the group of approved people!”.
// If 'list', print “You are on our waiting list.”.
// If 'failed', print “Unfortunately, you failed.”.
// If default, print the message “Incorrect information.”.
let situacao;
situacao = 'aprovada';

switch (situacao) {
  case 'aprovada':
    console.log('Parabéns, você está no grupo de pessoas aprovadas!');
    break;
  case 'lista':
    console.log('Você está na nossa lista de espera.');
    break;
  case 'reprovada':
    console.log('Infelizmente, você reprovou.');
    break;
  default:
    console.log('Informação incorreta.');
}

// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:
// Adição (num1 + num2)
// Subtração (num1 - num2)
// Multiplicação (num1 * num2)
// Divisão (num1 / num2)
// Módulo (num1 % num2)
let a;
let b;
a = 2;
b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.
// let a;
// let b;
a = 1;
b = 2;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.
// let a;
// let b;
let c;
a = 5;
b = 4;
c = 3;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

// Utilize if...else para escrever um código que de acordo com a variável, vai retornar positivo, negativo ou zero.
let valor;
valor = 0;

if (valor >= 1) {
  console.log('positivo');
} else if (valor < 0) {
  console.log('negativo');
} else {
  console.log('zero');
}

// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// let a;
// let b;
// let c;
a = 60;
b = -60;
c = 62;

if (a + b + c === 180) {
  console.log('true');
} else if (a < 0 || b < 0 || c < 0) {
  console.log('erro');
} else console.log('false');

// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
let peca;
let movimento;
peca = 'TORRE';

switch (peca.toLowerCase()) {
  case 'rei':
    movimento =
      'Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.';
    break;

  case 'rainha':
    movimento =
      'Pode mover-se pelas colunas, fileiras e diagonal de outra cor.';
    break;

  case 'torre':
    movimento = 'Movimenta-se em direção reta pelas colunas ou fileiras.';
    break;

  case 'bispo':
    movimento = 'Esta peça move-se em diagonal múltiplas casas';
    break;

  case 'cavalo':
    movimento =
      'Movimenta-se sempre em L, ou seja, duas casas para frente e uma para a esquerda ou direita. O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias.';
    break;

  case 'peao':
    movimento =
      'Movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal. Ao contrário das outras peças, o peão não pode mover-se para trás.';
    break;
  default:
    movimento = 'Erro';
}
console.log(movimento);

//Exercise 13
// let nota;
nota = -1;
if (nota >= 90 && nota <= 100) {
  console.log('Você tirou nota A');
} else if (nota >= 80 && nota < 90) {
  console.log('Você tirou nota B');
} else if (nota >= 70 && nota < 80) {
  console.log('Você tirou nota C');
} else if (nota >= 60 && nota < 70) {
  console.log('Você tirou nota D');
} else if (nota >= 50 && nota < 60) {
  console.log('Você tirou nota E');
} else if (nota < 50 && nota >= 0) {
  console.log('Você tirou nota F');
} else if (nota < 0 || nota > 100) {
  console.log('Erro');
}

// Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.
// let a = 1;
// let b = 3;
// let c = 2;
if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  console.log('True');
} else {
  console.log('False');
}

// Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for impar. Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.
// let a = 1;
// let b = 2;
// let c = 2;
if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
  console.log('True');
} else {
  console.log('False');
}

//Calcule o lucro de determinado item.
let custo = 200;
let valorVenda = 250;
let impostoSobreOCusto = custo * 0.2;
let valorCustoTotal = custo + impostoSobreOCusto;
let lucro = (valorVenda - valorCustoTotal) * 1000;
console.log(lucro);

// Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

// ⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

// Para as faixas de impostos, use as seguintes referências:

// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%;
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
// IR
// Até R$ 1.903,98: isento de imposto de renda;
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// O cálculo deve ser o demonstrado a seguir
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

// R$ 2.670,00 - salário com INSS já deduzido;
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.
let salarioBruto = 3000;
let inss;

if (salarioBruto <= 1556.94) {
  inss = (salarioBruto * 8) / 100;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  inss = (salarioBruto * 9) / 100;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  inss = (salarioBruto * 11) / 100;
} else {
  inss = 570.88;
}

let ir;
let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
  ir = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  ir = (salarioBase * 7.5) / 100 - 142.9;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  ir = (salarioBase * 15) / 100 - 354.8;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  ir = (salarioBase * 22.5) / 100 - 636.13;
} else {
  ir = (salarioBase * 27.5) / 100 - 869.36;
}

let salarioLiquido = salarioBase - ir;

console.log(salarioLiquido);
