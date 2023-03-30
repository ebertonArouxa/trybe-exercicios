let saldo = 200

function adicionaSaldo(dinheiro) {
  return dinheiro + saldo;
};

console.log(adicionaSaldo(10));

function retiraSaldo(dinheiro) {
  return saldo - dinheiro;
};

console.log(retiraSaldo(10));

function multiplicaSaldo(dinheiro) {
  return dinheiro * saldo;
};

console.log(multiplicaSaldo(10));

function divideSaldo(dinheiro) {
  return saldo / dinheiro;
};

console.log(divideSaldo(10));