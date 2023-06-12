const myFizzBuzz = require('./myFizzBuzz');

describe('Teste função myFizzBuzz', () => {
  it('A função recebe (15) e retorna fizzbuzz', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });
  it('A função recebe (6) e retorna fizz', () => {
    expect('fizz').toBe(myFizzBuzz(6));
  });
  it('A função recebe (10) e retorna buzz', () => {
    expect('buzz').toBe(myFizzBuzz(10));
  });
  it('A função recebe (7) e retorna 7', () => {
    expect(7).toEqual(myFizzBuzz(7));
  });
  it('A função recebe (trybe) e retorna false', () => {
    expect(false).toEqual(myFizzBuzz('trybe'));
  });
});
