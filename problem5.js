/* Project Euler: Problem 5: Smallest multiplePassed
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n? */

function smallestMult(n) {
  let smallestNum = n;
  for (let i = 1; i < n; i++) {
    if (smallestNum % i > 0) {
      smallestNum += n;
      i = 1;
    }
  }
  return smallestNum;
}
