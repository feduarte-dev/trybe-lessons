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
// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947).author.name;
};

// Retorne o nome do livro com menor número de caracteres (menor nome).
// const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook = books.reduce((a, b) =>
    a.name.length <= b.name.length ? a : b
  );
  return nameBook.name;
};

// Encontre o primeiro livro cujo nome possua 26 caracteres.
// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };
const getNamedBook = () => {
  return books.find((book) => book.name.length === 26);
};

// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
// const expectedResult = false;
function everyoneWasBornOnSecXX() {
  return books.every(
    (book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000
  );
}

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
// const expectedResult = true;
const someBookWasReleaseOnThe80s = () => {
  return books.some(
    (book) => book.releaseYear >= 1980 && book.releaseYear <= 1989
  );
};

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
// const expectedResult = false;
const authorUnique = () => {
  //<<<< Não entendi
  return books.every(
    (book) =>
      !books.some(
        (bookSome) =>
          bookSome.author.birthYear === book.author.birthYear &&
          bookSome.author.name !== book.author.name
      )
  );
};
console.log(authorUnique());
