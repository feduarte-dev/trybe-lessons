//  Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:

// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
//   recorrente: "sim",
// };
// console.log("Bem-vinda, " + info.personagem);

// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:

// info['recorrente'] = 'sim'
// console.log(info);

// Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é:

// for (let index in info) {console.log(index)}

// Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é:

// for (let index in info) {console.log(info[index])}

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é:

// let info1 = {
//   personagem: "Tio Patinhas",
//   origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
//   nota: "O último MacPatinhas",
//   recorrente: "sim",
// };

// for (let index in info) {
//   if (index === "recorrente" && info[index] === info1[index]) {
//     console.log("Ambos recorrentes");
//   } else {
//     console.log(info[index] + " e " + info1[index]);
//   }
// }


//Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0]['titulo']);

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:

let novoLivro = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
leitor.livrosFavoritos.push(novoLivro);
console.log(leitor)

//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem {quantidade} livros favoritos”, em que “{quantidade}” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.


console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}