/*
 * @lc app=leetcode.cn id=3018 lang=javascript
 *
 * [3018] 可处理的最大删除操作数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number}
 */
var maximumProcessableQueries = function(nums, queries) {
    const n = nums.length;
    const m = queries.length;
    const NEG = -1;
    const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(NEG));
    dp[0][n] = 0;
    for (let w = n; w >= 1; w--) {
        for (let l = 0; l + w <= n; l++) {
            const r = l + w;
            const q = dp[l][r];
            if (q === NEG || q >= m) continue;
            if (nums[l] >= queries[q]) {
                if (q + 1 > dp[l + 1][r]) dp[l + 1][r] = q + 1;
            }
            if (nums[r - 1] >= queries[q]) {
                if (q + 1 > dp[l][r - 1]) dp[l][r - 1] = q + 1;
            }
            if (q > dp[l + 1][r]) dp[l + 1][r] = q; // skip front (subsequence op)
            if (q > dp[l][r - 1]) dp[l][r - 1] = q; // skip back
        }
    }
    let ans = 0;
    for (let l = 0; l <= n; l++) {
        for (let r = l; r <= n; r++) {
            if (dp[l][r] > ans) ans = dp[l][r];
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximumProcessableQueries([1,2,3,4,5], [1,2,3,4,6])); // 4
console.log(maximumProcessableQueries([2,3,2], [2,2,3])); // 3
console.log(maximumProcessableQueries([3,4,3], [4,3,2])); // 2
console.log(maximumProcessableQueries([1], [1])); // 1
console.log(maximumProcessableQueries([1,1], [5])); // 0
