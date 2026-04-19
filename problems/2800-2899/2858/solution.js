/*
 * @lc app=leetcode id=2858 lang=javascript
 *
 * [2858] Minimum Edge Reversals So Every Node Is Reachable
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var minEdgeReversals = function(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push([v, 0]);
        adj[v].push([u, 1]);
    }

    const parent = new Array(n).fill(-1);
    const parentCost = new Array(n).fill(0);
    const order = [0];
    const visited = new Array(n).fill(false);
    visited[0] = true;

    for (let i = 0; i < order.length; i++) {
        const node = order[i];
        for (const [next, w] of adj[node]) {
            if (visited[next]) continue;
            visited[next] = true;
            parent[next] = node;
            parentCost[next] = w;
            order.push(next);
        }
    }

    const ans = new Array(n);
    ans[0] = 0;
    for (let i = 1; i < n; i++) ans[0] += parentCost[order[i]];

    for (let i = 1; i < n; i++) {
        const node = order[i];
        const w = parentCost[node];
        ans[node] = ans[parent[node]] + 1 - 2 * w;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minEdgeReversals(4, [[2,0],[2,1],[1,3]]))); // [1,1,0,2]
console.log(JSON.stringify(minEdgeReversals(3, [[1,2],[2,0]]))); // [2,0,1]
