/*
 * @lc app=leetcode id=3650 lang=javascript
 *
 * [3650] Minimum Cost Path with Edge Reversals
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minCost = function(n, edges) {
    let adj = new Array(n);
    for (let i = 0; i < n; i++) adj[i] = [];
    for (let [u, v, w] of edges) {
        adj[u].push([v, w]);       // normal edge
        adj[v].push([u, 2 * w]);   // reverse (switch) edge
    }
    let dist = new Float64Array(n).fill(Infinity);
    dist[0] = 0;
    // Min-heap
    let heap = [[0, 0]];
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
            let s = i, l = 2*i+1, r = 2*i+2;
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
        if (u === n - 1) return d;
        for (let [v, w] of adj[u]) {
            let nd = d + w;
            if (nd < dist[v]) {
                dist[v] = nd;
                push([nd, v]);
            }
        }
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(minCost(4, [[0,1,3],[3,1,1],[2,3,4],[0,2,2]])); // 5
console.log(minCost(4, [[0,2,1],[2,1,1],[1,3,1],[2,3,3]])); // 3
