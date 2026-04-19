/*
 * @lc app=leetcode id=2279 lang=javascript
 *
 * [2279] Maximum Bags With Full Capacity of Rocks
 */

// @lc code=start
/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  const diff = capacity.map((c, i) => c - rocks[i]);
  diff.sort((a, b) => a - b);
  let count = 0;
  for (const d of diff) {
    if (d > additionalRocks) break;
    additionalRocks -= d;
    count++;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2)); // 3
console.log(maximumBags([10, 2, 2], [2, 2, 0], 100)); // 3
