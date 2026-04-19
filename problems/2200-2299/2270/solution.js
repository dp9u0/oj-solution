/*
 * @lc app=leetcode id=2270 lang=javascript
 *
 * [2270] Number of Ways to Split Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    const totalSum = nums.reduce((s, v) => s + v, 0);
    let prefixSum = 0, result = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        prefixSum += nums[i];
        if (prefixSum >= totalSum - prefixSum) result++;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(waysToSplitArray([10,4,-8,7])); // 2
console.log(waysToSplitArray([2,3,1,0]));   // 2
