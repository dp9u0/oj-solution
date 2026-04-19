/*
 * @lc app=leetcode id=1192 lang=javascript
 *
 * [1192] Critical Connections in a Network
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of connections) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const disc = new Int32Array(n).fill(-1);
    const low = new Int32Array(n).fill(-1);
    const res = [];
    let time = 0;

    function dfs(u, parent) {
        disc[u] = low[u] = time++;
        for (const v of adj[u]) {
            if (v === parent) continue;
            if (disc[v] === -1) {
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);
                if (low[v] > disc[u]) res.push([u, v]);
            } else {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }

    dfs(0, -1);
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]))); // [[1,3]]
console.log(JSON.stringify(criticalConnections(2, [[0,1]]))); // [[0,1]]
console.log(JSON.stringify(criticalConnections(5, [[0,1],[1,2],[2,3],[3,4]]))); // all 4 edges
console.log(JSON.stringify(criticalConnections(4, [[0,1],[1,2],[2,3],[3,0],[0,2]]))); // none (fully connected triangle + edge)
console.log(JSON.stringify(criticalConnections(6, [[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]))); // [[1,3]]
