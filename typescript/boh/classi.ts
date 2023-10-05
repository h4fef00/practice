class PersonaDue {
  private nome: string;
  private cognome: string;

  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
  }

  presenta(): void {
    console.log(`ciao sono ${this.nome} ${this.cognome}`);
  }

  saluta(persona: PersonaDue): void {
    console.log(`ciao ${persona.nome} ${persona.cognome}, molto piacere`);
  }

  cambia() {}
}
let uno = new PersonaDue("luca", "rossi");
let due = new PersonaDue("marco", "carta");
let tre = new PersonaDue("michele", "bravi");

// uno.presenta();
// due.saluta(uno);
