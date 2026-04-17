/*
 * @lc app=leetcode id=1928 lang=javascript
 *
 * [1928] Minimum Cost to Reach Destination in Time
 */

// @lc code=start
/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
var minCost = function(maxTime, edges, passingFees) {
    const n = passingFees.length;
    const INF = 1e9;
    const dist = new Int32Array((maxTime + 1) * n).fill(INF);
    dist[0] = passingFees[0];

    for (let t = 0; t < maxTime; t++) {
        const base = t * n;
        for (const [u, v, w] of edges) {
            const nt = t + w;
            if (nt > maxTime) continue;
            const nb = nt * n;
            if (dist[base + u] < INF) {
                const nc = dist[base + u] + passingFees[v];
                if (nc < dist[nb + v]) dist[nb + v] = nc;
            }
            if (dist[base + v] < INF) {
                const nc = dist[base + v] + passingFees[u];
                if (nc < dist[nb + u]) dist[nb + u] = nc;
            }
        }
    }

    let ans = INF;
    for (let t = 0; t <= maxTime; t++) {
        const val = dist[t * n + n - 1];
        if (val < ans) ans = val;
    }
    return ans >= INF ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minCost(30, [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], [5,1,2,20,20,3]));
// Expected: 11

console.log(minCost(29, [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], [5,1,2,20,20,3]));
// Expected: 48

console.log(minCost(25, [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], [5,1,2,20,20,3]));
// Expected: -1

console.log(minCost(10, [[0,1,5]], [5,3]));
// Expected: 8

console.log(minCost(5, [[0,1,5]], [5,3]));
// Expected: 8

console.log(minCost(4, [[0,1,5]], [5,3]));
// Expected: -1
