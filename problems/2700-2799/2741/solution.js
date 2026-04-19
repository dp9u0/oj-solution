/*
 * @lc app=leetcode id=2741 lang=javascript
 *
 * [2741] Special Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialPerm = function(nums) {
    const MOD = 1e9 + 7;
    const n = nums.length;

    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0) {
                adj[i].push(j);
                adj[j].push(i);
            }
        }
    }

    const full = (1 << n) - 1;
    const dp = Array.from({ length: 1 << n }, () => new Int32Array(n));

    for (let i = 0; i < n; i++) dp[1 << i][i] = 1;

    for (let mask = 1; mask <= full; mask++) {
        for (let last = 0; last < n; last++) {
            if (!(mask & (1 << last)) || dp[mask][last] === 0) continue;
            for (const next of adj[last]) {
                if (mask & (1 << next)) continue;
                const newMask = mask | (1 << next);
                dp[newMask][next] = (dp[newMask][next] + dp[mask][last]) % MOD;
            }
        }
    }

    let result = 0;
    for (let i = 0; i < n; i++) result = (result + dp[full][i]) % MOD;
    return result;
};
// @lc code=end

// TEST:
console.log(specialPerm([2, 3, 6])); // 2
console.log(specialPerm([1, 4, 3])); // 2
console.log(specialPerm([1, 2, 4])); // 3
console.log(specialPerm([1, 2])); // 2
