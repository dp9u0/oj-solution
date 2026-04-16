/*
 * @lc app=leetcode id=3123 lang=javascript
 *
 * [3123] Find Edges in Shortest Paths
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean[]}
 */
var findAnswer = function(n, edges) {
    const adj = Array.from({length: n}, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    const dijkstra = (src) => {
        const dist = new Float64Array(n).fill(Infinity);
        dist[src] = 0;
        const h = [[0, src]];
        const push = (d, v) => {
            h.push([d, v]);
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
            if (h.length > 0) {
                h[0] = last;
                let i = 0;
                while (true) {
                    let s = i, l = 2 * i + 1, r = 2 * i + 2;
                    if (l < h.length && h[l][0] < h[s][0]) s = l;
                    if (r < h.length && h[r][0] < h[s][0]) s = r;
                    if (s === i) break;
                    [h[i], h[s]] = [h[s], h[i]];
                    i = s;
                }
            }
            return top;
        };
        while (h.length > 0) {
            const [d, u] = pop();
            if (d > dist[u]) continue;
            for (const [v, w] of adj[u]) {
                const nd = d + w;
                if (nd < dist[v]) { dist[v] = nd; push(nd, v); }
            }
        }
        return dist;
    };

    const dist0 = dijkstra(0);
    const dist1 = dijkstra(n - 1);
    const D = dist0[n - 1];

    return edges.map(([u, v, w]) =>
        D < Infinity && (dist0[u] + w + dist1[v] === D || dist0[v] + w + dist1[u] === D)
    );
};
// @lc code=end

// TEST:
console.log(findAnswer(6, [[0,1,4],[0,2,1],[1,3,2],[1,4,3],[1,5,1],[2,3,1],[3,5,3],[4,5,2]])); // [true,true,true,false,true,true,true,false]
console.log(findAnswer(4, [[2,0,1],[0,1,1],[0,3,4],[3,2,2]])); // [true,false,false,true]
console.log(findAnswer(2, [[0,1,1]])); // [true]
console.log(findAnswer(3, [[0,1,1],[1,2,1],[0,2,3]])); // [true,true,false]
