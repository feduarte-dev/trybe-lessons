let clientesTrybeBank = ["Ada", "John", "Gus"];

function clienteValidado(cliente) {
  if (typeof cliente === "string") {
    return true;
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
}

function clienteFound(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index//true 
      ;
    } else {
      return false;
    }
  }
}

function removeCliente(cliente) {
// if (clienteValidado(cliente)===true && clienteFound(cliente)===true) {clientesTrybeBank.splice(index, 1);
//   return "Cliente excluída(o) com sucesso.";}


  let validacao = clienteValidado(cliente);
  if (validacao !== true) {
    return validacao;
  }

  let index = clienteFound(cliente);
  if (index === false) {
    return "Cliente não encontrada(o).";
  }

  clientesTrybeBank.splice(index, 1);
  return "Cliente excluída(o) com sucesso.";
}

console.log(removeCliente("Ada"));
console.log(clientesTrybeBank);
