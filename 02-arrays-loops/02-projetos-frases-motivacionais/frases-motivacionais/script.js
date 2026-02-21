// Função responsável por exibir uma frase aleatória na tela
function fraseAleatoria() {
  // Obtém o elemento HTML onde a frase será exibida
  let resultado = document.getElementById("exibirFrase");
  // Array contendo as frases motivacionais
  let frases = [
    "Código limpo hoje, menos dor de cabeça amanhã.", // Frase 1
    "Primeiro faz funcionar, depois faz bonito, depois faz rápido.", // Frase 2
    "Se não tem bug, você não testou o suficiente.", // Frase 3
    "Deploy não é o fim… é só o começo dos logs.", // Frase 4
    "Programar é ensinar o computador a pensar do jeito certo.", // Frase 5
  ];

  // Gera um índice aleatório baseado no tamanho do array de frases
  let frasesAleatorias = Math.floor(Math.random() * frases.length);

  // Seleciona a frase correspondente ao índice aleatório
  let fraseEscolhida = frases[frasesAleatorias];

  // Exibe a frase escolhida no elemento HTML
  resultado.innerText = fraseEscolhida;
}
