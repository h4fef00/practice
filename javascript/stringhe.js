let input = require("readline-sync");
// lunghezza stringa
// function lunghezza(stringa) {
//   return stringa.length;
// }

// // let scriviStringa = input.question("Scrivi una stringa: ");
// let lunghe = lunghezza(scriviStringa);
// console.log(`La tua stringa ha ${lunghe} lettere`);

// concatena stringa
// function concat(stringa1, stringa2) {
//   return stringa1 + " " + stringa2;
// }
// let str1 = "ciao mi chiamo";
// let str2 = "Afef";
// let insieme = concat(str1, str2);
// console.log(insieme);

// converti stringa in numero
// function convertiNumero(n) {
//   return parseInt(n);
// }
// let numeroStr = "10";
// console.log("Sono un numero versione stringa", numeroStr);
// let stringaNumero = convertiNumero(numeroStr);
// console.log("Sono un numero convertito", stringaNumero);

// metodo includes() per vedere se sottostringa è presente in stringa
// let stringa = "Ciao sono afef";
// let sotto = "bu";
// let cerca = stringa.includes(sotto);
// console.log("E' presente?", cerca);

// estrai una parte di stringa
// let stringa = "Consequat officia eu sit anim magna deserunt aliqua veniam do.";
// let estrai = stringa.slice(0, 9);
// console.log(estrai);

// converti stringa in maiuscolo
// let stringa =
//   "Amet ipsum laboris anim sit quis et ut adipisicing duis nisi anim proident.";
// let maiusc = stringa.toUpperCase();
// console.log(maiusc);
// converti in minuscolo
// let minuscola = maiusc.toLowerCase();
// console.log(minuscola);

// replace
// let stringa =
//   "Amet ipsum laboris anim sit quis et ut adipisicing duis nisi anim proident.";
// let sostituisci = "boh";
// let cerca = stringa.replace("ipsum", sostituisci);
// console.log(cerca);

// dividi stringa in array
// let stringa =
//   "Amet ipsum laboris anim sit quis et ut adipisicing duis nisi anim proident.";
// let array = stringa.split(" ");
// console.log("Array di sottostringhe", array);

// conta le vocali
// let stringa = "Exercitation amet qui cupidatat ipsum exercitation.";
// let stringaArray = stringa.split("");
// let conta = 0;
// for (const lettera of stringaArray) {
//   if (
//     lettera.includes("a") ||
//     lettera.includes("e") ||
//     lettera.includes("i") ||
//     lettera.includes("o") ||
//     lettera.includes("u")
//   ) {
//     conta++;
//   }
// }
// console.log("Conteggio vocali nella stringa", conta);

// inverti una stringa
let stringa = "Veniam proident dolor fugiat veniam amet qui fugiat do.";
let dividi = stringa.split("");
let contrario = dividi.reverse().join("");
console.log("Stringa al contrario", contrario);
