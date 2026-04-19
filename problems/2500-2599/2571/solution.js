/*
 * @lc app=leetcode id=2571 lang=javascript
 *
 * [2571] Minimum Operations to Reduce an Integer to 0
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
  let result = 0;
  while (n > 0) {
    if (n & 1) {
      // Last two bits are "11" → add 1 to carry, "01" → subtract 1
      if (n & 2) n++;
      else n--;
      result++;
    }
    n >>= 1;
  }
  return result;
};
// @lc code=end

// TEST:
console.log(minOperations(39)); // 3
console.log(minOperations(54)); // 3
console.log(minOperations(1)); // 1
console.log(minOperations(15)); // 2
