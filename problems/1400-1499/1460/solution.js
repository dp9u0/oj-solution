/*
 * @lc app=leetcode id=1460 lang=javascript
 *
 * [1460] Make Two Arrays Equal by Reversing Subarrays
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);
  for (let i = 0; i < target.length; i++) {
    if (target[i] !== arr[i]) return false;
  }
  return true;
};
// @lc code=end

// TEST:
console.log(canBeEqual([1,2,3,4], [2,4,1,3])); // true
console.log(canBeEqual([7], [7])); // true
console.log(canBeEqual([3,7,9], [3,7,11])); // false
console.log(canBeEqual([1,1,1], [1,1,1])); // true
console.log(canBeEqual([1,2], [2,1])); // true
