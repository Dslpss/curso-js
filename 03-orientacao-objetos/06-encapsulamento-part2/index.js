// Pilar - Encapsulamento parte 2
class ContaBancaria {
  constructor() {
    // Número da conta (privado)
    this._numeroConta = 0;
    // Saldo da conta (privado)
    this._saldo = 0;
  }

  // Método para sacar um valor da conta
  sacar(valorSaque) {
    // Verifica se o valor é válido e se há saldo suficiente
    if (valorSaque > 0 && valorSaque <= this._saldo) {
      this._saldo -= valorSaque; // Diminui o saldo
      return `Saque no valor: R$${valorSaque} realizado com sucesso`;
    } else {
      return "Valor invalido!";
    }
  }

  // Método para depositar um valor na conta
  depositar(valorDeposito) {
    return (this._saldo = this._saldo += valorDeposito); // Soma o valor ao saldo
  }

  // Getter para exibir o saldo formatado
  get saldo() {
    return "Saldo: " + this._saldo;
  }

  // Setter para definir um novo saldo (se for positivo)
  set saldo(novoValor) {
    if (novoValor > 0) {
      this._saldo = novoValor;
    }
  }

  // Getter para exibir o número da conta formatado
  get numeroConta() {
    return "numero conta: " + this._numeroConta;
  }

  // Setter para definir o número da conta (se for positivo)
  set numeroConta(numero) {
    if (numero > 0) {
      this._numeroConta = numero;
    }
  }
}

// Cria uma nova conta bancária
const conta = new ContaBancaria();

// Define o número da conta (opcional)
// conta.numeroConta = 50;
// console.log(conta.numeroConta);

// Define o saldo inicial da conta
conta.saldo = 500;

// Realiza um saque de 50 reais
conta.sacar(50);

// Exibe o saldo atual da conta
console.log(conta.saldo);
