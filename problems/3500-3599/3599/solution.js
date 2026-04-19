/*
 * @lc app=leetcode id=3599 lang=javascript
 *
 * [3599] Partition Array to Minimize XOR
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minXor = function(nums, k) {
    const n = nums.length;
    const xors = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) xors[i + 1] = xors[i] ^ nums[i];
    const xorRange = (l, r) => xors[r + 1] ^ xors[l];
    const INF = Infinity;
    const dp = Array.from({length: n + 1}, () => new Array(k + 1).fill(INF));
    dp[0][0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= Math.min(i, k); j++) {
            for (let l = j - 1; l < i; l++) {
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[l][j - 1], xorRange(l, i - 1)));
            }
        }
    }
    return dp[n][k];
};
// @lc code=end

// TEST:
console.log(minXor([1,2,3], 2)); // 1
console.log(minXor([2,3,3,2], 3)); // 2
console.log(minXor([1,1,2,3,1], 2)); // 0
