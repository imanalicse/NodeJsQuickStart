import getPosts, { getPostLength } from "./postController.js";

console.log(getPosts());
console.log(`Post length: ${getPostLength()}`)

// Common js sample code:
// const {generateRandomNumber, celsiusToFahrenheit } = require('./commonjs_utils');
// console.log(`Random number: ${generateRandomNumber()}`)
// console.log(`Celsius to fahrenheit: ${celsiusToFahrenheit(0)}`)