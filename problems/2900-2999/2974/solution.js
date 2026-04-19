/*
 * @lc app=leetcode id=2974 lang=javascript
 *
 * [2974] Minimum Number Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 2) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
    return nums;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(numberGame([5,4,2,3])));  // [3,2,5,4]
console.log(JSON.stringify(numberGame([2,5])));        // [5,2]
console.log(JSON.stringify(numberGame([1,2,3,4])));    // [2,1,4,3]
