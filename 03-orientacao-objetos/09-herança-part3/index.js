class Animal {
  cor = "";
  raca = "";
  peso = 0;
  correr() {
    console.log("Correr!");
  }
}

class Cao extends Animal {
    constructor() {
        super()
        super.cor = "preto"
        this.tamanhoOrelha = 40
    }
  latir() {
    console.log("Latindo!");
  }
}

class Passaro extends Animal {
  voar() {
    console.log("Voando!");
  }
}

const meuCao = new Cao();
meuCao.correr();
meuCao.latir();
