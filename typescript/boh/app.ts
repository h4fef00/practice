// tupla
let tupla: [number, string] = [10, "cioa"];

// union
let prova: string | number = 10;

// custom type
type Persona = {
  nome: string;
  cognome: string;
};

// enum
enum Ruolo {
  admin,
  user,
  guest,
}
const pers = {
  nome: "luca",
  cognome: "rossi",
  ruolo: Ruolo.admin,
};
