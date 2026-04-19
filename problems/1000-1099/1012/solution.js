/*
 * @lc app=leetcode id=1012 lang=javascript
 *
 * [1012] Numbers With Repeated Digits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function(n) {
    const s = String(n);
    const L = s.length;

    // P(base, k) = base * (base-1) * ... * (base-k+1)
    const P = (base, k) => {
        let r = 1;
        for (let i = 0; i < k; i++) r *= (base - i);
        return r;
    };

    // Count numbers with fewer than L digits having all unique digits
    let unique = 0;
    for (let len = 1; len < L; len++) {
        unique += 9 * P(9, len - 1);
    }

    // Count L-digit numbers <= n with all unique digits (digit DP)
    const used = new Set();
    for (let i = 0; i < L; i++) {
        const d = parseInt(s[i]);
        const start = (i === 0) ? 1 : 0;
        for (let digit = start; digit < d; digit++) {
            if (used.has(digit)) continue;
            unique += P(10 - used.size - 1, L - i - 1);
        }
        if (used.has(d)) break;
        used.add(d);
        if (i === L - 1) unique++;
    }

    return n - unique;
};
// @lc code=end

// TEST:
console.log(numDupDigitsAtMostN(20)); // 1
console.log(numDupDigitsAtMostN(100)); // 10
console.log(numDupDigitsAtMostN(1000)); // 262
console.log(numDupDigitsAtMostN(1)); // 0
console.log(numDupDigitsAtMostN(11)); // 1
console.log(numDupDigitsAtMostN(999999999)); // large
