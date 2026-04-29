//Pilar - Encapsulamento

class Carro {
  constructor() {
    this.modelo = "Gol";
    this.cor = "Vermelho";
  }

  frear() {
    console.log("Parar o carro!");
  }
}

const carro = new Carro();
carro.frear()