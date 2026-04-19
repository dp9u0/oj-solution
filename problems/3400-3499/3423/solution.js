/*
 * @lc app=leetcode id=3423 lang=javascript
 *
 * [3423] Maximum Difference Between Adjacent Elements in a Circular Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    const n = nums.length;
    let result = Math.abs(nums[0] - nums[n - 1]);
    for (let i = 1; i < n; i++) {
        result = Math.max(result, Math.abs(nums[i] - nums[i - 1]));
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maxAdjacentDistance([1,2,4]));       // 3
console.log(maxAdjacentDistance([-5,-10,-5]));   // 5
