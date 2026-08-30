/*
 * @lc app=leetcode id=3977 lang=javascript
 *
 * [3977] Minimum Time to Reach Target With Limited Power
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} power
 * @param {number[]} cost
 * @param {number} source
 * @param {number} target
 * @return {number[]}
 */
var minTimeMaxPower = function(n, edges, power, cost, source, target) {
    let adj = Array.from({ length: n }, () => []);
    for (let [u, v, t] of edges) adj[u].push([v, t]);

    // dist[u][p] = min time to be at node u with p remaining power
    let dist = Array.from({ length: n }, () => new Float64Array(power + 1).fill(Infinity));
    dist[source][power] = 0;

    // min-heap of [time, -power, node]: equal times pop larger power first
    let heap = [];
    let cmp = (a, b) => a[0] - b[0] || a[1] - b[1];
    let push = (val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            let p = (i - 1) >> 1;
            if (cmp(heap[p], heap[i]) <= 0) break;
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
            if (l < heap.length && cmp(heap[l], heap[s]) < 0) s = l;
            if (r < heap.length && cmp(heap[r], heap[s]) < 0) s = r;
            if (s === i) break;
            [heap[s], heap[i]] = [heap[i], heap[s]];
            i = s;
        }
        return top;
    };

    push([0, -power, source]);
    while (heap.length) {
        let [d, np, u] = pop();
        let p = -np;
        if (d > dist[u][p]) continue;
        if (u === target) return [d, p];
        if (p < cost[u]) continue;
        let np2 = -(p - cost[u]);
        for (let [v, t] of adj[u]) {
            let nd = d + t;
            if (nd < dist[v][p - cost[u]]) {
                dist[v][p - cost[u]] = nd;
                push([nd, np2, v]);
            }
        }
    }
    return [-1, -1];
};
// @lc code=end

// TEST:
console.log(minTimeMaxPower(5, [[0,1,1],[1,4,1],[0,2,1],[2,3,1],[3,4,1]], 4, [2,3,1,1,1], 0, 4)); // [3,0]
console.log(minTimeMaxPower(3, [[0,1,2],[1,2,2],[2,0,2]], 3, [1,1,1], 1, 1)); // [0,3]
console.log(minTimeMaxPower(4, [[0,1,3],[2,3,4]], 3, [1,1,1,1], 0, 3)); // [-1,-1]
console.log(minTimeMaxPower(4, [[0,1,1],[0,2,1],[1,3,1],[2,3,1]], 5, [1,3,1,1], 0, 3)); // [2,3] same time, prefer more power
console.log(minTimeMaxPower(4, [[0,1,1],[1,3,1],[0,2,2],[2,3,1]], 2, [1,2,1,1], 0, 3)); // [3,0] fast prefix blocked by power
console.log(minTimeMaxPower(1, [], 7, [5], 0, 0)); // [0,7]
