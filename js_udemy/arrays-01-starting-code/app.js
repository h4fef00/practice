// // // const numbers = [1, 2, 3]; //most used
// // // console.log(numbers);

// // // const moreNumbers = new Array(); //senza argomenti = array vuoto
// // // const moreAndMoreNumbers = new Array(5); //specifichiamo la length
// // // const otherNumbers = Array(2);
// // // console.log(moreNumbers); // []
// // // console.log(moreAndMoreNumbers); //5 length
// // // console.log(otherNumbers);

// // // const yetMoreNumbers = Array.of(19);
// // // console.log(yetMoreNumbers);
// // // let string = "Ciao";
// // // const moreNumbers = Array.from(string);
// // // console.log(moreNumbers);

// // // const listItems = document.querySelectorAll("li");
// // // const moreNumbers = Array.from(listItems);
// // // console.log(moreNumbers);

// // // const hobbies = ["sports"];
// // // hobbies.push("reading");
// // // hobbies.unshift("sleeping");
// // // hobbies.pop();
// // // hobbies.shift();
// // // hobbies[1] = "coding";
// // // hobbies.splice(1, 0, "pallavolo");
// // // console.log(hobbies);

// // const testResults = [1, 23.4, 34, 434.3, 302.2, -1, 34];
// // // const storedResults = testResults.slice(1, 2);
// // const storedResults = testResults.concat(["ciao", 10, 20]);
// // testResults.push(100);
// // console.log(storedResults, testResults);
// // console.log(testResults.indexOf(34));
// // console.log(testResults.lastIndexOf(34));
// // console.log(testResults.includes(23.4));

// // const personData = [{ name: "Max" }, { name: "Afef" }];
// // // console.log(personData.indexOf({ name: "Afef" })); //doesn't work on objects
// // const afef = personData.find((person, idx, persons) => {
// //   return person.name === "Afef";
// // });
// // afef.name = "Vincenzo";
// // console.log(afef);

// // const max = personData.findIndex((person, idx, persons) => {
// //   return person.name === "Max";
// // });
// // console.log(max);

// // const prices = [10.99, 5.99, 3.99, 6.59];
// // const tax = 0.19;
// // const adjustedPrices = [];
// // // for (const price of prices) {
// // //   adjustedPrices.push(price * (1 + tax));
// // // }

// // prices.forEach((price, idx, prices) => {
// //   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
// //   adjustedPrices.push(priceObj);
// // });
// // console.log(adjustedPrices);
// // console.log(prices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjusted = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });
// // console.log(prices, taxAdjusted);

// const sortedArray = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedArray.reverse());

// const filtered = prices.filter((price, index, prices) => {
//   return price > 6;
// });
// console.log(filtered);

// // let sum = 0;
// // prices.forEach((price) => {
// //   sum += price;
// // });
// // console.log(sum);

// const sum = prices.reduce((prevValue, currValue) => {
//   return prevValue + currValue;
// }, 0);
// console.log(sum);

// const data = ["new york;10.99;2000"];
// const stringa = data.join();
// const stringaArray = stringa.split(";");
// console.log(stringa);
// console.log(stringaArray);

// const copied = [...data];
// copied.push("paolo");
// console.log(data, copied);

// const prices = [10.99, 5.99, 3.99, 6.59];
// console.log(Math.min(...prices));

// const nameData = ["Afef", "Hassani", 23, "Napoli"];
// const firstName = nameData[0]
// const lastName = nameData[1]
// const [firstName, lastName, ...otherInfo] = nameData;
// console.log(firstName, lastName, otherInfo);
