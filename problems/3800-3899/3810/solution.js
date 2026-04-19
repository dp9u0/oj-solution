/*
 * @lc app=leetcode id=3810 lang=javascript
 *
 * [3810] Minimum Operations to Reach Target Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var minOperations = function(nums, target) {
    const active = new Set();
    let maxActive = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target[i]) {
            active.add(nums[i]);
            maxActive = Math.max(maxActive, active.size);
        }
    }
    return maxActive;
};
// @lc code=end

// TEST:
console.log(minOperations([1, 2, 3], [2, 1, 3])); // 2
console.log(minOperations([4, 1, 4], [5, 1, 4])); // 1
console.log(minOperations([7, 3, 7], [5, 5, 9])); // 2
console.log(minOperations([1, 1, 1], [2, 2, 2])); // 1
