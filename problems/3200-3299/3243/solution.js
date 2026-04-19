/*
 * @lc app=leetcode id=3243 lang=javascript
 *
 * [3243] Shortest Distance After Road Addition Queries I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    const adj = Array.from({ length: n }, (_, i) => [i + 1]);
    adj[n - 1] = [];

    const bfs = () => {
        const dist = new Array(n).fill(-1);
        dist[0] = 0;
        const queue = [0];
        for (let i = 0; i < queue.length; i++) {
            const u = queue[i];
            if (u === n - 1) return dist[u];
            for (const v of adj[u]) {
                if (dist[v] === -1) {
                    dist[v] = dist[u] + 1;
                    queue.push(v);
                }
            }
        }
        return -1;
    };

    const ans = [];
    for (const [u, v] of queries) {
        adj[u].push(v);
        ans.push(bfs());
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(shortestDistanceAfterQueries(5, [[2,4],[0,2],[0,4]]))); // [3,2,1]
console.log(JSON.stringify(shortestDistanceAfterQueries(4, [[0,3],[0,2]]))); // [1,1]
