/*
 * @lc app=leetcode.cn id=2473 lang=javascript
 *
 * [2473] 购买苹果的最低成本
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} roads
 * @param {number[]} appleCost
 * @param {number} k
 * @return {number[]}
 */
var minCost = function(n, roads, appleCost, k) {
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [a, b, c] of roads) {
        adj[a].push([b, c]);
        adj[b].push([a, c]);
    }
    const ans = new Array(n);
    const dist = new Float64Array(n + 1);
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
            while (true) {
                const l = 2 * i + 1, r = l + 1;
                let s = i;
                if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
                if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
                if (s === i) break;
                [heap[i], heap[s]] = [heap[s], heap[i]];
                i = s;
            }
        }
        return top;
    };
    const factor = k + 1;
    for (let s = 1; s <= n; s++) {
        dist.fill(Infinity);
        dist[s] = 0;
        heap.length = 0;
        push([0, s]);
        let best = Infinity;
        while (heap.length) {
            const [d, u] = pop();
            if (d > dist[u]) continue;
            const cand = d * factor + appleCost[u - 1];
            if (cand < best) best = cand;
            for (const [v, c] of adj[u]) {
                if (d + c < dist[v]) {
                    dist[v] = d + c;
                    push([dist[v], v]);
                }
            }
        }
        ans[s - 1] = best;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minCost(4, [[1,2,4],[2,3,2],[2,4,5],[3,4,1],[1,3,4]], [56,42,102,301], 2))); // [54,42,48,51]
console.log(JSON.stringify(minCost(3, [[1,2,5],[2,3,1],[3,1,2]], [2,3,1], 3))); // [2,3,1]
console.log(JSON.stringify(minCost(2, [[1,2,1]], [5,3], 1))); // [5,3]
console.log(JSON.stringify(minCost(2, [[1,2,1]], [1,100], 100))); // [1,100]
