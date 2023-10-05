var input = require("readline-sync");
var risposta = parseInt(input.question("Scegli l'esercizio "));
switch (risposta) {
  case 1:
    esercizio1();
    break;

  case 2:
    esercizio2();
    break;

  case 3:
    esercizio3();
    break;

  case 4:
    esercizio4();
    break;
}
//1. conta da 1 a 10 con il while
function esercizio1() {
  let partenza = 1;
  while (partenza <= 10) {
    console.log(partenza);
    partenza++;
  }
}

//conta da 1 a 10 con il for
function esercizio2() {
  for (let x = 1; x <= 10; x++) {
    console.log(x);
  }
}

//3. somma solo i valori maggiori di 5 durante una conta da 1 a 10. si consiglia di usare un totalizzatore.
function esercizio3() {
  let tot = 0;
  for (let x = 1; x <= 10; x++) {
    if (x > 5) {
      tot += x;
    }
  }
  console.log("Totale somma " + tot);
}

//4. sommare i valori compresi da 3 a 7 e fare la media aritmetica dei valori sommati.
function esercizio4() {
  let tot = 0;
  for (let x = 1; x <= 10; x++) {
    if (x >= 3 && x <= 7) {
      tot += x;
    }
  }
  console.log("Totale somma " + tot);
}
/*5. confrontare due valori numerici passati in input dinamico e far stampare al programma quale
valore è maggiore o se sono uguali.*/

/*6. verificare se un valore numerico passato dinamicamente è pari o dispari. suggerimento: usare l'operatore aritmetico & per fare la verifica.*/
//es1. crea un argoritmo che visualizza i numeri da 1 a 10
//es2. crea un argoritmo che di 5 in 5 visualizza tutti i numeri da 5 a 100
/*es3. crea un argoritmo che chiede fino a quanto contare. successivamente visualizza i numeri da 1 al valore inserito.*/
/*es4. crea un argoritmo che chiede fino a quanto contare e di quanto incrementare ogni volta. 
successivamente visualizza i numeri da incremento fino al valore inserito.*/
/*es4. crea un argoritmo che chiede fino a quanto contare e di quanto incrementare ogni volta. 
successivamente visualizza i numeri da incremento fino al valore inserito.*/
/*es7. crea un algoritmo che genera numeri da 1 a 100. sommare solo quelli maggiori o uguali a 50 
e minori o uguali di 80. alla fine del ciclo visualizzare il totale ottenuto.*/
/*es8. crea un algoritmo che genera numeri da 1 a 100. sommare solo quelli maggiori o uguali a 50 
o maggiori o uguali di 80. alla fine del ciclo visualizzare il totale ottenuto.*/
/*es9. creare un algoritmo che genera i numeri da 1 a 100. contare e sommare solo quelli pari. 
alla fine del ciclo visulizzare quanti sono i numeri pari ed il loro totale.*/
/*es10. creare un algoritmo che genera i numeri da 1 a 100. contare e sommare separatamente quelli pari o dispari. 
alla fine del ciclo visualizzare quanti sono i numeri pari ed il loro totale e 
quanti sono quelli dispari ed il loro totale.*/
