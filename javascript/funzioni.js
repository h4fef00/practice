//base e alterzza come parametri return l'area del rettangolo
function area(base, altezza) {
  return base * altezza;
}
let base = 5;
let altezza = 10;
let areaRettangolo = area(base, altezza);
console.log(
  `La base è ${base}, l'altezza è ${altezza}. L'area del rettangolo è ${area(
    base,
    altezza
  )}`
);

// se numero pari restituisci true
function controllo(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let numeroPari = 5;
let controlloPari = controllo(numeroPari);
console.log(`Il numero ${numeroPari} è pari? `, controlloPari);

// funzione che genera un numero casuale compreso tra valore minimo e massimo
function casuale(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
let minimo = 20;
let massimo = 3;
let numeroCasuale = casuale(minimo, massimo);
console.log("La funzione ha generato", numeroCasuale);
