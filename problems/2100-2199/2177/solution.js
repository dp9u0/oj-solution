/*
 * @lc app=leetcode id=2177 lang=javascript
 *
 * [2177] Find Three Consecutive Integers That Sum to a Given Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
  if ((num - 3) % 3 !== 0) return [];
  const x = (num - 3) / 3;
  return [x, x + 1, x + 2];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sumOfThree(33))); // [10,11,12]
console.log(JSON.stringify(sumOfThree(4))); // []
console.log(JSON.stringify(sumOfThree(0))); // [-1,0,1]
