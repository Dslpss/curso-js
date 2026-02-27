// funcão literal
function somar(a, b) {
  return a + b;
}

let somaNumero = somar(2, 2);
console.log(somaNumero);


// funcao anomia 
let somarAnonima = function(a, b) {
  return a + b;
}
let somaNumero2 = somarAnonima(2, 2);
console.log(somaNumero2);


//funcao arrow
let somarArrow = (a, b) => a + b;
let somaNumero3 = somarArrow(2, 2);
console.log(somaNumero3);