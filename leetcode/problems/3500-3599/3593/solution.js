/*
 * @lc app=leetcode id=3593 lang=javascript
 *
 * [3593] Minimum Increments to Equalize Leaf Paths
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} cost
 * @return {number}
 */
var minIncrease = function(n, edges, cost) {
    const adj = Array.from({length: n}, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // BFS: build parent-child, compute pathScore
    const parent = new Int32Array(n).fill(-1);
    const pathScore = new Array(n);
    pathScore[0] = cost[0];
    const order = [0];
    const visited = new Uint8Array(n);
    visited[0] = 1;
    for (let head = 0; head < order.length; head++) {
        const v = order[head];
        for (const u of adj[v]) {
            if (!visited[u]) {
                visited[u] = 1;
                parent[u] = v;
                pathScore[u] = pathScore[v] + cost[u];
                order.push(u);
            }
        }
    }

    // Process in reverse BFS order (bottom-up)
    const maxPath = new Array(n);
    const mods = new Array(n).fill(0);

    for (let idx = order.length - 1; idx >= 0; idx--) {
        const v = order[idx];
        let hasChild = false, mp = 0, m = 0;
        for (const u of adj[v]) {
            if (parent[u] === v) {
                hasChild = true;
                mp = Math.max(mp, maxPath[u]);
                m += mods[u];
            }
        }
        if (!hasChild) {
            maxPath[v] = pathScore[v];
        } else {
            for (const u of adj[v]) {
                if (parent[u] === v && maxPath[u] < mp) m++;
            }
            maxPath[v] = mp;
            mods[v] = m;
        }
    }

    return mods[0];
};
// @lc code=end

// TEST:
console.log(minIncrease(3, [[0,1],[0,2]], [2,1,3]));                        // 1
console.log(minIncrease(3, [[0,1],[1,2]], [5,1,4]));                        // 0
console.log(minIncrease(5, [[0,4],[0,1],[1,2],[1,3]], [3,4,1,1,7]));       // 1
