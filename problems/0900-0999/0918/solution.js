/*
 * @lc app=leetcode id=918 lang=javascript
 *
 * [918] Maximum Sum Circular Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let totalSum = 0, maxSum = -Infinity, minSum = Infinity;
    let curMax = 0, curMin = 0;

    for (const num of nums) {
        totalSum += num;
        curMax = Math.max(num, curMax + num);
        maxSum = Math.max(maxSum, curMax);
        curMin = Math.min(num, curMin + num);
        minSum = Math.min(minSum, curMin);
    }

    // All negative: maxSum is the answer (don't use empty subarray)
    if (maxSum < 0) return maxSum;

    return Math.max(maxSum, totalSum - minSum);
};
// @lc code=end

// TEST:
console.log(maxSubarraySumCircular([1, -2, 3, -2]));
// Expected: 3

console.log(maxSubarraySumCircular([5, -3, 5]));
// Expected: 10

console.log(maxSubarraySumCircular([-3, -2, -3]));
// Expected: -2
