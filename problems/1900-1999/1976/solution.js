/*
 * @lc app=leetcode id=1976 lang=javascript
 *
 * [1976] Number of Ways to Arrive at Destination
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {
    const MOD = 1e9 + 7;
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, t] of roads) {
        adj[u].push([v, t]);
        adj[v].push([u, t]);
    }

    const dist = new Array(n).fill(Infinity);
    const ways = new Array(n).fill(0);
    dist[0] = 0;
    ways[0] = 1;

    // Min-heap: [distance, node]
    const pq = [[0, 0]];
    const heapify = (i) => {
        const n = pq.length;
        while (true) {
            let smallest = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < n && pq[l][0] < pq[smallest][0]) smallest = l;
            if (r < n && pq[r][0] < pq[smallest][0]) smallest = r;
            if (smallest === i) break;
            [pq[i], pq[smallest]] = [pq[smallest], pq[i]];
            i = smallest;
        }
    };

    const push = (item) => {
        pq.push(item);
        let i = pq.length - 1;
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (pq[parent][0] <= pq[i][0]) break;
            [pq[parent], pq[i]] = [pq[i], pq[parent]];
            i = parent;
        }
    };

    const pop = () => {
        const top = pq[0];
        const last = pq.pop();
        if (pq.length > 0) {
            pq[0] = last;
            heapify(0);
        }
        return top;
    };

    while (pq.length > 0) {
        const [d, u] = pop();
        if (d > dist[u]) continue;
        for (const [v, w] of adj[u]) {
            const nd = d + w;
            if (nd < dist[v]) {
                dist[v] = nd;
                ways[v] = ways[u];
                push([nd, v]);
            } else if (nd === dist[v]) {
                ways[v] = (ways[v] + ways[u]) % MOD;
            }
        }
    }

    return ways[n - 1] % MOD;
};
// @lc code=end

// TEST:
console.log(countPaths(7, [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]])); // 4
console.log(countPaths(2, [[1,0,10]])); // 1
