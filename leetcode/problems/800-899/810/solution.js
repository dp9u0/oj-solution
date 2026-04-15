/*
 * @lc app=leetcode id=810 lang=javascript
 *
 * [810] Chalkboard XOR Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function(nums) {
    const xor = nums.reduce((a, b) => a ^ b, 0);
    return xor === 0 || nums.length % 2 === 0;
};
// @lc code=end

// TEST:
console.log(xorGame([1,1,2])); // false
console.log(xorGame([0,1])); // true
console.log(xorGame([1,2,3])); // true
