/*
 * @lc app=leetcode id=3091 lang=javascript
 *
 * [3091] Apply Operations to Make Sum of Array Greater Than or Equal to k
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var minOperations = function(k) {
  if (k <= 1) return 0;
  let ans = Infinity;
  for (let n = 1; n * n <= k + n; n++) {
    const v = Math.ceil(k / n);
    ans = Math.min(ans, v + n - 2);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(minOperations(11)); // 5
console.log(minOperations(1)); // 0
console.log(minOperations(2)); // 1
console.log(minOperations(3)); // 2
console.log(minOperations(4)); // 2
console.log(minOperations(5)); // 3
