/*
 * @lc app=leetcode id=3250 lang=javascript
 *
 * [3250] Find the Count of Monotonic Pairs I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countOfPairs = function(nums) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    const maxVal = Math.max(...nums);
    let dp = new Array(maxVal + 1).fill(0);

    // Initialize: arr1[0] can be 0..nums[0]
    for (let v = 0; v <= nums[0]; v++) dp[v] = 1;

    for (let i = 1; i < n; i++) {
        const ndp = new Array(maxVal + 1).fill(0);
        const prefix = new Array(maxVal + 2).fill(0);
        for (let v = 0; v <= maxVal; v++) prefix[v + 1] = (prefix[v] + dp[v]) % MOD;

        const diff = nums[i] - nums[i - 1];
        for (let v = 0; v <= nums[i]; v++) {
            // arr1[i-1] <= v (non-decreasing) and arr1[i-1] <= v - diff (arr2 non-increasing)
            const hi = Math.min(v, v - diff);
            if (hi >= 0) {
                ndp[v] = (prefix[hi + 1] - prefix[0] + MOD) % MOD;
            }
        }
        dp = ndp;
    }

    let ans = 0;
    for (let v = 0; v <= maxVal; v++) ans = (ans + dp[v]) % MOD;
    return ans;
};
// @lc code=end

// TEST:
console.log(countOfPairs([2, 3, 2])); // 4
console.log(countOfPairs([5, 5, 5, 5])); // 126
console.log(countOfPairs([1])); // 2
console.log(countOfPairs([1, 2])); // 3
console.log(countOfPairs([3, 1])); // 1
