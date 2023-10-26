let numbers = [10, 2, 3, 5, 1];
const filtered = numbers.filter((n) => n > 5);
console.log(filtered);
ù;

const mappedNumbers = numbers.map((num) => ({ num: num }));
console.log(mappedNumbers);

const reduced = numbers.reduce((prev, curr) => prev * curr);
console.log(reduced);

function findMax() {}
