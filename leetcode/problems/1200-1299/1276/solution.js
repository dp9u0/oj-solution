/*
 * @lc app=leetcode id=1276 lang=javascript
 *
 * [1276] Number of Burgers with No Waste of Ingredients
 */

// @lc code=start
/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
  const diff = tomatoSlices - 2 * cheeseSlices;
  if (diff < 0 || diff % 2 !== 0) return [];
  const jumbo = diff / 2;
  const small = cheeseSlices - jumbo;
  if (small < 0) return [];
  return [jumbo, small];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(numOfBurgers(16, 7))); // [1,6]
console.log(JSON.stringify(numOfBurgers(17, 4))); // []
console.log(JSON.stringify(numOfBurgers(4, 17))); // []
