let altura = 1.68;
let peso = 62;

let resultadoImc = peso / altura ** 2;

if (resultadoImc < 18.5) {
  console.log("Abaixo do peso");
} else if (resultadoImc >= 18.5 && resultadoImc < 25) {
  console.log("Peso normal");
} else if (resultadoImc >= 25 && resultadoImc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obsidade morbida");
}

console.log("Seu IMC é: ", +resultadoImc.toFixed(1));
