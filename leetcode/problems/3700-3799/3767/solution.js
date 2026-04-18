/*
 * @lc app=leetcode id=3767 lang=javascript
 *
 * [3767] Maximize Points After Choosing K Tasks
 */

// @lc code=start
/**
 * @param {number[]} technique1
 * @param {number[]} technique2
 * @param {number} k
 * @return {number}
 */
var maxPoints = function(technique1, technique2, k) {
  const n = technique1.length;
  let sum = 0;
  const diff = [];
  for (let i = 0; i < n; i++) {
    sum += technique1[i];
    diff.push(technique2[i] - technique1[i]);
  }
  diff.sort((a, b) => b - a);
  const swaps = n - k;
  for (let i = 0; i < swaps; i++) {
    if (diff[i] > 0) sum += diff[i];
  }
  return sum;
};
// @lc code=end

// TEST:
console.log(maxPoints([5, 2, 10], [10, 3, 8], 2)); // 22
console.log(maxPoints([10, 20, 30], [5, 15, 25], 2)); // 60
console.log(maxPoints([1, 2, 3], [4, 5, 6], 0)); // 15
console.log(maxPoints([5], [3], 1)); // 5
console.log(maxPoints([1, 1], [10, 10], 1)); // 11
