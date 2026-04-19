/*
 * @lc app=leetcode id=1827 lang=javascript
 *
 * [1827] Minimum Operations to Make the Array Increasing
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let ops = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            const need = nums[i - 1] + 1;
            ops += need - nums[i];
            nums[i] = need;
        }
    }
    return ops;
};
// @lc code=end

// TEST:
console.log(minOperations([1,1,1])); // 3
console.log(minOperations([1,5,2,4,1])); // 14
console.log(minOperations([8])); // 0
console.log(minOperations([1,2,3])); // 0
console.log(minOperations([3,2,1])); // 6
