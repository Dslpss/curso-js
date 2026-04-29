// const aluno = {
//   // --- Propriedades (Dados)
//   nome: "Dennis Emannuel",
//   idade: 27,
//   curso: "Analise de sistemas",
//   ativo: true,

//   apresentar: function () {
//     console.log(`Olá, eu sou ${this.nome}. E sou aluno de ${this.curso}!`);
//   },
// };

// // --- Acessando a propriedade
// console.log(`Nome: ${aluno.nome}`);

// // --- Chamando o método
// aluno.apresentar()

class Aluno {
  constructor() {
    this.nome = "Dennis Emannuel";
    this.age = 27;
    this.curso = "Analise de sistemas";
    this.ativo = true;
  }

  apresentar() {
    console.log(
      `Olá meu nome é ${this.nome} tenho ${this.age} e faço ${this.curso}`,
    );
  }
}
const aluno1 = new Aluno();

aluno1.apresentar()
