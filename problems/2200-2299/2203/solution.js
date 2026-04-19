/*
 * @lc app=leetcode id=2203 lang=javascript
 *
 * [2203] Minimum Weighted Subgraph With the Required Paths
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} src1
 * @param {number} src2
 * @param {number} dest
 * @return {number}
 */
var minimumWeight = function(n, edges, src1, src2, dest) {
    const adj = Array.from({ length: n }, () => []);
    const radj = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        radj[v].push([u, w]);
    }

    const dijkstra = (start, graph) => {
        const dist = new Float64Array(n).fill(Infinity);
        dist[start] = 0;
        const h = [];
        const push = (val) => {
            h.push(val);
            let i = h.length - 1;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (h[p][0] <= h[i][0]) break;
                [h[p], h[i]] = [h[i], h[p]];
                i = p;
            }
        };
        const pop = () => {
            const top = h[0];
            const last = h.pop();
            if (h.length) {
                h[0] = last;
                let i = 0;
                while (true) {
                    let s = i, l = 2 * i + 1, r = 2 * i + 2;
                    if (l < h.length && h[l][0] < h[s][0]) s = l;
                    if (r < h.length && h[r][0] < h[s][0]) s = r;
                    if (s === i) break;
                    [h[s], h[i]] = [h[i], h[s]];
                    i = s;
                }
            }
            return top;
        };
        push([0, start]);
        const visited = new Uint8Array(n);
        while (h.length) {
            const [d, u] = pop();
            if (visited[u]) continue;
            visited[u] = 1;
            for (const [v, w] of graph[u]) {
                const nd = d + w;
                if (nd < dist[v]) {
                    dist[v] = nd;
                    push([nd, v]);
                }
            }
        }
        return dist;
    };

    const d1 = dijkstra(src1, adj);
    const d2 = dijkstra(src2, adj);
    const d3 = dijkstra(dest, radj);

    let ans = Infinity;
    for (let x = 0; x < n; x++) {
        const s = d1[x] + d2[x] + d3[x];
        if (s < ans) ans = s;
    }
    return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minimumWeight(6, [[0,2,2],[0,5,6],[1,0,3],[1,4,5],[2,1,1],[2,3,3],[2,3,4],[3,4,2],[4,5,1]], 0, 1, 5)); // 9
console.log(minimumWeight(3, [[0,1,1],[2,1,1]], 0, 1, 2)); // -1
console.log(minimumWeight(4, [[0,1,1],[1,2,1],[2,3,1],[0,3,5]], 0, 0, 3)); // 3
console.log(minimumWeight(3, [[0,1,1],[1,2,1]], 0, 1, 2)); // 2
console.log(minimumWeight(5, [[0,1,1],[0,2,5],[1,2,1],[2,3,1],[1,3,3],[3,4,1]], 0, 1, 4)); // 5
