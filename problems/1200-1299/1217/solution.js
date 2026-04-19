/*
 * @lc app=leetcode id=1217 lang=javascript
 *
 * [1217] Minimum Cost to Move Chips to The Same Position
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let odd = 0, even = 0;
  for (const p of position) {
    if (p % 2 === 0) even++;
    else odd++;
  }
  return Math.min(odd, even);
};
// @lc code=end

// TEST:
console.log(minCostToMoveChips([1, 2, 3])); // 1
console.log(minCostToMoveChips([2, 2, 2, 3, 3])); // 2
console.log(minCostToMoveChips([1, 1000000000])); // 1
