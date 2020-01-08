/* Project Euler: Problem 4: Largest palindrome productPassed
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers. */

function largestPalindromeProduct(n) {
  let minProductNumber = 0;
  if (n > 1)
    minProductNumber = Number.parseInt("9" + String(0).repeat(n - 1), 10);
  let maxProductNumber = Number.parseInt(String(9).repeat(n), 10);
  let result = 0;
  for (let p1 = maxProductNumber; p1 > minProductNumber; p1--) {
    for (let p2 = maxProductNumber; p2 > minProductNumber; p2--) {
      result = p1 * p2;
      if (Array.from(result.toString()).reverse().join("") == result) {
        return result;
      }
    }
  }
}
