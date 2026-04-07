/*
const hotel = {
  quartos: 20,
  ocupados: 10,
  piscinas: 2,

  verificarDisponibilidade: function () {
    let res = this.quartos - this.ocupados;

    return `Disponível: ${res}`;
  },
};

 hotel.quartos = 25
console.log(hotel.piscinas);
*/

//Utizando notação de construtor
// const hotel = new Object()
// hotel.quartos = 20
// hotel.ocupados = 10

// hotel.verificarDisponibilidade = function () {
//   let res = this.quartos - this.ocupados
//   return `Quartos disponível ${res}`
// }

// console.log(hotel.verificarDisponibilidade());

//Criando objetos com class

class Hotel {
  constructor() {
    this.quartos = 20;
    this.ocupados = 10;
  }

  verificarDisponibilidade() {
    let res = this.quartos - this.ocupados

    return `Quartos Disponível: ${res}`
  }
}

const hotel = new Hotel();
console.log(hotel.verificarDisponibilidade())
