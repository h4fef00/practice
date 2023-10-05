// con while stampa da 1 a 5
let a = 1;
while (a <= 5) {
  console.log("Conta da 1 a 5", a);
  a++;
}

// somma da 1 a 10
let somma = 0;
let conta = 1;
while (conta <= 10) {
  somma += conta;
  conta++;
  console.log("Somma da 1 a 10", somma);
}

// stampa i pari
let n = 2;
while (n <= 10) {
  if (n % 2 === 0) {
    console.log("Pari con while", n);
  }
  n++;
}

// stampa i pari con do while
let n2 = 2;
do {
  if (n2 % 2 === 0) {
    console.log("Pari con dowhile", n2);
  }
  n2++;
} while (n2 <= 10);
