const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];


const onlyReduce = numbers.reduce((sum, number) => ((number % 2 === 0) ? sum + number : sum));

console.log(onlyReduce);

// let sumEven = numbers.filter((number) =>  number % 2 === 0);
// let result = sumEven.reduce((acc, number) => acc + number);
// console.log(sumEven);
// console.log(result);
