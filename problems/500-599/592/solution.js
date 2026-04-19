/*
 * @lc app=leetcode id=592 lang=javascript
 *
 * [592] Fraction Addition and Subtraction
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
  const gcd = (a, b) => b === 0 ? Math.abs(a) : gcd(b, a % b);

  // Extract all fractions with signs
  const parts = expression.match(/[+-]?\d+\/\d+/g);
  let num = 0, den = 1;

  for (const part of parts) {
    const [n, d] = part.split('/').map(Number);
    // num/den + n/d = (num*d + n*den) / (den*d)
    num = num * d + n * den;
    den = den * d;
    const g = gcd(num, den);
    num /= g;
    den /= g;
  }

  return `${num}/${den}`;
};
// @lc code=end

// TEST:
console.log(fractionAddition("-1/2+1/2")); // "0/1"
console.log(fractionAddition("-1/2+1/2+1/3")); // "1/3"
console.log(fractionAddition("1/3-1/2")); // "-1/6"
console.log(fractionAddition("2/1")); // "2/1"
