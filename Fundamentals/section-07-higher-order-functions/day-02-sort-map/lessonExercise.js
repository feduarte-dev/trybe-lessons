// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age - b.age);

// Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
console.log(people.sort((a, b) => b.age - a.age));

// Junte as duas listas para que fique da seguinte forma { products: price }.
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) =>
  listProducts.map((product, index) => ({ [product]: listPrices[index] }));

const productsList = updateProducts(products, prices);
console.log(productsList);
