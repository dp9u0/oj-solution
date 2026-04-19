/*
 * @lc app=leetcode id=3791 lang=javascript
 *
 * [3791] Number of Balanced Integers in a Range
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countBalanced = function(low, high) {
    const getSign = (i) => i % 2 === 0 ? 1 : -1;

    // Count all d-digit balanced numbers (no tight constraint)
    const totalBalanced = (d) => {
        const maxDiff = d * 9;
        const offset = maxDiff;
        let dp = new Array(2 * maxDiff + 1).fill(0);
        const s0 = getSign(0);
        for (let dig = 1; dig <= 9; dig++) dp[offset + s0 * dig]++;
        for (let pos = 1; pos < d; pos++) {
            const sign = getSign(pos);
            const next = new Array(2 * maxDiff + 1).fill(0);
            for (let diff = 0; diff <= 2 * maxDiff; diff++) {
                if (dp[diff] === 0) continue;
                const cnt = dp[diff];
                for (let dig = 0; dig <= 9; dig++) {
                    const nd = diff + sign * dig;
                    if (nd >= 0 && nd <= 2 * maxDiff) next[nd] += cnt;
                }
            }
            dp = next;
        }
        return dp[offset];
    };

    // Count d-digit balanced numbers <= n
    const countUpTo = (d, n) => {
        const lo = Math.pow(10, d - 1);
        if (n < lo) return 0;
        const hi = Math.pow(10, d) - 1;
        if (n >= hi) return totalBalanced(d);

        const digits = String(n).split('').map(Number);
        const maxDiff = d * 9;
        const offset = maxDiff;
        let dpTight = new Array(2 * maxDiff + 1).fill(0);
        let dpLoose = new Array(2 * maxDiff + 1).fill(0);

        const s0 = getSign(0);
        const lim0 = digits[0];
        for (let dig = 1; dig < lim0; dig++) dpLoose[offset + s0 * dig]++;
        dpTight[offset + s0 * lim0]++;

        for (let pos = 1; pos < d; pos++) {
            const sign = getSign(pos);
            const limDig = digits[pos];
            const newTight = new Array(2 * maxDiff + 1).fill(0);
            const newLoose = new Array(2 * maxDiff + 1).fill(0);

            for (let diff = 0; diff <= 2 * maxDiff; diff++) {
                if (dpTight[diff]) {
                    const cnt = dpTight[diff];
                    for (let dig = 0; dig <= limDig; dig++) {
                        const nd = diff + sign * dig;
                        if (nd < 0 || nd > 2 * maxDiff) continue;
                        if (dig === limDig) newTight[nd] += cnt;
                        else newLoose[nd] += cnt;
                    }
                }
                if (dpLoose[diff]) {
                    const cnt = dpLoose[diff];
                    for (let dig = 0; dig <= 9; dig++) {
                        const nd = diff + sign * dig;
                        if (nd < 0 || nd > 2 * maxDiff) continue;
                        newLoose[nd] += cnt;
                    }
                }
            }
            dpTight = newTight;
            dpLoose = newLoose;
        }
        return dpTight[offset] + dpLoose[offset];
    };

    const countAll = (n) => {
        let total = 0;
        for (let d = 2; d <= 16; d++) total += countUpTo(d, n);
        return total;
    };

    return countAll(high) - countAll(low - 1);
};
// @lc code=end

// TEST:
console.log(countBalanced(1, 100)); // 9
console.log(countBalanced(120, 129)); // 1
console.log(countBalanced(1234, 1234)); // 0
console.log(countBalanced(10, 99)); // 9
console.log(countBalanced(100, 999)); // count of 3-digit balanced
