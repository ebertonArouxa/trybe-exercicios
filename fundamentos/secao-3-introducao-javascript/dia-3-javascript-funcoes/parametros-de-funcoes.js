let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function cliente(nome) {
  if (typeof nome === "string") {
    clientesTrybeBank.push(nome);
    return "Usuário cadastrado";
  } else {
    return "Usuário inválido";
  }
}

console.log(cliente('Eberton'));
console.log(clientesTrybeBank);

function excluiCliente(cliente) {
  if (typeof cliente === "string") {
    let clienteCadastrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        clienteCadastrado = true;
        return "Usuário removido do sistema";
      }
    }

    if (clienteCadastrado === false) {
      return "Usuário não cadastrado"
    }
  } else {
    return "Erro";
  }
};

console.log(excluiCliente('Lucas'));
console.log(excluiCliente('Eberton'));
console.log(clientesTrybeBank);