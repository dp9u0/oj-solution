/*
 * @lc app=leetcode id=3428 lang=javascript
 *
 * [3428] Maximum and Minimum Sums of at Most Size K Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMaxSums = function(nums, k) {
    const MOD = BigInt(1e9 + 7);
    let n = nums.length;
    nums.sort((a, b) => a - b);

    // pre[i] = sum of C(i, j) for j=0..min(k-1, i)
    // Track c[j] = C(current_i, j) for j=0..k-1
    let c = new Array(k).fill(0n);
    c[0] = 1n;
    let pre = new Array(n + 1).fill(0n);
    pre[0] = 1n;
    for (let i = 1; i <= n; i++) {
        // Update in reverse to use previous row values
        let newC = new Array(k).fill(0n);
        newC[0] = 1n;
        let s = 1n;
        let limit = Math.min(i, k);
        for (let j = 1; j < limit; j++) {
            newC[j] = (c[j] + c[j - 1]) % MOD;
            s = (s + newC[j]) % MOD;
        }
        // When i < k, also add C(i, i) = 1 (and store it in c[i])
        if (i < k) {
            newC[i] = 1n;
            s = (s + 1n) % MOD;
        }
        c = newC;
        pre[i] = s;
    }

    let res = 0n;
    for (let i = 0; i < n; i++) {
        let cntMax = pre[i];
        let cntMin = pre[n - 1 - i];
        let contrib = BigInt(nums[i]) % MOD * ((cntMax + cntMin) % MOD) % MOD;
        res = (res + contrib) % MOD;
    }
    return Number(res);
};
// @lc code=end

// TEST:
console.log(minMaxSums([1,2,3], 2)); // 24
console.log(minMaxSums([5,0,6], 1)); // 22
console.log(minMaxSums([1,1,1], 2)); // 12
