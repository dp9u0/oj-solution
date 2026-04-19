/*
 * @lc app=leetcode id=2065 lang=javascript
 *
 * [2065] Maximum Path Quality of a Graph
 */

// @lc code=start
/**
 * @param {number[]} values
 * @param {number[][]} edges
 * @param {number} maxTime
 * @return {number}
 */
var maximalPathQuality = function(values, edges, maxTime) {
    const n = values.length;
    const adj = Array.from({length: n}, () => []);
    for (const [u, v, t] of edges) {
        adj[u].push([v, t]);
        adj[v].push([u, t]);
    }

    // Dijkstra from node 0: shortest return time from each node
    const dist = new Array(n).fill(Infinity);
    dist[0] = 0;
    const pq = [[0, 0]];
    while (pq.length) {
        pq.sort((a, b) => a[0] - b[0]);
        const [d, u] = pq.shift();
        if (d > dist[u]) continue;
        for (const [v, t] of adj[u]) {
            if (d + t < dist[v]) {
                dist[v] = d + t;
                pq.push([dist[v], v]);
            }
        }
    }

    let ans = 0;
    const visited = new Uint8Array(n);
    visited[0] = 1;
    let quality = values[0];

    const dfs = (node, time) => {
        if (node === 0) ans = Math.max(ans, quality);

        for (const [next, t] of adj[node]) {
            if (time + t + dist[next] > maxTime) continue;
            const wasVisited = visited[next];
            if (!wasVisited) {
                visited[next] = 1;
                quality += values[next];
            }
            dfs(next, time + t);
            if (!wasVisited) {
                visited[next] = 0;
                quality -= values[next];
            }
        }
    };

    dfs(0, 0);
    return ans;
};
// @lc code=end

// TEST:
console.log(maximalPathQuality([0,32,10,43], [[0,1,10],[1,2,15],[0,3,10]], 49)); // 75
console.log(maximalPathQuality([5,10,15,20], [[0,1,10],[1,2,10],[0,3,10]], 30)); // 25
console.log(maximalPathQuality([1,2,3,4], [[0,1,10],[1,2,11],[2,3,12],[1,3,13]], 50)); // 7
console.log(maximalPathQuality([10], [], 10)); // 10
