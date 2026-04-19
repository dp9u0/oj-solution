/*
 * @lc app=leetcode id=3427 lang=javascript
 *
 * [3427] Sum of Variable Length Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];
    let result = 0;
    for (let i = 0; i < n; i++) {
        const start = Math.max(0, i - nums[i]);
        result += prefix[i + 1] - prefix[start];
    }
    return result;
};
// @lc code=end

// TEST:
console.log(subarraySum([2,3,1])); // 11
console.log(subarraySum([3,1,1,2])); // 13
