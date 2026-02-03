//alert("Dennis Emannuel!"
let hora = new Date().getHours();
let saudacao;
if (hora < 12) {
  saudacao = "Bom Dia!";
} else if (hora < 18) {
  saudacao = "Boa Tarde!";
} else {
  saudacao = "Boa Noite";
}

document.getElementById("mensagem").innerHTML = saudacao;
