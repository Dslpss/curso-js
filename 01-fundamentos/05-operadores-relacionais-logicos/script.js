/** @file
 * Operadores relacionais (Retorna verdadeiro ou falso)
 * == (igual a)
 * != (diferente)
 * > (maior que)
 * < (menor que)
 * >= (maior ou igual)
 * <= (menor ou igual)
 */

let resultado = 10 == 10;
console.log(resultado);

let n1 = 9;
let n2 = 10;
let resultado2 = n1 >= n2;
console.log(resultado2);

let idade = 25;
if (idade > 18) {
  console.log(`${idade} anos: Maior de idade`);
} else {
  console.log(`${idade} anos: Menor de idade`);
}

/**
 * Operadores lógicos (testa condições com true ou false)
 * && (e)
 * || (ou)
 */

let resultado3 = 2 == 2 && 1 === "1"; // As duas condições tem que ser verdadeira
console.log(resultado3);

let resultado4 = 2 == 2 || 1 === "1"; //Uma das duas tem quer ser verdadeira pra dar true
console.log(resultado4);