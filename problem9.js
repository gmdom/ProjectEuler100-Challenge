/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n. */

function specialPythagoreanTriplet(n) {
  for (let a = 1; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      for (let c = b + 1; c < n; c++) {
        if ((a ** 2 + b ** 2) === c ** 2) {
          if (a + b + c === n) {
            return a * b * c;
          }
        }
      }
    }
  }
}
