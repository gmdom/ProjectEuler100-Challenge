/* Project Euler: Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number? */

function largestPrimeFactor(number) {
  let factor;
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      number /= i;
      factor = i;
      i = 1;
    }
  }
  return factor;
}
