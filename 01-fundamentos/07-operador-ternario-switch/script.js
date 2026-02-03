//!operador switch case

// let opcao = 0;
// switch (opcao) {
//   case 1:
//     console.log("Saldo conta");
//     break;
//   case 2:
//     console.log("Extrado da conta");
//     break;
//   case 3:
//     console.log("Emprestimos");
//     break;
//   default:
//     console.log("Opção inválida");
//     break;
// }

let numero1 = 2;
let numero2 = 4;
let operacao = "*";

switch (operacao) {
  case "+":
    console.log(`Soma: ${numero1} + ${numero2} = ${numero1 + numero2}`);
    break;
  case "-":
    console.log(`Subtração: ${numero1} - ${numero2} = ${numero2 - numero2}`);
    break;
  case "*":
    console.log(
      `Multiplicação: ${numero1} * ${numero2} = ${numero2 * numero2}`,
    );
    break;
  case "/":
    console.log(`Divisão: ${numero1} / ${numero2} = ${numero2 / numero2}`);
    break;
  default:
    console.log("Operação selecionada inválida!");
    break;
}

//!operador ternário
let idade = 19;
let verificarIdade = idade >= 18 ? "Maior idade" : "Menor idade";
console.log(verificarIdade);
