/*
 * @lc app=leetcode id=1492 lang=javascript
 *
 * [1492] The kth Factor of n
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
      if (count === k) return i;
    }
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(kthFactor(12, 3)); // 3
console.log(kthFactor(7, 2)); // 7
console.log(kthFactor(4, 4)); // -1
console.log(kthFactor(1, 1)); // 1
