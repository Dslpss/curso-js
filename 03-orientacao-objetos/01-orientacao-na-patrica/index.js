// //Paradigma procedural
// function verificarDisponibilidade(quartos, ocupados) {

//   let quartosDisponiveis = quartos - ocupados

//   return quartosDisponiveis
// }
// let resultado = verificarDisponibilidade(20, 5)
// console.log(resultado);

//Orientado a objetos
const hotel = {
  quartos: 20,
  ocupados: 10,
  verificarDisponibilidade: function () {
    let quartosDisponiveis = this.quartos - this.ocupados;

    return quartosDisponiveis;
  },
};
hotel.ocupados = 5
console.log(`Quartos Disponiveis: ${hotel.verificarDisponibilidade()}`);