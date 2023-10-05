// arrow che prende due numeri e restituisce la somma
let somma = (a, b) => {
  return a + b;
};

console.log("La somma dei due è", somma(2, 3));

// area del rettangolo prendendo larghezza e altezza
let area = (lung, alt) => {
  return lung * alt;
};

console.log("L'area del rettangolo è ", area(10, 10));

// filtrare numeri pari da un array
let arrayy = [2, 1, 3, 5, 6];
let filtro = arrayy.filter((elemento) => elemento % 2 === 0);
console.log(filtro);

// converti strighe in maiuscolo da un array
let stringhe = ["ciao", "boh", "jdoiwjdws", "buongiorno"];
let maiuscole = stringhe.map((stringa) => stringa.toUpperCase());
console.log(maiuscole);

// se positivo === true
let risultato = (n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
console.log("Il numero è positivo?", risultato(10));

// concatenazione di due stringhe
let concatenazione = (str1, str2) => {
  return str1 + str2;
};
console.log(concatenazione("ciao ", "a tutti"));
