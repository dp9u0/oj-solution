/*
 * @lc app=leetcode id=3333 lang=javascript
 *
 * [3333] Find the Original Typed String II
 */

// @lc code=start
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var possibleStringCount = function(word, k) {
    const MOD = 1e9 + 7;
    // Group consecutive same characters
    const cnt = [];
    let i = 0;
    while (i < word.length) {
        let j = i;
        while (j < word.length && word[j] === word[i]) j++;
        cnt.push(j - i);
        i = j;
    }
    const m = cnt.length;

    // Total possible = product of cnt[i]
    let total = 1;
    for (const c of cnt) total = total * c % MOD;

    // If m >= k, all valid (minimum length is m, one from each group)
    if (m >= k) return total;

    // Count invalid: length < k, i.e., sum of choices < k, where choice is 1..cnt[i]
    // Let x_i = choice_i - 1, then 0 <= x_i <= cnt[i]-1, and sum x_i < k - m
    const limit = k - m - 1; // we need sum x_i <= limit
    // dp[s] = number of ways to get sum = s from first j groups
    let dp = new Array(limit + 1).fill(0);
    dp[0] = 1;
    for (let g = 0; g < m; g++) {
        const ndp = new Array(limit + 1).fill(0);
        const prefix = new Array(limit + 2).fill(0);
        for (let s = 0; s <= limit; s++) {
            prefix[s + 1] = (prefix[s] + dp[s]) % MOD;
        }
        for (let s = 0; s <= limit; s++) {
            // x_g from 0 to min(cnt[g]-1, s)
            const lo = Math.max(0, s - (cnt[g] - 1));
            ndp[s] = (prefix[s + 1] - prefix[lo] + MOD) % MOD;
        }
        dp = ndp;
    }
    let invalid = 0;
    for (let s = 0; s <= limit; s++) invalid = (invalid + dp[s]) % MOD;

    return (total - invalid + MOD) % MOD;
};
// @lc code=end

// TEST:
console.log(possibleStringCount("aabbccdd", 7)); // 5
console.log(possibleStringCount("aabbccdd", 8)); // 1
console.log(possibleStringCount("aaabbb", 3)); // 8
