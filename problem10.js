/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n. */

function primeSummation(n) {
  const primes = [];
  let number = 2;
  while (number < n) {
    let isPrime = true;
    for (let i = 0; i < primes.length; i++) {
      if (Math.sqrt(number) < primes[i]) break;
      if (number % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime)
      primes.push(number);
    number += 1;
  }
  return primes.reduce((a, b) => a + b);
}
