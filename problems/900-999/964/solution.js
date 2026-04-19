/*
 * @lc app=leetcode id=964 lang=javascript
 *
 * [964] Least Operators to Express Number
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */
var leastOpsExpressTarget = function(x, target) {
    const memo = new Map();
    const dp = (t) => {
        if (t === 0) return 0;
        if (t === 1) return 1;
        if (memo.has(t)) return memo.get(t);
        // Worst case: t copies of x/x with +/- operators
        let res = 2 * t - 1;
        let xk = x;
        let k = 1;
        // For each power x^k <= t, decompose t = d*x^k + r
        while (xk <= t) {
            const d = Math.floor(t / xk);
            const r = t % xk;
            const opsK = k >= 2 ? k - 1 : 0;
            if (r === 0) {
                res = Math.min(res, d * opsK + d - 1);
            } else {
                // Positive: d copies of x^k, then solve remainder r
                res = Math.min(res, d * (opsK + 1) + dp(r));
                // Carry: (d+1) copies of x^k, then subtract (xk - r)
                res = Math.min(res, (d + 1) * (opsK + 1) + dp(xk - r));
            }
            xk *= x;
            k++;
        }
        // d=0 carry case: use 1 copy of x^k, subtract (xk - t)
        if (xk < 2 * t) {
            const opsK = k >= 2 ? k - 1 : 0;
            res = Math.min(res, opsK + 1 + dp(xk - t));
        }
        memo.set(t, res);
        return res;
    };
    return dp(target);
};
// @lc code=end

// TEST:
console.log(leastOpsExpressTarget(3, 19)); // 5
console.log(leastOpsExpressTarget(5, 501)); // 8
console.log(leastOpsExpressTarget(100, 100000000)); // 3
