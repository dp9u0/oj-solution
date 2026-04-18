/*
 * @lc app=leetcode id=1646 lang=javascript
 *
 * [1646] Get Maximum in Generated Array
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  if (n === 0) return 0;
  const nums = new Array(n + 1).fill(0);
  nums[1] = 1;
  let max = 1;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      nums[i] = nums[i / 2];
    } else {
      nums[i] = nums[(i - 1) / 2] + nums[(i - 1) / 2 + 1];
    }
    max = Math.max(max, nums[i]);
  }
  return max;
};
// @lc code=end

// TEST:
console.log(getMaximumGenerated(7)); // 3
console.log(getMaximumGenerated(2)); // 1
console.log(getMaximumGenerated(3)); // 2
console.log(getMaximumGenerated(0)); // 0
console.log(getMaximumGenerated(1)); // 1
