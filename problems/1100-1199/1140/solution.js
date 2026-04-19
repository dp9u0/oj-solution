/*
 * @lc app=leetcode id=1140 lang=javascript
 *
 * [1140] Stone Game II
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    const suffixSum = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) suffixSum[i] = suffixSum[i + 1] + piles[i];
    const memo = new Map();
    function dp(i, m) {
        if (i + 2 * m >= n) return suffixSum[i];
        const key = i * 200 + m;
        if (memo.has(key)) return memo.get(key);
        let best = 0;
        for (let x = 1; x <= 2 * m; x++) {
            const taken = suffixSum[i] - suffixSum[i + x];
            const remain = dp(i + x, Math.max(m, x));
            best = Math.max(best, taken + suffixSum[i + x] - remain);
        }
        memo.set(key, best);
        return best;
    }
    return dp(0, 1);
};
// @lc code=end

// TEST:
console.log(stoneGameII([2,7,9,4,4]));
console.log(stoneGameII([1,2,3,4,5,100]));
console.log(stoneGameII([1]));
