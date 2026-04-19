/*
 * @lc app=leetcode id=3519 lang=javascript
 *
 * [3519] Count Numbers with Non-Decreasing Digits
 */

// @lc code=start
/**
 * @param {string} l
 * @param {number} r
 * @param {number} b
 * @return {number}
 */
var countNumbers = function(l, r, b) {
    const MOD = 1e9 + 7;

    const countUpTo = (numStr) => {
        const num = BigInt(numStr);
        if (num <= 0n) return 0;
        const digits = num.toString(b).split('').map(Number);
        const m = digits.length;

        // memo[pos][last][started] for tight=0
        const memo = Array.from({length: m}, () =>
            Array.from({length: b}, () => new Int32Array(2).fill(-1))
        );

        const dp = (pos, last, tight, started) => {
            if (pos === m) return started ? 1 : 0;
            if (!tight) {
                const v = memo[pos][last][started ? 1 : 0];
                if (v !== -1) return v;
            }
            const limit = tight ? digits[pos] : b - 1;
            let result = 0;
            for (let x = 0; x <= limit; x++) {
                if (!started) {
                    const ns = x > 0;
                    result = (result + dp(pos + 1, ns ? x : 0, tight && x === digits[pos], ns)) % MOD;
                } else if (x >= last) {
                    result = (result + dp(pos + 1, x, tight && x === digits[pos], true)) % MOD;
                }
            }
            if (!tight) memo[pos][last][started ? 1 : 0] = result;
            return result;
        };

        return dp(0, 0, true, false);
    };

    const rCount = countUpTo(r);
    const lMinusOne = (BigInt(l) - 1n).toString();
    const lCount = countUpTo(lMinusOne);
    return ((rCount - lCount) % MOD + MOD) % MOD;
};
// @lc code=end

// TEST:
console.log(countNumbers("23", "28", 8));   // 3
console.log(countNumbers("2", "7", 2));       // 2
console.log(countNumbers("1", "10", 10));     // 10 (1-9 all single digit, 10 has digits 1,0 not non-dec) → 9
console.log(countNumbers("1", "1", 10));      // 1
console.log(countNumbers("10", "20", 10));    // 11,12,...,19 have non-dec digits → 9
