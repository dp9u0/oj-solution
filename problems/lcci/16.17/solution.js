/*
 * @lc app=leetcode.cn id=面试题 16.17 lang=javascript
 *
 * [面试题 16.17] 连续数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Kadane：前缀为负即重启，全负数组取最大单元素
    let best = -Infinity;
    let cur = 0;
    for (const x of nums) {
        cur = Math.max(cur + x, x);
        best = Math.max(best, cur);
    }
    return best;
};
// @lc code=end

// TEST:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.log(maxSubArray([-3, -1, -2]) === -1);
console.log(maxSubArray([5]) === 5);
console.log(maxSubArray([0]) === 0);
console.log(maxSubArray([1, 2, 3]) === 6);
console.log(maxSubArray([5, -9, 6, -2, 3]) === 7);
