/*
 * @lc app=leetcode.cn id=2714 lang=javascript
 *
 * [2714] 找到 K 次跨越的最短路径
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} s
 * @param {number} d
 * @param {number} k
 * @return {number}
 */
var shortestPathWithHops = function(n, edges, s, d, k) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }
    const INF = Infinity;
    const dist = Array.from({ length: n }, () => new Array(k + 1).fill(INF));
    // binary min-heap of [cost, node, hops]
    const heap = [];
    const push = (item) => {
        heap.push(item);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p][0] <= heap[i][0]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };
    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length) {
            heap[0] = last;
            let i = 0;
            for (;;) {
                const l = 2 * i + 1, r = l + 1;
                let m = i;
                if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
                if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
                if (m === i) break;
                [heap[m], heap[i]] = [heap[i], heap[m]];
                i = m;
            }
        }
        return top;
    };
    dist[s][0] = 0;
    push([0, s, 0]);
    while (heap.length) {
        const [cost, u, c] = pop();
        if (cost > dist[u][c]) continue;
        if (u === d) continue; // expanding past d unnecessary
        for (const [v, w] of adj[u]) {
            if (cost + w < dist[v][c]) {
                dist[v][c] = cost + w;
                push([dist[v][c], v, c]);
            }
            if (c < k && cost < dist[v][c + 1]) {
                dist[v][c + 1] = cost;
                push([cost, v, c + 1]);
            }
        }
    }
    let ans = INF;
    for (let c = 0; c <= k; c++) ans = Math.min(ans, dist[d][c]);
    return ans;
};
// @lc code=end

// TEST:
console.log(shortestPathWithHops(4, [[0,1,4],[0,2,2],[2,3,6]], 1, 3, 2)); // 2
console.log(shortestPathWithHops(7, [[3,1,9],[3,2,4],[4,0,9],[0,5,6],[3,6,2],[6,0,4],[1,2,4]], 4, 1, 2)); // 6
console.log(shortestPathWithHops(5, [[0,4,2],[0,1,3],[0,2,1],[2,1,4],[1,3,4],[3,4,7]], 2, 3, 1)); // 3
console.log(shortestPathWithHops(2, [[0,1,5]], 0, 1, 0)); // 5
console.log(shortestPathWithHops(3, [[0,1,1],[1,2,1],[0,2,10]], 0, 2, 1)); // 0
