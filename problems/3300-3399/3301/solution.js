/*
 * @lc app=leetcode id=3301 lang=javascript
 *
 * [3301] Maximize the Total Height of Unique Towers
 */

// @lc code=start
/**
 * @param {number[]} maximumHeight
 * @return {number}
 */
var maximumTotalSum = function(maximumHeight) {
  maximumHeight.sort((a, b) => b - a);
  let result = 0;
  let prev = Infinity;

  for (const maxH of maximumHeight) {
    const h = Math.min(maxH, prev - 1);
    if (h <= 0) return -1;
    result += h;
    prev = h;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(maximumTotalSum([2,3,4,3])); // 10
console.log(maximumTotalSum([15,10])); // 25
console.log(maximumTotalSum([2,2,1])); // -1
console.log(maximumTotalSum([5,5,5])); // 12 (5+4+3)
