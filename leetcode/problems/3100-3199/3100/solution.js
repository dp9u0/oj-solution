/*
 * @lc app=leetcode id=3100 lang=javascript
 *
 * [3100] Water Bottles II
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
  let full = numBottles, empty = 0, drunk = 0;
  while (full > 0 || empty >= numExchange) {
    if (full > 0) {
      drunk += full;
      empty += full;
      full = 0;
    }
    if (empty >= numExchange) {
      empty -= numExchange;
      full += 1;
      numExchange++;
    } else {
      break;
    }
  }
  return drunk;
};
// @lc code=end

// TEST:
console.log(maxBottlesDrunk(13, 6)); // 15
console.log(maxBottlesDrunk(10, 3)); // 13
console.log(maxBottlesDrunk(3, 1)); // 5
