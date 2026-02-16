function fraseAleatoria() {
  let resultado = document.getElementById("exibirFrase")
  let frases = [
    "Código limpo hoje, menos dor de cabeça amanhã.",
    "Primeiro faz funcionar, depois faz bonito, depois faz rápido.",
    "Se não tem bug, você não testou o suficiente.",
    "Deploy não é o fim… é só o começo dos logs.",
    "Programar é ensinar o computador a pensar do jeito certo.",
  ];

  let frasesAleatorias = Math.floor(Math.random() * frases.length);

  let fraseEscolhida = frases[frasesAleatorias];

  resultado.innerText = fraseEscolhida;
}
