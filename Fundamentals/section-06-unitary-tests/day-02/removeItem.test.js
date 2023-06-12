const removeItem = require('./removeItem');

describe('Teste função removeItem', () => {
  it('A função recebe ([1, 2, 3, 4], 3) e retorna [1, 2, 4]', () => {
    expect([1, 2, 4]).toEqual(removeItem([1, 2, 3, 4], 3));
  });
  it('A função recebe ([1, 2, 3, 4], 3) e não retorna [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(removeItem([1, 2, 3, 4], 3));
  });
  it('A função recebe ([1, 2, 3, 4], 5) e retorna [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).toEqual(removeItem([1, 2, 3, 4], 5));
  });
});
