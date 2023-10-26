// const ids = new Set([0, 1, 2, 3]);
// ids.add(3);
// ids.delete(1);

// for (const entry of ids.values()) {
//   console.log(entry);
// }

// const person1 = { name: "Max" };
// const person2 = { name: "Manuel" };
// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
// console.log(personData.get(person1));
// for (const value of personData.values()) {
//   console.log(value);
// }

let person = { name: "afef" };
const persons = new WeakSet();
persons.add(person);
console.log(persons);
