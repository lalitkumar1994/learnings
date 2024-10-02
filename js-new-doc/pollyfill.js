// pollyfill is a way to add support for features that are not supported by all browser


const array = [1, 2, 3, 4, 5]

// array.forEach((item) => {
//     console.log(item)
// })

// this will print the items in the array

// Polyfill for Array.prototype.map
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.map called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const O = Object(this);
    const len = O.length >>> 0;
    const A = new Array(len);

    for (let k = 0; k < len; k++) {
      if (k in O) {
        A[k] = callback.call(thisArg, O[k], k, O);
      }
    }

    return A;
  };
}

// Example usage of the map polyfill
const mappedArray = array.map((item, index, array) => {
    console.log(item, index, array)
    return item * 2
});
console.log(mappedArray); // Output: [2, 4, 6, 8, 10]

// ... existing code ...












