// Piçar 1 - Abstração
/**
 *  Modelo, Entidade, Identidade
 * Características e Ações
 */

//Modelo
class Carro {
  constructor() {
    // Características
    this.marca = "Volkswagen";
    this.modelo = "Gol";
    this.cor = "Prata";
    this.placa = "EMJ-2565";
  }

  ligar() {
    //Ações
  }
}

const carro = new Carro(); //Entidade
carro.modelo = "Golf";
console.log(carro.modelo);

const carro2 = new Carro();
console.log(carro2.modelo);

// Loja Virtual
class Produto {
  constructor() {
    //roupas
    this.tamanho = "M";
    this.cor = "Vermelho";
    this.preco = "45,90";


    //eletronicos
    this.altura = "50cm"
    this.largura = "30cm"
  }
}
