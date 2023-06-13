const myFizzBuzz = require('./myFizzBuzz');

describe('Teste função myFizzBuzz', () => {
  // Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
  it('A função recebe (15) e retorna fizzbuzz', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });
  
  // Caso num seja um número divisível apenas por 3, a função retorna "fizz".
  it('A função recebe (6) e retorna fizz', () => {
    expect('fizz').toBe(myFizzBuzz(6));
  });

  // Caso num seja um número divisível apenas por 5, a função retorna "buzz".
  it('A função recebe (10) e retorna buzz', () => {
    expect('buzz').toBe(myFizzBuzz(10));
  });

  // Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.
  it('A função recebe (7) e retorna 7', () => {
    expect(7).toEqual(myFizzBuzz(7));
  });

  // Caso num não seja um número, a função retorna false.
  it('A função recebe (trybe) e retorna false', () => {
    expect(false).toEqual(myFizzBuzz('trybe'));
  });
});
