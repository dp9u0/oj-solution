/*
 * @lc app=leetcode.cn id=3353 lang=javascript
 *
 * [3353] 最小总操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(minOperations([1, 4, 2])); // 2
console.log(minOperations([10, 10, 10])); // 0
console.log(minOperations([5])); // 0
console.log(minOperations([1, 2, 3, 4])); // 3
console.log(minOperations([3, 3, 1, 3, 3])); // 2 (3→1 and 1→3)
console.log(minOperations([-1000000000, 1000000000])); // 1
