/*
 * @lc app=leetcode id=3876 lang=javascript
 *
 * [3876] Construct Uniform Parity Array II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
  let min = Infinity, allEven = true;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] < min) min = nums1[i];
    if (nums1[i] % 2 !== 0) allEven = false;
  }
  return (min % 2 === 1) || allEven;
};
// @lc code=end

// TEST:
console.log(uniformArray([1,4,7])); // true
console.log(uniformArray([2,3])); // false
console.log(uniformArray([4,6])); // true
console.log(uniformArray([3,5])); // true
console.log(uniformArray([2,4,5])); // false
console.log(uniformArray([1,2,4])); // true
console.log(uniformArray([2,5,7])); // false
console.log(uniformArray([5])); // true
console.log(uniformArray([4])); // true
console.log(uniformArray([3])); // true
