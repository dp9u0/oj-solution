/*
 * @lc app=leetcode id=3697 lang=javascript
 *
 * [3697] Compute Decimal Representation
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function(n) {
  const result = [];
  let exp = 1;
  while (n > 0) {
    const digit = n % 10;
    if (digit > 0) result.push(digit * exp);
    n = Math.floor(n / 10);
    exp *= 10;
  }
  return result.reverse();
};
// @lc code=end

// TEST:
console.log(JSON.stringify(decimalRepresentation(537))); // [500,30,7]
console.log(JSON.stringify(decimalRepresentation(102))); // [2,100]
console.log(JSON.stringify(decimalRepresentation(6))); // [6]
console.log(JSON.stringify(decimalRepresentation(1000))); // [1000]
console.log(JSON.stringify(decimalRepresentation(999))); // [900,90,9]
console.log(JSON.stringify(decimalRepresentation(1))); // [1]
