const removeItem = require('./removeItem');

describe('Teste função removeItem', () => {

  // Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.
  it('A função recebe ([1, 2, 3, 4], 3) e retorna [1, 2, 4]', () => {
    expect([1, 2, 4]).toEqual(removeItem([1, 2, 3, 4], 3));
  });

  // Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
  it('A função recebe ([1, 2, 3, 4], 3) e não retorna [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(removeItem([1, 2, 3, 4], 3));
  });
  
  // Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.
  it('A função recebe ([1, 2, 3, 4], 5) e retorna [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).toEqual(removeItem([1, 2, 3, 4], 5));
  });
});
