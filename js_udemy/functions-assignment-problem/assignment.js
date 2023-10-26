const name = "Max";
const sayHello1 = () => {
  return "Hi " + name;
};
const sayHello2 = (name) => console.log("Hi " + name);
const sayHello3 = (sayHi, name) => console.log(`${sayHi} ${name}!`);

console.log(sayHello1());
sayHello2("Max");
sayHello3("Hello", "Max");

/*Add a default argument to the function you created:
A fallback value for the phrase if no value is provided.*/
const sayHello4 = (name, greeting = "Hi") =>
  console.log(`${greeting} ${name}!`);
sayHello4("Max");
sayHello4("Max", "Hi");
