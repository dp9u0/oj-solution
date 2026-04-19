/*
 * @lc app=leetcode id=1334 lang=javascript
 *
 * [1334] Find the City With the Smallest Number of Neighbors at a Threshold Distance
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    let INF = 1e9;
    let dist = Array.from({ length: n }, () => new Array(n).fill(INF));
    for (let i = 0; i < n; i++) dist[i][i] = 0;
    for (let [u, v, w] of edges) {
        dist[u][v] = Math.min(dist[u][v], w);
        dist[v][u] = Math.min(dist[v][u], w);
    }
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    let minCount = n, ans = 0;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j && dist[i][j] <= distanceThreshold) count++;
        }
        if (count < minCount || (count === minCount && i > ans)) {
            minCount = count;
            ans = i;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(findTheCity(4, [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], 4));
console.log(findTheCity(5, [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], 2));
