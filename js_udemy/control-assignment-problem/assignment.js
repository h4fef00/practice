/*In the attached code assignment.js, you find a variable that holds a random number between 0 and 1.
Write code that shows an alert (with any message) when that number is greater than 0.7. */
const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber > 0.7) {
  //   console.log(randomNumber);
  //   alert("I'm an alert!");
}

/*Create an array of numbers (any numbers of your choice) and loop through the array in two different ways
- outputting the numbers inside of the loop. */
let myArray = [10, 20, 30, 40, 50];
for (let i = 0; i < myArray.length; i++) {
  //   console.log(myArray[i]);
}

for (const number of myArray) {
  //   console.log(number);
}

/* Adjust one of the loops from the last task such that it actually starts at the end
(last element) of the array and loops to the first element.*/
// let myArray = [10, 20, 30, 40, 50];
for (let i = myArray.length - 1; i >= 0; i--) {
  //   console.log(myArray[i]);
}

/*Create another random number (in a separate constant) and show an alert in two different scenarios:
Both are greater 0.7 OR at least one of the two is NOT greater than 0.2. */
const secondRandomNumber = Math.random();
console.log(randomNumber, secondRandomNumber);
if (randomNumber > 0.7 && secondRandomNumber > 0.7) {
  console.log(randomNumber, secondRandomNumber);
  alert("Both are greater than 0.7");
} else if (randomNumber < 0.2 || secondRandomNumber < 0.2) {
  console.log(randomNumber, secondRandomNumber);
  alert("One of them is not greeter than 0.2");
}
