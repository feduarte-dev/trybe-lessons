/*// Exercise 1
let myName = "Felipe";
let birthCity = "Pelotas";
let birthYear = 1993;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

// Exercise 2
let base = 5;
let height = 8;
let area = base * height;
let perimeter = base * 2 + height * 2;

console.log(area);
console.log(perimeter);

// Exercise 3
let nota;
nota = 0;

if (nota >= 80) {
  console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera.");
} else {
  console.log("Infelizmente, você reprovou.");
}

// Exercise 4
let currentHour;
currentHour = 17;

if (currentHour >= 22) {
  console.log("Não deveríamos comer nada, é hora de dormir");
} else if (currentHour >= 18 && currentHour < 22) {
  console.log("Rango da noite, vamos jantar :D");
} else if (currentHour >= 14 && currentHour < 18) {
  console.log("Vamos fazer um bolo pro café da tarde?");
} else if (currentHour >= 11 && currentHour < 14) {
  console.log("Hora do almoço!!!");
} else {
  console.log("Hmmm, cheiro de café recém-passado");
}

// Exercise 5
let weekDay = "segunda-feira";

if (
  weekDay === "segunda-feira" ||
  weekDay === "terça-feira" ||
  weekDay === "quarta-feira" ||
  weekDay === "quinta-feira" ||
  weekDay === "sexta-feira"
) {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descanso merecido! UwU!");
}

// Exercise 6
let situacao;
situacao = "aprovada";

switch (situacao) {
  case "aprovada":
    console.log("Parabéns, você está no grupo de pessoas aprovadas!");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera.");
    break;
  case "reprovada":
    console.log("Infelizmente, você reprovou.");
    break;
  default:
    console.log("Informação incorreta.");
}

// Exercise 7
let a;
let b;
a = 2;
b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Exercise 8
let a;
let b;
a = 1;
b = 2;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

// Exercise 9
let a;
let b;
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

// Exercise 10
let valor;
valor = 0;

if (valor >= 1) {
  console.log("positivo");
} else if (valor < 0) {
  console.log("negativo");
} else {
  console.log("zero");
}

// Exercise 11
let a;
let b;
let c;
a = 60;
b = -60;
c = 62;

if (a + b + c === 180) {
  console.log("true");
} else if (a < 0 || b < 0 || c < 0) {
  console.log("erro");
} else console.log("false");

// Exercise 12
let peca;
let movimento;
peca = "TORRE";

switch (peca.toLowerCase()) {
  case "rei":
    movimento =
      "Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.";
    break;

  case "rainha":
    movimento =
      "Pode mover-se pelas colunas, fileiras e diagonal de outra cor.";
    break;

  case "torre":
    movimento = "Movimenta-se em direção reta pelas colunas ou fileiras.";
    break;

  case "bispo":
    movimento = "Esta peça move-se em diagonal múltiplas casas";
    break;

  case "cavalo":
    movimento =
      "Movimenta-se sempre em L, ou seja, duas casas para frente e uma para a esquerda ou direita. O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias.";
    break;

  case "peao":
    movimento =
      "Movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal. Ao contrário das outras peças, o peão não pode mover-se para trás.";
    break;
  default:
    movimento = "Erro";
}
console.log(movimento);

//Exercise 13
let nota;
nota = -1;
if (nota>=90 && nota<=100) {console.log("Você tirou nota A")}
else if (nota>=80 && nota<90) {console.log("Você tirou nota B")}
else if (nota>=70 && nota<80) {console.log("Você tirou nota C")}
else if (nota>=60 && nota<70) {console.log("Você tirou nota D")}
else if (nota>=50 && nota<60) {console.log("Você tirou nota E")}
else if (nota<50 && nota>=0) {console.log("Você tirou nota F")}
else if (nota<0 || nota>100) {console.log("Erro")}

//Exercise 14
let a = 1;
let b = 3;
let c = 2;
if (a%2===0 || b%2===0 || c%2===0) {console.log("True")}
else {console.log("False")}

//Exercise 15
let a = 1;
let b = 2;
let c = 2;
if (a%2!=0 || b%2!=0 || c%2!=0) {console.log("True")}
else {console.log("False")}

//Exercise 16
let custo=200;
let valorVenda=250;
let impostoSobreOCusto = custo*0.20;
let valorCustoTotal = custo + impostoSobreOCusto;
let lucro = (valorVenda - valorCustoTotal) * 1000;
console.log(lucro);

//Exercise 17
let salarioBruto = 3000;
let inss;

if (salarioBruto<=1556.94) {inss=salarioBruto*8/100}
else if (salarioBruto>1556.94 && salarioBruto<=2594.92) {inss=salarioBruto*9/100}
else if (salarioBruto>2594.92 && salarioBruto<=5189.82) {inss=salarioBruto*11/100}
else {inss=570.88}

let ir;
let salarioBase = salarioBruto - inss;

if(salarioBase<= 1903.98) {ir=0} 
else if (salarioBase>1903.98 && salarioBase<=2826.65) {ir=(salarioBase*7.5/100 - 142.90)}
else if (salarioBase>2826.65 && salarioBase<=3751.05) {ir=(salarioBase*15/100 - 354.80)}
else if (salarioBase>3751.05 && salarioBase<=4664.68) {ir=(salarioBase*22.5/100 - 636.13)}
else {ir=(salarioBase*27.5/100 - 869.36)}


let salarioLiquido = salarioBase - ir;

console.log (salarioLiquido)
*/