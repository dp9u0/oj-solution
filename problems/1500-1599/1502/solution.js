/*
 * @lc app=leetcode id=1502 lang=javascript
 *
 * [1502] Can Make Arithmetic Progression From Sequence
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }
  return true;
};
// @lc code=end

// TEST:
console.log(canMakeArithmeticProgression([3, 5, 1])); // true
console.log(canMakeArithmeticProgression([1, 2, 4])); // false
