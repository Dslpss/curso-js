// Encapsulamento em JavaScript
class Cofre {
  #senha; // Propriedade privada
  #saldo; // Outra propriedade privada

  constructor(senha) {
    this.#senha = senha; // A senha é armazenada de forma privada
    this.#saldo = 0; // Inicializa o saldo como 0
  }

  #validarSenha(senha) {
    return senha === this.#senha; // Verifica se a senha fornecida é igual à senha armazenada
  }

  verSaldo(senha) {
    if (this.#validarSenha(senha)) {
      console.log(`Saldo: ${this.#saldo}`); // Exibe o saldo se a senha estiver correta
    } else {
      console.log("Senha incorreta"); // Exibe uma mensagem de erro se a senha estiver incorreta
    }
  }

  depositar(senha, valor) {
    if (this.#validarSenha(senha) && valor > 0 && typeof valor === "number") {
      this.#saldo += valor; // Adiciona o valor ao saldo se a senha estiver correta
      console.log(`Depósito de ${valor} realizado com sucesso!`); // Confirmação do depósito
    } else {
      console.log("Senha incorreta ou valor inválido"); // Exibe uma mensagem de erro se a senha estiver incorreta ou o valor for inválido
    }
  }

  sacar(senha, valor) {
    if (
      this.#validarSenha(senha) &&
      valor > 0 &&
      typeof valor === "number" &&
      valor <= this.#saldo
    ) {
      this.#saldo -= valor;
      console.log(`Saque de ${valor} realizado com sucesso!`);
    } else {
      console.log("Valor inválido ou saldo insuficiente");
    }
  }
}
const meuCofre = new Cofre("minhaSenha123"); // Cria um novo cofre com a senha "minhaSenha123"
meuCofre.depositar("minhaSenha123", 100); // Tenta depositar um valor negativo
meuCofre.verSaldo("minhaSenha123"); // Exibe o saldo corretamente
meuCofre.sacar("minhaSenha123", 10); // Tenta sacar um valor maior que o saldo
meuCofre.verSaldo("minhaSenha123"); // Exibe o saldo atualizado após o saque
