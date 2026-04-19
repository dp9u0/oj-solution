/*
 * @lc app=leetcode id=1584 lang=javascript
 *
 * [1584] Min Cost to Connect All Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const n = points.length;
    const minDist = new Array(n).fill(Infinity);
    const visited = new Array(n).fill(false);
    minDist[0] = 0;
    let result = 0;
    let edges = 0;

    while (edges < n) {
        let u = -1;
        for (let i = 0; i < n; i++) {
            if (!visited[i] && (u === -1 || minDist[i] < minDist[u])) {
                u = i;
            }
        }
        visited[u] = true;
        result += minDist[u];
        edges++;
        for (let v = 0; v < n; v++) {
            if (!visited[v]) {
                const dist = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
                minDist[v] = Math.min(minDist[v], dist);
            }
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]])); // 20
console.log(minCostConnectPoints([[3,12],[-2,5],[-4,1]])); // 18
console.log(minCostConnectPoints([[0,0]])); // 0
