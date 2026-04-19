/*
 * @lc app=leetcode id=940 lang=javascript
 *
 * [940] Distinct Subsequences II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
    const MOD = 1e9 + 7;
    const last = new Int32Array(26);
    let total = 0;

    for (const ch of s) {
        const idx = ch.charCodeAt(0) - 97;
        const prev = last[idx];
        const added = (total + 1 - prev + MOD) % MOD;
        total = (total + added) % MOD;
        last[idx] = (prev + added) % MOD;
    }

    return total;
};
// @lc code=end

// TEST:
console.log(distinctSubseqII('abc')); // 7
console.log(distinctSubseqII('aba')); // 6
console.log(distinctSubseqII('aaa')); // 3
console.log(distinctSubseqII('z')); // 1
console.log(distinctSubseqII('abab')); // 11