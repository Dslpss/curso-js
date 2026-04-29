// Herança - Reutilização e manutenção
// Classe: Principal, Cao  e Passaro

//Classe principal
class Animal {
  //Suoer Classe
  constructor() {
    this.cor = "";
    this.tamanho = 0;
    this.peso = 0;
  }

  //método
  correr() {
    console.log("Correr!");
    console.log("como")
    console.log("um")
  }

  dormir() {
    console.log("Dormir!");
  }
}

//Classe: Cao
class Cao extends Animal {
  //Subclasse
  constructor() {
    super()
    this.tamanhoOrelha = 40
  }

  latir() {
    console.log("Latindo!");
  }

  correr() {
    super.correr()
    console.log("Cão")
  }
}

// Classe: Pássaro
class Passaro extends Animal {
  //Subclasse
  //método

  voar() {
    console.log("Voando!");
  }
}

class Papagaio extends Passaro {
  falar() {
    console.log("Falar");
  }
}

const cao = new Cao();
console.log(cao.tamanhoOrelha)
cao.correr()

const passaro = new Passaro();

const papagaio = new Papagaio();
papagaio.correr()
papagaio.voar()