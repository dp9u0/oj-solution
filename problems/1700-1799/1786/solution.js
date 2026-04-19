/*
 * @lc app=leetcode id=1786 lang=javascript
 *
 * [1786] Number of Restricted Paths From First to Last Node
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countRestrictedPaths = function(n, edges) {
    let MOD = 1e9 + 7;
    let adj = Array.from({ length: n + 1 }, () => []);
    for (let [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }
    // Dijkstra from node n
    let dist = new Float64Array(n + 1).fill(Infinity);
    dist[n] = 0;
    let heap = [[0, n]];
    let push = (val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            let p = (i - 1) >> 1;
            if (heap[p][0] <= heap[i][0]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };
    let pop = () => {
        let top = heap[0];
        heap[0] = heap[heap.length - 1];
        heap.pop();
        let i = 0;
        while (true) {
            let s = i, l = 2 * i + 1, r = 2 * i + 2;
            if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
            if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
            if (s === i) break;
            [heap[s], heap[i]] = [heap[i], heap[s]];
            i = s;
        }
        return top;
    };
    while (heap.length) {
        let [d, u] = pop();
        if (d > dist[u]) continue;
        for (let [v, w] of adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                push([dist[v], v]);
            }
        }
    }
    // Sort nodes by dist, then DP
    let nodes = [];
    for (let i = 1; i <= n; i++) nodes.push(i);
    nodes.sort((a, b) => dist[a] - dist[b]);
    let dp = new Float64Array(n + 1);
    dp[n] = 1;
    for (let u of nodes) {
        for (let [v] of adj[u]) {
            if (dist[v] < dist[u]) {
                dp[u] = (dp[u] + dp[v]) % MOD;
            }
        }
    }
    return dp[1];
};
// @lc code=end

// TEST:
console.log(countRestrictedPaths(5, [[1,2,3],[1,3,3],[2,3,1],[1,4,2],[5,2,2],[3,5,1],[5,4,10]])); // 3
console.log(countRestrictedPaths(7, [[1,3,1],[4,1,2],[7,3,4],[2,5,3],[5,6,1],[6,7,2],[7,5,3],[2,6,4]])); // 1
