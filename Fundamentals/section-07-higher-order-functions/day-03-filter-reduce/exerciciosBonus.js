// Requisito 1
const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const flatten = () => arrays.reduce((total, atual) => total.concat(atual));

// console.log(flatten());

// Requisito 2
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult =
  'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';

const reduceNames = () =>
  books.reduce(
    (acc, curr, index) =>
      index === books.length - 1
        ? `${acc}${curr.author.name}. `
        : `${acc}${curr.author.name}, `,
    ''
  );

console.log(reduceNames());

// const expectedResult = 43;

const averageAge = () => {
  let authorAges = [];
  books.map((book) => {
    authorAges.push(book.releaseYear - book.author.birthYear);
  });
  return authorAges.reduce((acc, curr) => acc + curr) / 6;
};

// console.log(averageAge());

const longestNamedBook = () =>
  books.reduce((acc, curr) =>
    acc.name.length > curr.name.length ? acc : curr
  );

// console.log(longestNamedBook());
