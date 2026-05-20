// Herança em JavaScript
// A herança é um princípio fundamental da programação orientada a objetos que permite criar uma nova classe (chamada de classe filha ou subclasse) a partir de uma classe existente (chamada de classe pai ou superclasse). A classe filha herda as propriedades e métodos da classe pai, podendo também adicionar suas próprias características ou modificar as existentes.
class Animal {
  // O construtor da classe Animal recebe o nome do animal
  constructor(nome) {
    this.nome = nome; // Propriedade comum a todos os animais
  }

  // Método para o animal comer
  comer() {
    console.log(`${this.nome}: está comendo.`);
  }
}

// A classe Gato herda da classe Animal
class Gato extends Animal {
  constructor(nome, cor) {
    super(nome); // Chama o construtor da classe pai (Animal)
    this.cor = cor; // Propriedade específica da classe Gato
  }

  // Método específico da classe Gato para emitir o som do gato
  miar() {
    console.log(`${this.nome} diz: Miau!`);
  }

  // Método específico da classe Gato para mostrar a cor do gato
  mostrarCor() {
    console.log(`${this.nome}: é da cor ${this.cor}.`);
  }

  // Sobrescreve o método comer da classe pai para fornecer uma implementação específica para gatos
  comer() {
    console.log(`${this.nome}: está comendo ração para gatos.`);
  }
}

// A classe Cachorro herda da classe Animal
class Cachorro extends Animal {
  // Método específico da classe Cachorro para emitir o som do cachorro
  latir() {
    console.log("Au au!");
  }
}

// Criando um objeto da classe Gato
const gato1 = new Gato("Mia", "preto");
gato1.comer();
gato1.miar();
gato1.mostrarCor();

// Criando um objeto da classe Cachorro
const cachorro1 = new Cachorro("Rex");
cachorro1.comer();
cachorro1.latir();
