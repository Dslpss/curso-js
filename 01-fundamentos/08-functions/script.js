function desligarTorneira() {
  console.log("Torneira desligada");
}

desligarTorneira();

function pedirCopoAgua() {
  return "Copa de água";
}

let retorno = pedirCopoAgua();
console.log(retorno);

function operacoes(a, b, operacao) {
  if (operacao === "+") {
    return a + b;
  } else if (operacao === "-") {
    return a - b;
  } else if (operacao === "*") {
    return a * b
  } else if (operacao === "/") {
    return a / b
  } else {
    return "Operação inválida!"
  }
}
let soma = operacoes(Number(2), Number(2), "+")
console.log(soma);
