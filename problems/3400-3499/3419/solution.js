/*
 * @lc app=leetcode id=3419 lang=javascript
 *
 * [3419] Minimize the Maximum Edge Weight of Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} threshold
 * @return {number}
 */
var minMaxWeight = function(n, edges, threshold) {
    let lo = 1, hi = 1000000, ans = -1;
    while (lo <= hi) {
        let mid = (lo + hi) >> 1;
        if (check(n, edges, mid)) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return ans;
};

function check(n, edges, maxW) {
    let adj = new Array(n);
    for (let i = 0; i < n; i++) adj[i] = [];
    for (let [a, b, w] of edges) {
        if (w <= maxW) adj[b].push(a); // reverse edge
    }
    let visited = new Uint8Array(n);
    visited[0] = 1;
    let q = [0], head = 0;
    while (head < q.length) {
        let u = q[head++];
        for (let v of adj[u]) {
            if (!visited[v]) {
                visited[v] = 1;
                q.push(v);
            }
        }
    }
    for (let i = 0; i < n; i++) if (!visited[i]) return false;
    return true;
}
// @lc code=end

// TEST:
console.log(minMaxWeight(5, [[1,0,1],[2,0,2],[3,0,1],[4,3,1],[2,1,1]], 2)); // 1
console.log(minMaxWeight(5, [[0,1,1],[0,2,2],[0,3,1],[0,4,1],[1,2,1],[1,4,1]], 1)); // -1
console.log(minMaxWeight(5, [[1,2,1],[1,3,3],[1,4,5],[2,3,2],[3,4,2],[4,0,1]], 1)); // 2
