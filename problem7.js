/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number? */

function nthPrime(n) {
  const primes = [];
  let count = 0;
  let number = 1;
  while (count < n) {
    let isPrime = true;
    number += 1;
    for (let i = 0; i < primes.length; i++) {
      if (number % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(number);
      count += 1;
    }
  }
  return number;
}
