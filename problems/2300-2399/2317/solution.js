/*
 * @lc app=leetcode id=2317 lang=javascript
 *
 * [2317] Maximum XOR After Operations 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumXOR = function(nums) {
    return nums.reduce((acc, x) => acc | x, 0);
};
// @lc code=end

// TEST:
console.log(maximumXOR([3,2,4,6])); // 7
console.log(maximumXOR([1,2,3,9,2])); // 11
console.log(maximumXOR([0])); // 0
console.log(maximumXOR([1])); // 1
console.log(maximumXOR([1,1])); // 1
console.log(maximumXOR([8,8,8])); // 8
