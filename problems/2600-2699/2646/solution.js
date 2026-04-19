/*
 * @lc app=leetcode id=2646 lang=javascript
 *
 * [2646] Minimize the Total Price of the Trips
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @param {number[][]} trips
 * @return {number}
 */
var minimumTotalPrice = function(n, edges, price, trips) {
    // Build adjacency list
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    // Count node visits across all trips
    const count = new Array(n).fill(0);

    const findPath = (start, end) => {
        const parent = new Array(n).fill(-1);
        const visited = new Array(n).fill(false);
        const queue = [start];
        visited[start] = true;
        while (queue.length) {
            const node = queue.shift();
            if (node === end) break;
            for (const nei of adj[node]) {
                if (!visited[nei]) {
                    visited[nei] = true;
                    parent[nei] = node;
                    queue.push(nei);
                }
            }
        }
        // Backtrack path and count nodes
        let node = end;
        while (node !== -1) {
            count[node]++;
            node = parent[node];
        }
    };

    for (const [start, end] of trips) {
        findPath(start, end);
    }

    // Tree DP (house robber style)
    // dp[node][0] = min cost, node NOT halved
    // dp[node][1] = min cost, node IS halved
    const dfs = (node, par) => {
        let notHalve = count[node] * price[node];
        let halve = Math.floor(count[node] * price[node] / 2);
        for (const child of adj[node]) {
            if (child === par) continue;
            const [c0, c1] = dfs(child, node);
            notHalve += Math.min(c0, c1);
            halve += c0; // if node is halved, child must NOT be halved
        }
        return [notHalve, halve];
    };

    const [r0, r1] = dfs(0, -1);
    return Math.min(r0, r1);
};
// @lc code=end

// TEST:
console.log(minimumTotalPrice(4, [[0,1],[1,2],[1,3]], [2,2,10,6], [[0,3],[2,1],[2,3]])); // 23
console.log(minimumTotalPrice(2, [[0,1]], [2,2], [[0,0]])); // 1
