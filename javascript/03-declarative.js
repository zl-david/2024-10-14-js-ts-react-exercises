// Exercises from https://eloquentjavascript.net/05_higher_order.html

/*
 * Use the reduce method in combination with the
 * concat method to “flatten” an array of arrays
 * into a single array that has all the elements
 * of the original arrays.
 */

function flatten(arrays) {
  // Your code here.
}

/*
 * Write a higher-order function loop.
 * It takes a value, a test function, an update function, and a body function.
 * Each iteration, it first runs the test function on the current loop value and stops if that returns false.
 * Then it calls the body function, giving it the current value.
 * Finally, it calls the update function to create a new value and starts from the beginning.
 */

function loop(value, testFn, updateFn, bodyFn) {
  // Your code here.
}

/*
 * returns true when the given function returns true for every element in the array.
 * Implement "every" as a function that takes an array and a predicate function as parameters.
 * Write two versions, one using a loop and one using the some method.
 */
function every(array, predicate) {
  // You code here.
}

module.exports = {
  flatten,
  loop,
  every,
};
