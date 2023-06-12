const verificaNumero = (meuNumero, numeroSorteado) => meuNumero === numeroSorteado;

const sorteio = (meuNumero, callback) => {
  numeroSorteado = Math.floor(Math.random() * 6);
  return callback(meuNumero, numeroSorteado)? `Parabéns, você ganhou` : `Tente novamente`
};

console.log(sorteio(3, verificaNumero));