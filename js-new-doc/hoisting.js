// hoisting is a behavior in javascript where variable and function declarations 
// are moved to the top of their containing scope during the compilation phase

console.log(a)
var a = 10

// this will print undefined because the variable a is hoisted to the top of the scope
// and the value is assigned later

// function hoisting

console.log(getName())
function getName() {
    console.log('John')
}
// this will print the function definition


// function expression

console.log(getName2)
var getName2 = function() {
    console.log('John')
}

// this will print undefined because the function is hoisted to the top of the scope
// and the value is assigned later


// let and const hoisting

console.log(b)
let b = 10

// this will throw an error because let and const are hoisted to the top of the scope
// but they are not initialized with a value


// hoisting is not recommended because it can cause unexpected behavior
// and it is better to declare variables at the top of the scope
