/*
 * @lc app=leetcode id=3779 lang=javascript
 *
 * [3779] Minimum Number of Operations to Have Distinct Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let seen = new Set();
    let lastDup = -1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (seen.has(nums[i])) lastDup = Math.max(lastDup, i);
        seen.add(nums[i]);
    }
    if (lastDup === -1) return 0;
    return Math.ceil((lastDup + 1) / 3);
};
// @lc code=end

// TEST:
console.log(minOperations([3,8,3,6,5,8])); // 1
console.log(minOperations([2,2])); // 1
console.log(minOperations([4,3,5,1,2])); // 0
console.log(minOperations([1,2,3,4,5,1])); // 1
