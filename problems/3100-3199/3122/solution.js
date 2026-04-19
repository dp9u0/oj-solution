/*
 * @lc app=leetcode id=3122 lang=javascript
 *
 * [3122] Minimum Number of Operations to Satisfy Conditions
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
    let m = grid.length, n = grid[0].length;
    // cost[j][v] = number of changes needed to make column j all value v
    let cost = Array.from({ length: n }, () => new Array(10).fill(0));
    for (let j = 0; j < n; j++) {
        let freq = new Array(10).fill(0);
        for (let i = 0; i < m; i++) {
            freq[grid[i][j]]++;
        }
        for (let v = 0; v < 10; v++) {
            cost[j][v] = m - freq[v];
        }
    }
    // dp[j][v] = min operations for columns 0..j, with column j using value v
    let dp = cost[0].slice();
    for (let j = 1; j < n; j++) {
        let next = new Array(10).fill(Infinity);
        for (let v = 0; v < 10; v++) {
            for (let u = 0; u < 10; u++) {
                if (u !== v) {
                    next[v] = Math.min(next[v], dp[u] + cost[j][v]);
                }
            }
        }
        dp = next;
    }
    return Math.min(...dp);
};
// @lc code=end

// TEST:
console.log(minimumOperations([[1,0,2],[1,0,2]])); // 0
console.log(minimumOperations([[1,1,1],[0,0,0]])); // 3
console.log(minimumOperations([[1],[2],[3]])); // 2
