/* Project Euler: Problem 6: Sum square differencePassed
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum. */

const sumSquareDifference = n => sum(n) ** 2 - sumOfSquare(n);
const sumOfSquare = n => (n === 1 ? n : sumOfSquare(n - 1) + n ** 2);
const sum = n => (n === 1 ? n : sum(n - 1) + n);
