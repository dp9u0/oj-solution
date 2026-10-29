/*
 * @lc app=leetcode.cn id=3970 lang=javascript
 *
 * [3970] 最多 K 个连续相同字符的最短路径
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(n, edges, labels, k) {
    const m = edges.length;

    // CSR adjacency; per edge precompute whether labels[u] === labels[v]
    const deg = new Int32Array(n);
    for (let i = 0; i < m; i++) deg[edges[i][0]]++;
    const start = new Int32Array(n + 1);
    for (let i = 0; i < n; i++) start[i + 1] = start[i] + deg[i];
    const eto = new Int32Array(m);
    const ew = new Int32Array(m);
    const esame = new Int8Array(m);
    const pos = start.slice(0, n);
    for (let i = 0; i < m; i++) {
        const u = edges[i][0], v = edges[i][1], w = edges[i][2];
        const p = pos[u]++;
        eto[p] = v;
        ew[p] = w;
        esame[p] = labels.charCodeAt(u) === labels.charCodeAt(v) ? 1 : 0;
    }

    // state id = node * k + (run - 1), run in [1, k] = trailing run of labels[node]
    const dist = new Float64Array(n * k).fill(Infinity);
    if (n === 1) return 0;
    dist[0] = 0; // node 0, run 1

    // binary heap of (dist, state)
    const hd = [0];
    const hs = [0];
    let hn = 1;
    const swap = (a, b) => {
        const td = hd[a]; hd[a] = hd[b]; hd[b] = td;
        const ts = hs[a]; hs[a] = hs[b]; hs[b] = ts;
    };
    const push = (d, s) => {
        let i = hn++;
        hd[i] = d; hs[i] = s;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (hd[p] <= hd[i]) break;
            swap(p, i);
            i = p;
        }
    };
    // pop: snapshot root pair, move last to root, sift down
    const popTop = () => {
        const d = hd[0], s = hs[0];
        hn--;
        if (hn > 0) {
            hd[0] = hd[hn]; hs[0] = hs[hn];
            let i = 0;
            for (;;) {
                const l = 2 * i + 1;
                let mx = i;
                if (l < hn && hd[l] < hd[mx]) mx = l;
                if (l + 1 < hn && hd[l + 1] < hd[mx]) mx = l + 1;
                if (mx === i) break;
                swap(mx, i);
                i = mx;
            }
        }
        return [d, s];
    };

    while (hn > 0) {
        const [d, s] = popTop();
        if (d > dist[s]) continue;
        const u = (s / k) | 0;
        if (u === n - 1) return d;
        const run = s - u * k + 1;
        for (let e = start[u]; e < start[u + 1]; e++) {
            const v = eto[e];
            const nrun = esame[e] ? run + 1 : 1;
            if (nrun > k) continue;
            const ns = v * k + nrun - 1;
            const nd = d + ew[e];
            if (nd < dist[ns]) {
                dist[ns] = nd;
                push(nd, ns);
            }
        }
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(shortestPath(3, [[0,1,1],[1,2,1],[0,2,3]], "aab", 1)); // 3
console.log(shortestPath(3, [[0,1,1],[1,2,1],[0,2,3]], "aab", 2)); // 2
console.log(shortestPath(3, [[0,1,1],[1,2,1]], "aaa", 2)); // -1
console.log(shortestPath(1, [], "a", 1)); // 0
console.log(shortestPath(3, [[1,2,1]], "abc", 1)); // -1
console.log(shortestPath(3, [[0,2,10],[0,1,1],[1,2,1]], "aba", 1)); // 2 (direct "aa" run 2 > 1, detour "aba" valid)
console.log(shortestPath(4, [[0,1,1],[1,2,1],[2,3,1],[0,3,100]], "aaaa", 4)); // 3 ("aaaa" run 4 <= 4)
console.log(shortestPath(4, [[0,1,1],[1,2,1],[2,3,1],[0,3,100]], "aaaa", 3)); // 100 ("aaaa" run 4 > 3, chain invalid)
console.log(shortestPath(3, [[0,2,10],[0,1,1],[1,2,1]], "aaa", 2)); // 10 (0->2 run 2 valid; 0->1->2 "aaa" invalid)
