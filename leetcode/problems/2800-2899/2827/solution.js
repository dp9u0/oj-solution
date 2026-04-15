/*
 * @lc app=leetcode id=2827 lang=javascript
 *
 * [2827] Number of Beautiful Integers in the Range
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @param {number} k
 * @return {number}
 */
var numberOfBeautifulIntegers = function(low, high, k) {
    const solve = (n) => {
        if (n <= 0) return 0;
        const s = String(n).split('').map(Number);
        const len = s.length;
        const memo = new Map();

        const dp = (pos, diff, rem, tight, started) => {
            if (pos === len) {
                return (started && diff === 0 && rem === 0) ? 1 : 0;
            }
            const key = pos * 1680 + (diff + 10) * 80 + rem * 4 + (tight ? 2 : 0) + (started ? 1 : 0);
            if (memo.has(key)) return memo.get(key);

            const limit = tight ? s[pos] : 9;
            let result = 0;
            for (let d = 0; d <= limit; d++) {
                const newTight = tight && d === limit;
                if (!started && d === 0) {
                    result += dp(pos + 1, 0, 0, newTight, false);
                } else {
                    const newDiff = diff + (d % 2 === 0 ? 1 : -1);
                    const newRem = (rem * 10 + d) % k;
                    result += dp(pos + 1, newDiff, newRem, newTight, true);
                }
            }

            memo.set(key, result);
            return result;
        };

        return dp(0, 0, 0, true, false);
    };

    return solve(high) - solve(low - 1);
};
// @lc code=end

// TEST:
console.log(numberOfBeautifulIntegers(10, 20, 3)); // 2
console.log(numberOfBeautifulIntegers(1, 10, 1)); // 1
console.log(numberOfBeautifulIntegers(5, 5, 2)); // 0
console.log(numberOfBeautifulIntegers(1, 1000, 1)); // 45
