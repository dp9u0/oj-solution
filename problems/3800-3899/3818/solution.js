/*
 * @lc app=leetcode id=3818 lang=javascript
 *
 * [3818] Minimum Prefix Removal to Make Array Strictly Increasing
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPrefixLength = function(nums) {
    const n = nums.length;
    let i = n - 1;
    while (i > 0 && nums[i - 1] < nums[i]) i--;
    return i;
};
// @lc code=end

// TEST:
console.log(minimumPrefixLength([1,-1,2,3,3,4,5])); // 4
console.log(minimumPrefixLength([4,3,-2,-5])); // 3
console.log(minimumPrefixLength([1,2,3,4])); // 0
