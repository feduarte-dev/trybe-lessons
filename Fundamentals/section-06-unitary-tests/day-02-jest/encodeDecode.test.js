const { encode, decode } = require('./encodeDecode.js');

describe('Teste função encode e decode', () => {
  // Teste se encode e decode são funções.
  it('A função encode é função', () => {
    expect(true).toBe(typeof encode === 'function');
  });
  it('A função decode é função', () => {
    expect(true).toBe(typeof decode === 'function');
  });

  // Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.
  it('A função encode retorna 1, 2, 3, 4, 5 ao receber a, e, i, o, u', () => {
    expect('1, 2, 3, 4, 5').toEqual(encode('a, e, i, o, u'));
  });

  // Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.
  it('A função decode retorna a, e, i, o, u ao receber 1, 2, 3, 4, 5', () => {
    expect('a, e, i, o, u').toEqual(decode('1, 2, 3, 4, 5'));
  });

  // Teste se as demais letras e os demais números não são convertidos para cada caso.
  it('A função encode retorna tryb2 ao receber trybe', () => {
    expect('tryb2').toEqual(encode('trybe'));
  });
  it('A função decode retorna trybe ao receber tryb2', () => {
    expect('trybe').toEqual(decode('tryb2'));
  });

  // Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
  it('O parâmetro da função decode tem o mesmo tamanho da string retornada', () => {
    expect(true).toEqual(decode('tryb2').length === 'trybe'.length);
  });
});
