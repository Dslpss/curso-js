let nomes = ["Dennis", "Fernando", "Carlos", "Beatriz", "Lucas"];

function pesquisar() {
  let busca = document.getElementById("campoPesquisa").value.toLowerCase();
  let resultado = document.getElementById("resultado");
  let apenasLetras = /^[a-zA-ZÀ-ÿ\s]+$/.test(busca);
  let encontrado = null;

  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].toLowerCase() === busca) {
      encontrado = nomes[i];
      break;
    }
  }

  if (!busca || busca.trim() === "") {
    resultado.textContent = `Dados inválido preencha o campo corretamente`;
    resultado.style.color = "red";
  } else if (!apenasLetras) {
    resultado.textContent = "Digite apenas letras!";
    resultado.style.color = "red";
  } else if (encontrado) {
    resultado.innerHTML = `<li class="list-group-item" >${encontrado}</li>`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Nome não encontrado!";
  }
}

function carregarNomes() {
  let itensLista = "";
  for (i = 0; i < nomes.length; i++) {
    let nome = nomes[i];
    itensLista += ` <li class="list-group-item" >${nome}</li>`;
    
  }
  document.getElementById("resultado").innerHTML = itensLista;
}
