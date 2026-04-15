/*
 * @lc app=leetcode id=1550 lang=javascript
 *
 * [1550] Three Consecutive Odds
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  let count = 0;
  for (const num of arr) {
    if (num % 2 === 1) {
      count++;
      if (count === 3) return true;
    } else {
      count = 0;
    }
  }
  return false;
};
// @lc code=end

// TEST:
console.log(threeConsecutiveOdds([2,6,4,1])); // false
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12])); // true
