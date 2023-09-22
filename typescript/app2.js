"use strict";
//funzioni
// tipi di parametri
function somma(a, b = 1) {
    console.log(a + b);
}
somma(2, 10);
// inference nei parametri di default
console.log("Parametro di default");
somma(10);
// il tipo di ritorno
function sommaRitorno(a, b = 1) {
    return a + b;
}
somma(2, 10);
// funzioni come tipo di variabile
let prova21 = somma;
console.log(typeof prova21);
