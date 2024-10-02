// ES6 (ECMAScript 2015) introduced several new features to JavaScript:

// 1. let and const for block-scoped variable declarations
let x = 10;
const PI = 3.14159;

// 2. Arrow functions
const add = (a, b) => a + b;

// 3. Template literals
const name = "Alice";
console.log(`Hello, ${name}!`);

// 4. Destructuring assignment
const [a, b] = [1, 2];
const { firstName, lastName } = { firstName: "John", lastName: "Doe" };

// 5. Default parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

// 6. Rest and spread operators
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// 7. Object literal enhancements
const obj = {
  x,
  greet() {
    console.log("Hello!");
  },
};

// 8. for...of loop
for (const item of [1, 2, 3]) {
  console.log(item);
}

// 9. Map and Set data structures
const map = new Map();
const set = new Set();

// 10. Promise for asynchronous programming
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
});

// 11. Class syntax for object-oriented programming
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

// 12. Modules
// import { function1, function2 } from './module';
// export function myFunction() { ... }

// These are some of the key features introduced in ES6
