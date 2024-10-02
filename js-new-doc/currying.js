// currying is a technique in functional programming where a function that takes multiple
// arguments is transformed into a sequence of functions that each take a single argument

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args)
        }
        return (...args2) => curried(...args, ...args2)
    }
}

function sum(a, b) {
    return a + b
}

const curriedSum = curry(sum)

console.log(curriedSum(1, 2))
console.log(curriedSum(1)(2))