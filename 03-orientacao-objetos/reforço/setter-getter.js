class Pessoa {
  #nome;
  #idade;
  constructor(nome, idade) {
    this.#nome = nome;
    this.idade = idade;
  }

  // -- Setter para idade

  set idade(novaIdade) {
    if (typeof novaIdade !== "number" || novaIdade < 0) {
      return "ERRO: A idade deve ser um número positivo."
      // Se Falhar, mantem o valor antigo e impede a mudança.
    } else {
      this.#idade = novaIdade; //Salva se a validação passar
    }
  }

  get idade() {
    return `Idade: ${this.#idade} anos`;
  }

  get nome() {
    return this.#nome;
  }
}

let joão = new Pessoa("João", 29);

//teste setter esta funcionando?

console.log(` ${joão.idade}`);
