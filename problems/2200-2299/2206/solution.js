/*
 * @lc app=leetcode id=2206 lang=javascript
 *
 * [2206] Divide Array Into Equal Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
  const freq = {};
  for (const x of nums) freq[x] = (freq[x] || 0) + 1;
  return Object.values(freq).every(v => v % 2 === 0);
};
// @lc code=end

// TEST:
console.log(divideArray([3,2,3,2,2,2])); // true
console.log(divideArray([1,2,3,4])); // false
console.log(divideArray([1,1])); // true
