/*
 * @lc app=leetcode id=1984 lang=javascript
 *
 * [1984] Minimum Difference Between Highest and Lowest of K Scores
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((a, b) => a - b);
    let minDiff = Infinity;
    for (let i = 0; i <= nums.length - k; i++) {
        minDiff = Math.min(minDiff, nums[i + k - 1] - nums[i]);
    }
    return minDiff;
};
// @lc code=end

// TEST:
console.log(minimumDifference([90], 1)); // 0
console.log(minimumDifference([9,4,1,7], 2)); // 2
console.log(minimumDifference([9,4,1,7], 3)); // 5
console.log(minimumDifference([87063,61094,44530,21297,95857,93551,9918], 6)); // 74560
