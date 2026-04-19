/*
 * @lc app=leetcode id=2567 lang=javascript
 *
 * [2567] Minimum Score by Changing Two Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    return Math.min(
        nums[n - 3] - nums[0],
        nums[n - 2] - nums[1],
        nums[n - 1] - nums[2]
    );
};
// @lc code=end

// TEST:
console.log(minimizeSum([1,4,7,8,5])); // 3
console.log(minimizeSum([1,4,3]));     // 0
console.log(minimizeSum([1,2,3,4]));   // 1
