/*
 * @lc app=leetcode id=3021 lang=javascript
 *
 * [3021] Alice and Bob Playing Flower Game
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
  return Math.floor((n + 1) / 2) * Math.floor(m / 2) + Math.floor(n / 2) * Math.floor((m + 1) / 2);
};
// @lc code=end

// TEST:
console.log(flowerGame(3, 2));  // 3
console.log(flowerGame(1, 1));  // 0
console.log(flowerGame(4, 5));  // 10
