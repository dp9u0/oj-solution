/*
 * @lc app=leetcode id=3820 lang=javascript
 *
 * [3820] Pythagorean Distance Nodes in a Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var specialNodes = function(n, edges, x, y, z) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const bfs = (start) => {
        const dist = new Array(n).fill(-1);
        dist[start] = 0;
        const q = [start];
        for (let i = 0; i < q.length; i++) {
            const u = q[i];
            for (const v of adj[u]) {
                if (dist[v] === -1) {
                    dist[v] = dist[u] + 1;
                    q.push(v);
                }
            }
        }
        return dist;
    };

    const dx = bfs(x), dy = bfs(y), dz = bfs(z);
    let count = 0;
    for (let i = 0; i < n; i++) {
        const d = [dx[i], dy[i], dz[i]].sort((a, b) => a - b);
        if (d[0] * d[0] + d[1] * d[1] === d[2] * d[2]) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(specialNodes(4, [[0,1],[0,2],[0,3]], 1, 2, 3)); // 3
console.log(specialNodes(4, [[0,1],[1,2],[2,3]], 0, 3, 2)); // 0
console.log(specialNodes(4, [[0,1],[1,2],[1,3]], 1, 3, 0)); // 1
