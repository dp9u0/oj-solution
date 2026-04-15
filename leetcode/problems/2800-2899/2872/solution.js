/*
 * @lc app=leetcode id=2872 lang=javascript
 *
 * [2872] Maximum Number of K-Divisible Components
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    let count = 0;

    function dfs(node, parent) {
        let sum = values[node];
        for (const child of adj[node]) {
            if (child !== parent) {
                sum += dfs(child, node);
            }
        }
        if (sum % k === 0) {
            count++;
            return 0;
        }
        return sum;
    }

    dfs(0, -1);
    return count;
};
// @lc code=end

// TEST:
console.log(maxKDivisibleComponents(5, [[0,2],[1,2],[1,3],[2,4]], [1,8,1,4,4], 6));  // 2
console.log(maxKDivisibleComponents(7, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], [3,0,6,1,5,2,1], 3));  // 3
