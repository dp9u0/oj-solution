/*
 * @lc app=leetcode id=1595 lang=javascript
 *
 * [1595] Minimum Cost to Connect Two Groups of Points
 */

// @lc code=start
/**
 * @param {number[][]} cost
 * @return {number}
 */
var connectTwoGroups = function(cost) {
    const n = cost.length, m = cost[0].length;
    const full = (1 << m) - 1;

    // minCost[j] = cheapest cost to connect group2 point j from any group1 point
    const minCost = new Array(m).fill(Infinity);
    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            minCost[j] = Math.min(minCost[j], cost[i][j]);
        }
    }

    const INF = Infinity;
    let dp = new Array(full + 1).fill(INF);
    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        const newDp = new Array(full + 1).fill(INF);
        for (let mask = 0; mask <= full; mask++) {
            if (dp[mask] === INF) continue;
            for (let j = 0; j < m; j++) {
                const newMask = mask | (1 << j);
                newDp[newMask] = Math.min(newDp[newMask], dp[mask] + cost[i][j]);
            }
        }
        dp = newDp;
    }

    let ans = INF;
    for (let mask = 0; mask <= full; mask++) {
        if (dp[mask] === INF) continue;
        let extra = 0;
        for (let j = 0; j < m; j++) {
            if (!(mask & (1 << j))) extra += minCost[j];
        }
        ans = Math.min(ans, dp[mask] + extra);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(connectTwoGroups([[15,96],[36,2]]));                        // 17
console.log(connectTwoGroups([[1,3,5],[4,1,1],[1,5,3]]));               // 4
console.log(connectTwoGroups([[2,5,1],[3,4,7],[8,1,2],[6,2,4],[3,8,8]])); // 10
console.log(connectTwoGroups([[1,1],[1,1]]));                            // 2
console.log(connectTwoGroups([[10,10],[10,10],[10,10]]));                // 30
