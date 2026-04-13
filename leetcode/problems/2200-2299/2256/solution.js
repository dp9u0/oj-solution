/*
 * @lc app=leetcode id=2256 lang=javascript
 *
 * [2256] Minimum Average Difference
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    const n = nums.length;
    const totalSum = nums.reduce((s, v) => s + v, 0);
    let prefixSum = 0, minDiff = Infinity, result = 0;
    for (let i = 0; i < n; i++) {
        prefixSum += nums[i];
        const leftAvg = Math.floor(prefixSum / (i + 1));
        const rightAvg = i === n - 1 ? 0 : Math.floor((totalSum - prefixSum) / (n - i - 1));
        const diff = Math.abs(leftAvg - rightAvg);
        if (diff < minDiff) {
            minDiff = diff;
            result = i;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minimumAverageDifference([2,5,3,9,5,3])); // 3
console.log(minimumAverageDifference([0]));            // 0
console.log(minimumAverageDifference([1,2,3,4,5]));    // 2
