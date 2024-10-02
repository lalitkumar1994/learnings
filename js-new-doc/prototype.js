// prototype is a property of a function that is used to implement inheritance in javascript
// it is a way to add methods and properties to a function
// Constructor function

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

// Adding another method to the prototype
Person.prototype.birthday = function() {
    this.age++;
    console.log(`Happy birthday! ${this.name} is now ${this.age} years old.`);
};

// Creating instances of Person
const john = new Person('John', 30);
const jane = new Person('Jane', 25);

// Using the prototype methods
john.greet(); // Output: Hello, my name is John and I'm 30 years old.
jane.greet(); // Output: Hello, my name is Jane and I'm 25 years old.

john.birthday(); // Output: Happy birthday! John is now 31 years old.

// Demonstrating prototype inheritance
console.log(john.hasOwnProperty('name')); // true (own property)
console.log(john.hasOwnProperty('greet')); // false (inherited from prototype)

// Modifying the prototype affects all instances
Person.prototype.introduce = function() {
    console.log(`I'm ${this.name}, nice to meet you!`);
};

john.introduce(); // Output: I'm John, nice to meet you!
jane.introduce(); // Output: I'm Jane, nice to meet you!



// Prototype Chaining

// Parent constructor
function Animal(name) {
    this.name = name;
}

// Method on Animal's prototype
Animal.prototype.makeSound = function() {
    console.log("The animal makes a sound");
};

// Child constructor
function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor
    this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Method specific to Dog
Dog.prototype.bark = function() {
    console.log("Woof! Woof!");
};

// Override parent's method
Dog.prototype.makeSound = function() {
    console.log(`${this.name} barks loudly!`);
};

// Create instances
const genericAnimal = new Animal("Generic Animal");
const myDog = new Dog("Buddy", "Golden Retriever");

// Demonstrate prototype chaining
console.log("\nDemonstrating Prototype Chaining:");
console.log(myDog.name); // Output: Buddy
console.log(myDog.breed); // Output: Golden Retriever
myDog.makeSound(); // Output: Buddy barks loudly!
myDog.bark(); // Output: Woof! Woof!

console.log(myDog instanceof Dog); // true
console.log(myDog instanceof Animal); // true
console.log(myDog instanceof Object); // true

// Accessing properties up the prototype chain
console.log(myDog.hasOwnProperty('name')); // true
console.log(myDog.hasOwnProperty('makeSound')); // false
console.log('makeSound' in myDog); // true (inherited)
