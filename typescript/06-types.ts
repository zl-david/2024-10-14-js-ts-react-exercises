// You can run/execute TypeScript files directly with "bun": https://bun.sh/

// 1. Reverse a string
function reverseString(input: any): any {
  return input.split("").reverse().join("");
}

// 2. Add two numbers
function add(a: any, b: any): any {
  return a + b;
}

// 3. Check if a number is even
function isEven(n: any): any {
  return n % 2 === 0;
}

// 4. Get the length of an array
function getArrayLength(arr: any): any {
  return arr.length;
}

// 5. Multiply two numbers
function multiply(a: any, b: any): any {
  return a * b;
}

// 6. Get the first element of an array
function getFirstElement(arr: any): any {
  return arr[0];
}

// 7. Generate a greeting message
function greet(name: any): any {
  return `Hello, ${name}!`;
}

// 8. Concatenate two strings
function concatenate(str1: any, str2: any): any {
  return str1 + str2;
}

// 9. Calculate the area of a rectangle
function rectangleArea(width: any, height: any): any {
  return width * height;
}

// 10. Check if a value is null
function isNull(value: any): any {
  return value === null;
}

// 11. Calculate the average of two numbers
function avg(a: any, b: any): any {
  return (a + b) / 2;
}

// 12. Convert a string to lowercase
function toLowerCase(input: any): any {
  return input.toLowerCase();
}

// 13. Find the maximum value in an array
function findMax(arr: any): any {
  return Math.max(...arr);
}

// 14. Reverse an array
function reverseArray(arr: any): any {
  return arr.reverse();
}

// 15. Check if a string contains another string
function contains(substring: any, text: any): any {
  return text.includes(substring);
}

// 16. Trim spaces from a string
function trimSpaces(input: any): any {
  return input.trim();
}

// 17. Divide a number by two
function half(n: any): any {
  return n / 2;
}

// 18. Check if a value is undefined
function isUndefined(value: any): any {
  return value === undefined;
}

// 19. Filter out negative numbers from an array
function filterNegatives(arr: any): any {
  return arr.filter((num: any) => num >= 0);
}

// 20. Check if a number is positive
function isPositive(n: any): any {
  return n > 0;
}

// 21. Remove the first element from an array
function removeFirst(arr: any): any {
  arr.shift();
  return arr;
}

// 22. Calculate the sum of an array of numbers
function sumArray(arr: any): any {
  return arr.reduce((total: any, num: any) => total + num, 0);
}

// 23. Append an element to the end of an array
function appendElement(arr: any, element: any): any {
  arr.push(element);
  return arr;
}

// 24. Find the index of an element in an array
function findIndex(arr: any, element: any): any {
  return arr.indexOf(element);
}

// 25. Convert an array to a string
function arrayToString(arr: any): any {
  return arr.join(", ");
}

// 26. Check if a string is empty
function isEmptyString(input: any): any {
  return input.length === 0;
}

// 27. Split a string based on a delimiter
function splitString(input: any, delimiter: any): any {
  return input.split(delimiter);
}

// 28. Convert a string to uppercase
function toUpperCase(input: any): any {
  return input.toUpperCase();
}

// 29. Get the last element of an array
function getLastElement(arr: any): any {
  return arr[arr.length - 1];
}

// 30. Check if all elements in an array are positive
function allPositive(arr: any): any {
  return arr.every((num: any) => num > 0);
}

/*
 * Extra
 */

// 1. Return a tuple with a string and a number
function createPerson(name: any, age: any): any {
  return [name, age];
}

// 2. Swap two values using a tuple
function swap(a: any, b: any): any {
  return [b, a];
}

// 3. Return an object representing a book
function createBook(title: any, author: any, pages: any): any {
  return { title, author, pages };
}

// 4. Update the price property in a product object
function updatePrice(product: any, newPrice: any): any {
  product.price = newPrice;
  return product;
}

// 5. Function that throws an error and never returns
function throwError(message: any): any {
  throw new Error(message);
}

// 6. Function that logs a message but doesn't return anything
function logMessage(message: any): any {
  console.log(message);
}

// 7. Function that accepts only specific literal values
function setLightMode(mode: any): any {
  if (mode === "dark" || mode === "light") {
    return `Light mode set to ${mode}`;
  }
  return "Invalid mode";
}

// 8. Function that accepts either a string or a number
function printId(id: any): any {
  if (typeof id === "string") {
    return `ID is a string: ${id}`;
  } else {
    return `ID is a number: ${id}`;
  }
}
