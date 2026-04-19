/*
 * @lc app=leetcode id=2581 lang=javascript
 *
 * [2581] Count Number of Possible Root Nodes
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[][]} guesses
 * @param {number} k
 * @return {number}
 */
var rootCount = function(edges, guesses, k) {
    const n = edges.length + 1;
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const guessSet = new Set();
    for (const [u, v] of guesses) {
        guessSet.add(u * n + v);
    }

    // DFS from root 0 to count correct guesses and build order
    let cnt = 0;
    const parent = new Int32Array(n).fill(-1);
    const order = [];
    const stack = [0];
    parent[0] = -2;
    while (stack.length) {
        const u = stack.pop();
        order.push(u);
        for (const v of adj[u]) {
            if (parent[v] !== -1) continue;
            parent[v] = u;
            if (guessSet.has(u * n + v)) cnt++;
            stack.push(v);
        }
    }

    // Reroot: process in DFS order (parent before child)
    let result = cnt >= k ? 1 : 0;
    const cntAt = new Int32Array(n);
    cntAt[0] = cnt;

    for (const u of order) {
        for (const v of adj[u]) {
            if (v === parent[u]) continue;
            cntAt[v] = cntAt[u];
            if (guessSet.has(u * n + v)) cntAt[v]--;
            if (guessSet.has(v * n + u)) cntAt[v]++;
            if (cntAt[v] >= k) result++;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(rootCount([[0,1],[1,2],[1,3],[4,2]], [[1,3],[0,1],[1,0],[2,4]], 3)); // 3
console.log(rootCount([[0,1],[1,2],[2,3],[3,4]], [[1,0],[3,4],[2,1],[3,2]], 1)); // 5
