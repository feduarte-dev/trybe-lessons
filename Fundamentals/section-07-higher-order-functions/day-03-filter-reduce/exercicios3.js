// Fonte: <https://restcountries.com/v2/all>
const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230,
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580,
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748,
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741,
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199,
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468,
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700,
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91,
  },
];

const getPopulation = () => {
  const pop = [];
  countries.forEach((country) => pop.push(country.population));
  return pop.reduce((popTotal, popAtual) => popTotal + popAtual);
};

const getTotalArea = () => {
  const area = [];
  countries.forEach((country) => area.push(country.area));
  return area.reduce((areaTotal, areaAtual) => areaTotal + areaAtual);
};

const longestName = () => {
  const namesLength = [];
  countries.map((country) => {
    namesLength.push(country.name.length);
  });
  let biggestName = namesLength.reduce((maiorNome, nome) =>
    maiorNome > nome ? maiorNome : nome
  );
  return countries.find((country) => country.name.length === biggestName);
};

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];
const expectedResult = 20;

const countA = () => {
  const arr = [];
  count = 0;
  names.forEach((name) => {
    arr.push(name.split(''));
  });

  arr.forEach((letter) => {
    letter.forEach((letter2) => {
      if (letter2 === 'a' || letter2 === 'A') {
        count += 1;
      }
    });
  });
  return count;
};

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverage = () => {
  return students.map((student, index) => {
    const obj = {
      name: student,
      average:
        grades[index].reduce((total, atual) => total + atual) /
        grades[index].length,
    };
    return obj;
  });
};

console.log(studentAverage());

// const expectedResult = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];
