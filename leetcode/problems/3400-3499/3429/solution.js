/*
 * @lc app=leetcode id=3429 lang=javascript
 *
 * [3429] Paint House IV
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} cost
 * @return {number}
 */
var minCost = function(n, cost) {
    const pairs = n >> 1;
    const INF = Infinity;
    // dp[c1][c2] = min cost for current pair with colors (c1, c2)
    let dp = Array.from({ length: 3 }, () => new Array(3).fill(INF));
    for (let c1 = 0; c1 < 3; c1++) {
        for (let c2 = 0; c2 < 3; c2++) {
            if (c1 !== c2) {
                dp[c1][c2] = cost[0][c1] + cost[n - 1][c2];
            }
        }
    }
    for (let i = 1; i < pairs; i++) {
        const ndp = Array.from({ length: 3 }, () => new Array(3).fill(INF));
        for (let c1 = 0; c1 < 3; c1++) {
            for (let c2 = 0; c2 < 3; c2++) {
                if (c1 === c2 || dp[c1][c2] === INF) continue;
                for (let c3 = 0; c3 < 3; c3++) {
                    if (c3 === c1) continue;
                    for (let c4 = 0; c4 < 3; c4++) {
                        if (c4 === c3 || c4 === c2) continue;
                        const val = dp[c1][c2] + cost[i][c3] + cost[n - 1 - i][c4];
                        if (val < ndp[c3][c4]) ndp[c3][c4] = val;
                    }
                }
            }
        }
        dp = ndp;
    }
    let ans = INF;
    for (let c1 = 0; c1 < 3; c1++) {
        for (let c2 = 0; c2 < 3; c2++) {
            ans = Math.min(ans, dp[c1][c2]);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minCost(4, [[3,5,7],[6,2,9],[4,8,1],[7,3,5]])); // 9
console.log(minCost(6, [[2,4,6],[5,3,8],[7,1,9],[4,6,2],[3,5,7],[8,2,4]])); // 18
