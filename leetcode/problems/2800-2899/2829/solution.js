/*
 * @lc app=leetcode id=2829 lang=javascript
 *
 * [2829] Determine the Minimum Sum of a k-avoiding Array
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function(n, k) {
  const picked = new Set();
  let sum = 0;
  for (let x = 1; picked.size < n; x++) {
    if (!picked.has(k - x)) {
      picked.add(x);
      sum += x;
    }
  }
  return sum;
};
// @lc code=end

// TEST:
console.log(minimumSum(5, 4)); // 18
console.log(minimumSum(2, 6)); // 3
console.log(minimumSum(3, 5)); // 8 -> [1,2,5]
