/*
 * @lc app=leetcode id=1473 lang=javascript
 *
 * [1473] Paint House III
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function(houses, cost, m, n, target) {
    const INF = Infinity;

    let dp = Array.from({ length: n + 1 }, () => new Array(target + 1).fill(INF));

    if (houses[0] > 0) {
        dp[houses[0]][1] = 0;
    } else {
        for (let j = 1; j <= n; j++) {
            dp[j][1] = cost[0][j - 1];
        }
    }

    for (let i = 1; i < m; i++) {
        const min1 = new Array(target + 1).fill(INF);
        const min2 = new Array(target + 1).fill(INF);
        const min1J = new Array(target + 1).fill(0);

        for (let k = 1; k <= target; k++) {
            for (let j = 1; j <= n; j++) {
                if (dp[j][k] < min1[k]) {
                    min2[k] = min1[k];
                    min1[k] = dp[j][k];
                    min1J[k] = j;
                } else if (dp[j][k] < min2[k]) {
                    min2[k] = dp[j][k];
                }
            }
        }

        const ndp = Array.from({ length: n + 1 }, () => new Array(target + 1).fill(INF));

        if (houses[i] > 0) {
            const c = houses[i];
            for (let k = 1; k <= target; k++) {
                let val = dp[c][k];
                const diff = (min1J[k - 1] !== c) ? min1[k - 1] : min2[k - 1];
                if (diff < val) val = diff;
                ndp[c][k] = val;
            }
        } else {
            for (let j = 1; j <= n; j++) {
                for (let k = 1; k <= target; k++) {
                    let val = dp[j][k];
                    const diff = (min1J[k - 1] !== j) ? min1[k - 1] : min2[k - 1];
                    if (diff < val) val = diff;
                    ndp[j][k] = val < INF ? val + cost[i][j - 1] : INF;
                }
            }
        }

        dp = ndp;
    }

    let ans = INF;
    for (let j = 1; j <= n; j++) {
        if (dp[j][target] < ans) ans = dp[j][target];
    }
    return ans === INF ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minCost([0,0,0,0,0], [[1,10],[10,1],[10,1],[1,10],[5,1]], 5, 2, 3)); // 9
console.log(minCost([0,2,1,2,0], [[1,10],[10,1],[10,1],[1,10],[5,1]], 5, 2, 3)); // 11
console.log(minCost([3,1,2,3], [[1,1,1],[1,1,1],[1,1,1],[1,1,1]], 4, 3, 3)); // -1
console.log(minCost([0,0,0,0,0], [[1,10],[10,1],[10,1],[1,10],[5,1]], 5, 2, 5)); // 18
console.log(minCost([1,0,0,0,0], [[1,10],[10,1],[10,1],[1,10],[5,1]], 5, 2, 3)); // 9
