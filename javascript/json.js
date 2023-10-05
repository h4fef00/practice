let obj = {
  nome: "Paolo",
  cognome: "Rossi",
  eta: 20,
  ruolo: "Admin",
};

let stringaJson = JSON.stringify(obj);
console.log("stringa json", stringaJson);
let oggettoJS = JSON.parse(stringaJson);
console.log("oggetto js", oggettoJS);

// accedere ai valori di un oggetto json
console.log(oggettoJS.nome);
// modificare valori
oggettoJS.nome = "Michele";
console.log(oggettoJS.nome);

// aggiungere proprietà
oggettoJS.hobby = "giocare a pallone";
console.log(oggettoJS);

// rimuovere proprietà
let rimuovi = delete oggettoJS.hobby;
console.log(oggettoJS);
