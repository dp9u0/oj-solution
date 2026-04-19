/*
 * @lc app=leetcode id=2902 lang=javascript
 *
 * [2902] Count of Sub-Multisets With Bounded Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var countSubMultisets = function(nums, l, r) {
    const MOD = 1e9 + 7;
    const freq = {};
    let zeroCount = 0;
    let totalSum = 0;
    for (const x of nums) {
        totalSum += x;
        if (x === 0) { zeroCount++; continue; }
        freq[x] = (freq[x] || 0) + 1;
    }
    totalSum = Math.min(totalSum, r);
    let dp = new Array(totalSum + 1).fill(0);
    dp[0] = 1;
    const vals = Object.entries(freq).map(([v, c]) => [Number(v), c]);
    vals.sort((a, b) => a[0] - b[0]);
    for (const [v, cnt] of vals) {
        const ndp = new Array(totalSum + 1).fill(0);
        for (let s = 0; s <= totalSum; s++) {
            if (!dp[s]) continue;
            for (let j = 0; j <= cnt && s + j * v <= totalSum; j++) {
                ndp[s + j * v] = (ndp[s + j * v] + dp[s]) % MOD;
            }
        }
        dp = ndp;
    }
    let ans = 0;
    for (let s = l; s <= r && s <= totalSum; s++) {
        ans = (ans + dp[s]) % MOD;
    }
    return (ans * (zeroCount + 1)) % MOD;
};
// @lc code=end

// TEST:
console.log(countSubMultisets([1,2,2,3], 6, 6)); // 1
console.log(countSubMultisets([2,1,4,2,7], 1, 5)); // 7
console.log(countSubMultisets([1,2,1,3,5,2], 3, 5)); // 9
