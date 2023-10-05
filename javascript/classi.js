// stampa un saluto alla persona
class Persona {
  constructor(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
  }

  saluta() {
    console.log(`Ciao ${this.nome} ${this.cognome}!`);
  }
}

let a = new Persona("Afef", "Hqassani");
a.saluta();

// stampa i dettagli dell'automobile
class Auto {
  constructor(nome, marca, anno) {
    this.nome = nome;
    this.marca = marca;
    this.anno = anno;
  }

  dettagli() {
    console.log(
      `L'automobile ${this.nome} è dell'anno ${this.anno} ed è marca ${this.marca}`
    );
  }
}

let automobile = new Auto("bugatti", "bugatti veyron", 204);
automobile.dettagli();

// calcolo area del cerchio
class Cerchio {
  constructor(raggio) {
    this.raggio = raggio;
  }

  calcoloArea() {
    let calcolo = Math.PI * this.raggio * this.raggio;
    return console.log(`Il raggio è ${this.raggio}, l'area è ${calcolo}`);
  }
}

let c = new Cerchio(2);
let areacC = c.calcoloArea();
