// Adiciona um valor ao balance;
let saldo = 0;
function depositaDinheiro(dinheiro) {
  saldo += dinheiro;
  return 'Foi adicionado R$' + dinheiro + ' ao seu saldo TrybeBank.';
}

console.log(depositaDinheiro(10.0));
console.log(saldo);

// Subtraia um valor do balance;
function sacaDinheiro(dinheiro) {
  saldo -= dinheiro;
  return 'Foi retirado R$' + dinheiro + ' do seu saldo TrybeBank.';
}

console.log(sacaDinheiro(5.0));
console.log(saldo);

// Multiplique o valor do balance por uma taxa
function taxa(imposto) {
  saldo = 20 - 20 * (imposto / 100);

  return (
    'Houve um imposto de ' +
    imposto +
    ' porcento na sua conta, agora você tem ' +
    saldo +
    ' reais.'
  );
}

console.log(taxa(3));

// Divida o valor do balance.
function investimento(dinheiro) {
  saldo = 20 - 20 * (dinheiro / 100);
  investimentoTotal = 20 * (dinheiro / 100);

  return (
    'Você investiu ' +
    investimentoTotal +
    'reais, agora sua conta tem ' +
    saldo +
    'reais'
  );
}

console.log(investimento(15));
console.log(saldo);

// Crie uma função que adicione cliente, caso o parametro da função não seja do tipo string, retorne erro.
let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaClientes(clienteNovo) {
  if (typeof clienteNovo === 'string') {
    clientesTrybeBank.push(clienteNovo);
  } else {
    console.log('erro');
  }
}
adicionaClientes('ruan');
console.log(clientesTrybeBank);

// Crie uma função que exclui cliente, caso o parametro da função não seja do tipo string, retorne erro.
function excluiClientes(cliente) {
  index = clientesTrybeBank.indexOf(cliente);

  if (clientesTrybeBank.includes(cliente)) {
    clientesTrybeBank.indexOf(cliente);
    clientesTrybeBank.splice(index, 1);
  } else {
    console.log('erro');
  }
}
excluiClientes('Ada');
console.log(clientesTrybeBank);
