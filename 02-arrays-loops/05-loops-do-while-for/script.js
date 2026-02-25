//while
let numero = 1;
while (numero <= 5) {
  console.log("Executou: " + numero);
  numero++;
}

//do while
let numero2 = 0;

do {
  console.log(`exec: ${numero2}`);
  numero2++;
} while (numero2 <= 1);

let n = 10;

while (n < 5) {
  console.log("while:", n);
}

do {
  console.log("do...while:", n);
} while (n < 5);

//for
for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//for mostrando os pares
for (j = 2; j <= 100; j += 2) {
  console.log(j);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (n = 0; n < numeros.length; n++) {
  console.log(numeros[n]);
}


for (indice in numeros) {
  console.log(numeros[indice]);
}