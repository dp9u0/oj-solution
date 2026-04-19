/*
 * @lc app=leetcode id=2369 lang=javascript
 *
 * [2369] Check if There is a Valid Partition For The Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    const n = nums.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        if (i >= 2 && nums[i - 1] === nums[i - 2]) {
            dp[i] = dp[i] || dp[i - 2];
        }
        if (i >= 3 && nums[i - 1] === nums[i - 2] && nums[i - 2] === nums[i - 3]) {
            dp[i] = dp[i] || dp[i - 3];
        }
        if (i >= 3 && nums[i - 1] === nums[i - 2] + 1 && nums[i - 2] === nums[i - 3] + 1) {
            dp[i] = dp[i] || dp[i - 3];
        }
    }

    return dp[n];
};
// @lc code=end

// TEST:
console.log(validPartition([4,4,4,5,6])); // true
console.log(validPartition([1,1,1,2])); // false
console.log(validPartition([1,1])); // true
