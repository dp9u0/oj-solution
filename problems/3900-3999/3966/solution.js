/*
 * @lc app=leetcode id=3966 lang=javascript
 *
 * [3966] Count Good Integers in a Range
 */

// @lc code=start
/**
 * @param {number} l
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var goodIntegers = function(l, r, k) {
    return countUpTo(r, k) - countUpTo(l - 1, k);
};

// Count good integers in [0, n] with digit DP.
function countUpTo(n, k) {
    const digits = String(n).split('').map(Number);
    const len = digits.length;
    // memo[pos][prev][started] for non-tight states
    const memo = Array.from({ length: len + 1 }, () =>
        Array.from({ length: 10 }, () => new Array(2).fill(-1))
    );

    function dp(pos, prev, tight, started) {
        if (pos === len) return 1;
        const st = started ? 1 : 0; // boolean index would become property "false"/"true"
        if (!tight && memo[pos][prev][st] !== -1) {
            return memo[pos][prev][st];
        }
        const limit = tight ? digits[pos] : 9;
        let total = 0;
        for (let d = 0; d <= limit; d++) {
            const nTight = tight && d === limit;
            if (!started) {
                total += d === 0
                    ? dp(pos + 1, prev, nTight, false)
                    : dp(pos + 1, d, nTight, true);
            } else if (Math.abs(d - prev) <= k) {
                total += dp(pos + 1, d, nTight, true);
            }
        }
        if (!tight) memo[pos][prev][st] = total;
        return total;
    }

    return dp(0, 0, true, false);
}
// @lc code=end

// TEST:
console.log(goodIntegers(10, 15, 1) === 3);   // Example 1
console.log(goodIntegers(201, 204, 2) === 2); // Example 2
console.log(goodIntegers(10, 10, 0) === 0);   // |1-0|=1 > 0, not good
console.log(goodIntegers(10, 11, 0) === 1);   // only 11
console.log(goodIntegers(10, 100, 9) === 91); // all numbers are good when k=9
console.log(goodIntegers(111111111111111, 111111111111111, 0) === 1); // all digits equal
console.log(goodIntegers(98, 102, 0) === 1);  // only 99
