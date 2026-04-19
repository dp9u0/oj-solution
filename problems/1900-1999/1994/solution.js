/*
 * @lc app=leetcode id=1994 lang=javascript
 *
 * [1994] The Number of Good Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubsets = function(nums) {
    const MOD = 1e9 + 7;
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

    const pmask = new Int16Array(31).fill(-1);
    pmask[1] = 0;
    for (let v = 2; v <= 30; v++) {
        let m = 0, val = v, ok = true;
        for (let i = 0; i < 10; i++) {
            let c = 0;
            while (val % primes[i] === 0) { val /= primes[i]; if (++c > 1) { ok = false; break; } }
            if (!ok) break;
            if (c === 1) m |= 1 << i;
        }
        if (ok && val === 1) pmask[v] = m;
    }

    const cnt = new Int32Array(31);
    for (const x of nums) cnt[x]++;

    const full = (1 << 10) - 1;
    const dp = new Array(full + 1).fill(0);
    dp[0] = 1;

    for (let v = 2; v <= 30; v++) {
        if (pmask[v] < 0 || cnt[v] === 0) continue;
        const m = pmask[v], c = cnt[v];
        for (let s = full; s >= 0; s--) {
            if ((s & m) === 0 && dp[s] > 0)
                dp[s | m] = (dp[s | m] + dp[s] * c) % MOD;
        }
    }

    let ans = 0;
    for (let s = 1; s <= full; s++) ans = (ans + dp[s]) % MOD;
    for (let i = 0; i < cnt[1]; i++) ans = ans * 2 % MOD;

    return ans;
};
// @lc code=end

// TEST:
console.log(numberOfGoodSubsets([1,2,3,4]));       // 6
console.log(numberOfGoodSubsets([4,2,3,15]));      // 5
console.log(numberOfGoodSubsets([1]));              // 0
console.log(numberOfGoodSubsets([2]));              // 1
console.log(numberOfGoodSubsets([1,1,2,3,5]));     // 2^2 * (1+1+1+1+1+1) = 4*6 = 24? let me check
