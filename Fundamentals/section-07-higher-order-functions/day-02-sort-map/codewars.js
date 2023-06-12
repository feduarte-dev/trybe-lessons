var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
function countLanguages(list) {
  let countC = 0;
  let countJS = 0;
  let countR = 0;

  list.forEach((person) => {
    if (person.language === 'C') countC += 1;
    else if (person.language === 'JavaScript') countJS += 1;
    else countR += 1;
  });

const obj = {
  C: countC,
  JavaScript: countJS,
  Ruby: countR,
}; return obj;
}
console.log(countLanguages(list1));
// { C: 2, JavaScript: 1, Ruby: 1 }