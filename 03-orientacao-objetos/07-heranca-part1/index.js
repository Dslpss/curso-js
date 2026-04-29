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
  }

  dormir() {
    console.log("Dormir!");
  }
}

//Classe: Cao
class Cao extends Animal {
//Subclasse

  latir() {
    console.log("Latindo!");
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

//Instância da classe Cao
const cao = new Cao();
//cao.correr();

//Instância da classe Passaro
const passaro = new Passaro();
passaro.correr();
passaro.voar();
passaro.cor = "Amarelo";
console.log(passaro.cor);
