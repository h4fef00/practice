"use strict";
// tupla
let tupla = [10, "cioa"];
// union
let prova = 10;
// enum
var Ruolo;
(function (Ruolo) {
    Ruolo[Ruolo["admin"] = 0] = "admin";
    Ruolo[Ruolo["user"] = 1] = "user";
    Ruolo[Ruolo["guest"] = 2] = "guest";
})(Ruolo || (Ruolo = {}));
const pers = {
    nome: "luca",
    cognome: "rossi",
    ruolo: Ruolo.admin,
};
