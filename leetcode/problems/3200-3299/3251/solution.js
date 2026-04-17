/*
 * @lc app=leetcode id=3251 lang=javascript
 *
 * [3251] Find the Count of Monotonic Pairs II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countOfPairs = function(nums) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    const M = Math.max(...nums);

    let dp = new Int32Array(M + 1);
    for (let v = 0; v <= nums[0]; v++) dp[v] = 1;

    for (let i = 1; i < n; i++) {
        const diff = Math.max(0, nums[i] - nums[i - 1]);
        const prefix = new Int32Array(M + 2);
        for (let v = 0; v <= M; v++) prefix[v + 1] = (prefix[v] + dp[v]) % MOD;

        const newDp = new Int32Array(M + 1);
        for (let vp = diff; vp <= nums[i]; vp++) {
            const maxV = Math.min(vp - diff, nums[i - 1]);
            if (maxV >= 0) newDp[vp] = prefix[maxV + 1];
        }
        dp = newDp;
    }

    let ans = 0;
    for (let v = 0; v <= M; v++) ans = (ans + dp[v]) % MOD;
    return ans;
};
// @lc code=end

// TEST:
console.log(countOfPairs([2, 3, 2]));        // 4
console.log(countOfPairs([5, 5, 5, 5]));     // 126
console.log(countOfPairs([1, 1, 1]));        // 4
console.log(countOfPairs([2, 2, 2, 2]));     // 15
console.log(countOfPairs([1]));              // 2
