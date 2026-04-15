/*
 * @lc app=leetcode id=3010 lang=javascript
 *
 * [3010] Divide an Array Into Subarrays With Minimum Cost I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    const rest = nums.slice(1).sort((a, b) => a - b);
    return nums[0] + rest[0] + rest[1];
};
// @lc code=end

// TEST:
console.log(minimumCost([1,2,3,12]));     // 6
console.log(minimumCost([5,4,3]));        // 12
console.log(minimumCost([10,3,1,1]));     // 12
