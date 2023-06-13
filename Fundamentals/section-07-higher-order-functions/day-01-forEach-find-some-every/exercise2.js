// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).
const verificaNumero = (meuNumero, numeroSorteado) =>
  meuNumero === numeroSorteado;

const sorteio = (meuNumero, callback) => {
  numeroSorteado = Math.floor(Math.random() * 6);
  return callback(meuNumero, numeroSorteado)
    ? `Parabéns, você ganhou`
    : `Tente novamente`;
};

console.log(sorteio(3, verificaNumero));
