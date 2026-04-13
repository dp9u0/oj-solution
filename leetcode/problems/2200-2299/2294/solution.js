/*
 * @lc app=leetcode id=2294 lang=javascript
 *
 * [2294] Partition Array Such That Maximum Difference Is K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);

    let result = 1;
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - min > k) {
            result++;
            min = nums[i];
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(partitionArray([3,6,1,2,5], 2)); // 2
console.log(partitionArray([1,2,3], 1)); // 2
console.log(partitionArray([2,2,4,5], 0)); // 3
