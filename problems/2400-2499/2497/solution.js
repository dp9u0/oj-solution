/*
 * @lc app=leetcode id=2497 lang=javascript
 *
 * [2497] Maximum Star Sum of a Graph
 */

// @lc code=start
/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function(vals, edges, k) {
    const n = vals.length;
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(vals[b]);
        adj[b].push(vals[a]);
    }
    let result = -Infinity;
    for (let i = 0; i < n; i++) {
        adj[i].sort((a, b) => b - a);
        let sum = vals[i];
        result = Math.max(result, sum);
        for (let j = 0; j < Math.min(k, adj[i].length); j++) {
            sum += adj[i][j];
            if (sum <= result && adj[i][j] <= 0) break;
            result = Math.max(result, sum);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maxStarSum([1,2,3,4,10,-10,-20], [[0,1],[1,2],[1,3],[3,4],[3,5],[3,6]], 2)); // 16
console.log(maxStarSum([-5], [], 0)); // -5
