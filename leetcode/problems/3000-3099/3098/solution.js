/*
 * @lc app=leetcode id=3098 lang=javascript
 *
 * [3098] Find the Sum of Subsequence Powers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfPowers = function(nums, k) {
    const MOD = 1e9 + 7;
    nums.sort((a, b) => a - b);
    const n = nums.length;

    // Collect all possible diff values
    const diffSet = new Set();
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            diffSet.add(nums[j] - nums[i]);
    const diffs = [...diffSet].sort((a, b) => a - b);

    let result = 0n;
    // count(minDiff >= d) using DP
    const countGte = (d) => {
        // dp[j] = number of subsequences ending at position i with length j, all adj diffs >= d
        // But we need to track ending position for the gap constraint
        // dp[i][j]: ending at i, length j
        const dp = new Array(n).fill(null).map(() => new Int32Array(k + 1));
        for (let i = 0; i < n; i++) dp[i][1] = 1;
        for (let j = 2; j <= k; j++) {
            for (let i = j - 1; i < n; i++) {
                let cnt = 0;
                for (let p = j - 2; p < i; p++) {
                    if (nums[i] - nums[p] >= d) {
                        cnt = (cnt + dp[p][j - 1]) % MOD;
                    }
                }
                dp[i][j] = cnt;
            }
        }
        let total = 0;
        for (let i = k - 1; i < n; i++) total = (total + dp[i][k]) % MOD;
        return total;
    };

    // For each diff d, contribution = d * (countGte(d) - countGte(next d))
    let prevCount = 0;
    for (let i = diffs.length - 1; i >= 0; i--) {
        const cnt = countGte(diffs[i]);
        const contribution = (cnt - prevCount + MOD) % MOD;
        result = (result + BigInt(diffs[i]) * BigInt(contribution)) % BigInt(MOD);
        prevCount = cnt;
    }

    return Number(result);
};
// @lc code=end

// TEST:
console.log(sumOfPowers([1,2,3,4], 3)); // 4
console.log(sumOfPowers([2,2], 2)); // 0
console.log(sumOfPowers([4,3,-1], 2)); // 10
console.log(sumOfPowers([1,2,3,4,5], 3)); // ?
console.log(sumOfPowers([1,1,1,1], 2)); // 0