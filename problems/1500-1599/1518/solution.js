/*
 * @lc app=leetcode id=1518 lang=javascript
 *
 * [1518] Water Bottles
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let drank = 0;
  let full = numBottles;
  let empty = 0;

  while (full > 0) {
    drank += full;
    empty += full;
    full = Math.floor(empty / numExchange);
    empty = empty % numExchange;
  }

  return drank;
};
// @lc code=end

// TEST:
console.log(numWaterBottles(9, 3));  // 13
console.log(numWaterBottles(15, 4)); // 19
console.log(numWaterBottles(1, 2));  // 1
