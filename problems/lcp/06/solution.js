/*
 * @lc app=leetcode.cn id=LCP 06 lang=javascript
 *
 * [LCP 06] 拿硬币
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
  let res = 0;
  for (const c of coins) {
    res += Math.ceil(c / 2);
  }
  return res;
};
// @lc code=end

// TEST:
// Example 1
console.log(minCount([4, 2, 1]) === 4);
// Example 2
console.log(minCount([2, 3, 10]) === 8);
// Single pile
console.log(minCount([1]) === 1);
console.log(minCount([2]) === 1);
console.log(minCount([3]) === 2);
// Edge: max pile value 10 -> 5 moves
console.log(minCount([10]) === 5);
// All odd piles
console.log(minCount([1, 1, 1, 1]) === 4);
