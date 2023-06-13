const createItem = require('./createItem');

describe('a função createItem', () => {
  // Remova o .todo e implemente o teste para a chamada da função createItem com os argumentos 'banana', 'kg', 1.99 e 20. Em seguida, verifique se o resultado é o objeto { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 }.
  it('cria um item válido', () => {
    const actual = createItem('banana', 'kg', 1.99, 20);
    const expected = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
    expect(actual).toEqual(expected);
  });

  //   Remova o .todo e implemente o teste para a chamada da função createItem com os argumentos 'banana', 'kg' e 1.99. Em seguida, verifique se o resultado tem a propriedade quantity com o valor 0.
  it('utiliza zero como quantidade padrão', () => {
    const actualItem = createItem('banana', 'kg', 1.99);
    expect(actualItem).toHaveProperty('quantity', 0);
  });

  // Implemente o teste para a chamada da função createItem sem argumentos e verifique se é lançada alguma exceção. Qual é o matcher mais adequado? Lembre-se de envolver a chamada da função dentro de outra função para que o Jest possa capturar o erro, conforme orienta a documentação. Não se preocupe no erro que é retornado, vamos fazer isso no próximo exercício.
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });

  //   Suponha que o nome do item tenha sido invertido com o preço na chamada da função e considere que foram passados como parâmetros os seguintes elementos: 1.99, 'kg', 'banana' e 20. Assim, essa chamada deve retornar o erro 'O nome do item deve ser uma string'. Afinal, foi passado 1.99 para o parâmetro name. Como é possível verificar se a chamada retorna exatamente esse erro?
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(1.99, 'kg', 'banana', 20)).toThrow(
      'O nome do item deve ser uma string'
    );
  });

  //   Crie um teste que, ao chamar a função passando -0.01 para o preço, verifica se a função lança o erro 'O preço do item deve ser maior que zero'.
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -0.01)).toThrow(
      'O preço do item deve ser maior que zero'
    );
  });

  //   Crie um teste que, ao chamar a função passando 0.00 para o preço, verifica se a função lança o erro 'O preço do item deve ser maior que zero'.
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0.0)).toThrow(
      'O preço do item deve ser maior que zero'
    );
  });
});
