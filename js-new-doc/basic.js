
//
function distribute(amount, accounts) {
    let totalWeight = Object.values(accounts).reduce((sum, val) => sum + val, 0);
    let distributedAmount = {};
    let totalDistributed = 0;

    // First pass: distribute as much as possible based on weight
    let remainderAccounts = [];
    for (let account in accounts) {
        let weight = accounts[account];
        let share = Math.floor((weight / totalWeight) * amount); // integer portion
        distributedAmount[account] = share;
        totalDistributed += share;

        // Track remaining portion for later, using exact value
        let exactShare = (weight / totalWeight) * amount;
        remainderAccounts.push({ account, diff: exactShare - share });
    }

    // Remaining amount to distribute (if any)
    let remaining = amount - totalDistributed;

    // Sort remainder accounts by how much they are under-distributed
    remainderAccounts.sort((a, b) => b.diff - a.diff);

    // Distribute the remaining amount to the accounts that are most under-distributed
    let i = 0;
    while (remaining > 0) {
        let { account } = remainderAccounts[i];
        distributedAmount[account]++;
        remaining--;
        i++;
    }

    return distributedAmount;
}

// Test cases
console.log(distribute(10, {A: 2, B: 2, C: 2, D: 2}));  
// Expected: { A: 2, B: 2, C: 2, D: 2 }

console.log(distribute(23, {A: 8, B: 7, C: 6, D: 3}));  
// Expected: { A: 7, B: 7, C: 6, D: 3 }

console.log(distribute(10, {A: 50, B: 50, C: 40, D: 30})); 
// Expected: { A: 3, B: 3, C: 2, D: 2 }

console.log(distribute(5, {A: 1, B: 2, C: 3}));  
// Expected: { A: 1, B: 1, C: 3 }

console.log(distribute(50, {A: 10, B: 20, C: 30}));  
// Expected: { A: 8, B: 16, C: 26 }

// curring

// function curriedMultiply(a) {
//     return function(b) {
//         if (b !== undefined) {
//             return curriedMultiply(a * b);
//         }
//         return a;
//     };
// }

// const result1 = curriedMultiply(2)(3)(4); // 24
// console.log(result1()); // Output: 24

// function multiply(...args) {
//     return args.reduce((acc, val) => acc * val, 1);
// }

// function curriedMultiply(...args) {
//     return function(...nextArgs) {
//         if (nextArgs.length === 0) {
//             return multiply(...args);
//         }
//         return curriedMultiply(...args, ...nextArgs);
//     };
// }

// const result = curriedMultiply(2)(3)(4)(5)(); // 24
// console.log(result);

// Prototype inheritance
// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }


// hero1 = new Hero('lalit', 1)

// Hero.prototype.getInfo = function() {
//     console.log(this.name, this.level)
// }

// hero1.getInfo()
// function Animal(name) {
//     this.name = name;
// }
 
// Animal.prototype.sound = function() {
//     console.log("Some generic sound");
// };
 
// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }
 
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
 
// Dog.prototype.sound = function() {
//     console.log("Woof! Woof!");
// };
 
// const myDog = new Dog("Buddy", "Labrador");
// myDog.sound();  // Outputs: Woof! Woof!
// throatlling and debouncing

// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - lastCall >= delay) {
//       func(...args);
//       lastCall = now;
//     }
//   };
// }

// const throttledScrollHandler = throttle(() => {
//   console.log("Loading more content...");
// }, 1000);

// window.addEventListener("scroll", throttledScrollHandler);


// function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }



// const debounceSearch = debounce((query) => {
//   console.log(`Searching for: ${query}`);
//   // Make API call with the search query
// }, 300);

// const searchInput = document.getElementById("search-input");
// searchInput.addEventListener("input", (event) => {
//   debounceSearch(event.target.value);
// });
// call apply and bind

// const person = {
//     name: 'lalit',
//     age: 29
// }

// function getInfo (name, test) {
//     console.log("Hi:", name, test, ". my info", this.name, this.age, )
// }

// getInfo.call(person, 'Neetu')
// getInfo.apply(person, ['Neetu', 'test'])
// getInfo.bind(person)('Neetu', 'text')





// let observer = new MutationObserver(callback);
// Select the div with data-attr="5"
// const targetDiv = document.querySelector('[data-attr="5"]');

// // Create a callback function for the observer
// const observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             console.log('Div with data-attr="5" is in view!');
//             // You can trigger any event or function here
//             // For example: customFunction();
//         }
//     });
// };

// // Set up the observer options (e.g., to check when 50% of the target is visible)
// const observerOptions = {
//     root: null,  // Use the viewport as the root
//     threshold: 0.5  // 50% of the div should be visible
// };

// // Create a new observer with the callback and options
// const observer = new IntersectionObserver(observerCallback, observerOptions);

// // Start observing the target div
// observer.observe(targetDiv);


// Promises
// const isPromise = false
// const promise = new Promise((resolve, reject) => {
//     if(isPromise) resolve("it is promise")
//     else reject("it is not a promise")
// })

// promise.then((msg) => console.log(msg)).catch(err => console.log(err))



// .all

// const p1 = new Promise((resolve) => resolve('error') )
// const p2 = new Promise((resolve, reject) => reject('200'))
// const p3 = new Promise((resolve) => resolve('200') )

// promises = [p1, p2, p3];

// Promise.all(promises).then(msg => console.log(msg)).catch(err => console.log(err))
// Promise.any(promises).then(msg => console.log(msg)).catch(err => console.log(err))
// Promise.race(promises).then(msg => console.log(msg)).catch(err => console.log(err))

// // write pollyfill for array to map over the list

// const myArray = [10,20,30,40]

// Array.prototype.myMap = function(callbackFn) {
//   var arr = [];              
//   for (var i = 0; i < this.length; i++) { 
//      /* call the callback function for every value of this array and       push the returned value into our resulting array
//      */
//     arr.push(callbackFn(this[i], i, this));
//   }
//   return arr;
// }

// Array.prototype.filter = function(callbackFn) {
//   var arr = [];              
//   for (var i = 0; i < this.length; i++) { 
//      /* call the callback function for every value of this array and       push the returned value into our resulting array
//      */
//     if(callbackFn(this[i], i, this)){
//         arr.push(this[i])
//     };
//   }
//   return arr;
// }


// // map
// myArray.map((item, index, array) => {
//     console.log(item, index, array)
//     return item * item
// })

