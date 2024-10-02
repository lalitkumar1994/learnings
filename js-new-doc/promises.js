// promises are used to handle asynchronous operations in javascript
// they are used to avoid callback hell
// they are used to handle multiple promises
// they are used to handle errors
// they are used to handle success
// they are used to handle multiple promises
// they are used to handle errors
// they are used to handle success
// they are used to handle multiple promises

// explain promise

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000)
})

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})


// Promise.all
console.log("\nPromise.all:");
// Promise.all takes an array of promises and returns a new promise that resolves when all input promises have resolved
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve('foo'), 100));
const promise3 = 42;

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 'foo', 42]
});

// Promise.race
console.log("\nPromise.race:");
// Promise.race takes an array of promises and returns a new promise that resolves or rejects as soon as one of the promises in the array resolves or rejects
const promise4 = new Promise((resolve) => setTimeout(() => resolve('fast'), 100));
const promise5 = new Promise((resolve) => setTimeout(() => resolve('slow'), 500));

Promise.race([promise4, promise5]).then((value) => {
  console.log(value); // 'fast'
});

// Promise.allSettled
console.log("\nPromise.allSettled:");
// Promise.allSettled takes an array of promises and returns a new promise that resolves after all of the given promises have either resolved or rejected
const promise6 = Promise.resolve(3);
const promise7 = new Promise((resolve, reject) => setTimeout(() => reject('error'), 100));

Promise.allSettled([promise6, promise7]).then((results) => {
  results.forEach((result) => console.log(result.status));
});

// Promise.any
console.log("\nPromise.any:");
// Promise.any takes an array of promises and returns a single promise that resolves as soon as any of the promises in the array fulfills
const promise8 = new Promise((resolve, reject) => setTimeout(() => reject('error'), 100));
const promise9 = new Promise((resolve) => setTimeout(() => resolve('success'), 200));

Promise.any([promise8, promise9]).then((value) => {
  console.log(value); // 'success'
});

// Promise.resolve
console.log("\nPromise.resolve:");
// Promise.resolve returns a Promise object that is resolved with a given value
Promise.resolve('Success').then((value) => {
  console.log(value); // 'Success'
});

// Promise.reject
console.log("\nPromise.reject:");
// Promise.reject returns a Promise object that is rejected with a given reason
Promise.reject(new Error('fail')).catch((error) => {
  console.log(error.message); // 'fail'
});

