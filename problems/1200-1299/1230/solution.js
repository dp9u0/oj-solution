/*
 * @lc app=leetcode.cn id=1230 lang=javascript
 *
 * [1230] 抛掷硬币
 */

// @lc code=start
/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function(prob, target) {
    const n = prob.length;
    const dp = new Array(n + 1).fill(0); // dp[j] = P(exactly j heads so far)
    dp[0] = 1;
    let heads = 0; // upper bound of reachable heads so far
    for (let i = 0; i < n; i++) {
        const p = prob[i];
        heads++;
        for (let j = Math.min(heads, n); j >= 0; j--) { // in-place, j descending
            dp[j] = (j > 0 ? dp[j - 1] * p : 0) + dp[j] * (1 - p);
        }
    }
    return dp[target];
};
// @lc code=end

// TEST:
console.log(probabilityOfHeads([0.4], 1)); // 0.4
console.log(probabilityOfHeads([0.5,0.5,0.5,0.5,0.5], 0)); // 0.03125
console.log(probabilityOfHeads([0.4,0.6], 1)); // 0.52
console.log(probabilityOfHeads([1,1], 2)); // 1
console.log(probabilityOfHeads([0,0], 1)); // 0
