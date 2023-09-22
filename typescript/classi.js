"use strict";
class PersonaDue {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    presenta() {
        console.log(`ciao sono ${this.nome} ${this.cognome}`);
    }
    saluta(persona) {
        console.log(`ciao ${persona.nome} ${persona.cognome}, molto piacere`);
    }
    cambia() { }
}
let uno = new PersonaDue("luca", "rossi");
let due = new PersonaDue("marco", "carta");
let tre = new PersonaDue("michele", "bravi");
// uno.presenta();
// due.saluta(uno);
