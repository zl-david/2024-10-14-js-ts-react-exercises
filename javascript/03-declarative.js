// Exercises from https://eloquentjavascript.net/05_higher_order.html

{
  console.log("--- FLATTEN ---");
  /*
   * Use the reduce method in combination with the
   * concat method to “flatten” an array of arrays
   * into a single array that has all the elements
   * of the original arrays.
   */

  function flatten(arrays) {
    // Your code here.
  }

  console.log(flatten([[1, 2, 3], [4, 5], [6]]));
  // → [1, 2, 3, 4, 5, 6]
}

{
  console.log("--- LOOP ---");

  /*
   * Write a higher-order function loop.
   * It takes a value, a test function, an update function, and a body function.
   * Each iteration, it first runs the test function on the current loop value and stops if that returns false.
   * Then it calls the body function, giving it the current value.
   * Finally, it calls the update function to create a new value and starts from the beginning.
   */

  function loop(value, testFn, updateFn, bodyFn) {}

  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1
}

{
  console.log("--- EVERY ---");

  /*
   * returns true when the given function returns true for every element in the array.
   * Implement "every" as a function that takes an array and a predicate function as parameters.
   */
  function every(array, test) {
    // Your code here.
  }

  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true
}
