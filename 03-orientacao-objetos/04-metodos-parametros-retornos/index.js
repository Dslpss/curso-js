class Usuario {
  constructor() {
    this.email = "";
    this.senha = "";
    this.subtotalCompra = 0;
  }

  logar() {
    let emailBD = "teste@gmail.com";
    let senhaBD = "1234";

    if (emailBD == this.email && senhaBD == this.senha) {
      return "Login efetuado com sucesso!";
    } else {
      return "Verifique seu email e senha!";
    }
  }

  calcularDesconto(cupom) {
    let desconto = 0;
    if (cupom == "DESC20") {
      desconto = 20;
    } else if (cupom == "FESTA10") {
      desconto = 10;
    }

    return this.subtotalCompra - desconto;
  }
}

const usuario = new Usuario();
usuario.subtotalCompra = 279;
const valorComDesconto = usuario.calcularDesconto("DESC20");
console.log("Valor desconto: ", valorComDesconto);

// const usuario = new Usuario();
// usuario.email = "teste@gmail.com";
// usuario.senha = "1234";

// let mensagem = usuario.logar();
// console.log(mensagem);
