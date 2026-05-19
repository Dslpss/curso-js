class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}
         e tenho ${this.idade} anos.`);
  }

  aniversario() {
    this.idade += 1;
    console.log(
      `Feliz aniversário, ${this.nome}!
       Agora você tem ${this.idade} anos.`,
    );
  }
}

const pessoa1 = new Pessoa("João", 30);
pessoa1.falar();

const pessoa2 = new Pessoa("Maria", 25);
pessoa2.falar();
pessoa2.aniversario();
