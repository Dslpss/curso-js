function calcularMelhorPreco() {
  //validar campos
  let precoAlcool = document.getElementById("alcool").value;
  let precoGasolina = document.getElementById("gasolina").value;

  let resultado = document.getElementById("resultado");

  if (precoAlcool == "" || precoGasolina == "") {
    resultado.innerText = "Preencha todos os campos";
    return;
  }

  precoAlcool = parseFloat(precoAlcool.replace(",", "."));
  precoGasolina = parseFloat(precoGasolina.replace(",", "."));

  if (isNaN(precoAlcool) || isNaN(precoGasolina)) {
    resultado.innerText = "Digite valores númericos válidos!";
    return;
  }

  if (precoAlcool <= 0 || precoGasolina <= 0) {
    resultado.innerText = "Digite valores maiores que zero!";
    return;
  }

  let razao = precoAlcool / precoGasolina;

  if (razao < 0.7) {
    resultado.innerText = "É melhor abastecer com ÁLCOOL!";
  } else {
    resultado.innerText = "É melhor abastecer com GASOLINA!";
  }
}
