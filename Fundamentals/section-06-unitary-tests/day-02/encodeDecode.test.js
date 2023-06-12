const { encode, decode } = require('./encodeDecode.js');

describe('Teste função encode e decode', () => {
  it('A função encode é função', () => {
    expect(true).toBe(typeof encode === 'function');
  });
  it('A função decode é função', () => {
    expect(true).toBe(typeof decode === 'function');
  });
  it('A função encode retorna 1, 2, 3, 4, 5 ao receber a, e, i, o, u', () => {
    expect('1, 2, 3, 4, 5').toEqual(encode('a, e, i, o, u'));
  });
  it('A função decode retorna a, e, i, o, u ao receber 1, 2, 3, 4, 5', () => {
    expect('a, e, i, o, u').toEqual(decode('1, 2, 3, 4, 5'));
  });
  it('A função encode retorna tryb2 ao receber trybe', () => {
    expect('tryb2').toEqual(encode('trybe'));
  });
  it('A função decode retorna trybe ao receber tryb2', () => {
    expect('trybe').toEqual(decode('tryb2'));
  });
  it('O parâmetro da função decode tem o mesmo tamanho da string retornada', () => {
    expect(true).toEqual(decode('tryb2').length === 'trybe'.length);
  });
});
