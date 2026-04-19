/*
 * @lc app=leetcode id=2039 lang=javascript
 *
 * [2039] The Time When the Network Becomes Idle
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
var networkBecomesIdle = function(edges, patience) {
    const n = patience.length;
    // Build adjacency list
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // BFS from master (0) to find shortest distances
    const dist = new Array(n).fill(-1);
    dist[0] = 0;
    const queue = [0];
    let head = 0;
    while (head < queue.length) {
        const u = queue[head++];
        for (const v of adj[u]) {
            if (dist[v] === -1) {
                dist[v] = dist[u] + 1;
                queue.push(v);
            }
        }
    }

    // For each server, compute the last time a message finishes
    let ans = 0;
    for (let i = 1; i < n; i++) {
        const roundTrip = 2 * dist[i];
        const p = patience[i];
        // Last resend time: if roundTrip > p, last send at ceil(roundTrip/p)*p - p = (ceil-1)*p
        const lastSend = p >= roundTrip ? 0 : (Math.ceil(roundTrip / p) - 1) * p;
        const finish = lastSend + roundTrip;
        ans = Math.max(ans, finish);
    }

    return ans + 1;
};
// @lc code=end

// TEST:
console.log(networkBecomesIdle([[0,1],[1,2]], [0,2,1]));           // 8
console.log(networkBecomesIdle([[0,1],[0,2],[1,2]], [0,10,10]));  // 3
console.log(networkBecomesIdle([[0,1],[0,2]], [0,1,1]));          // 4
