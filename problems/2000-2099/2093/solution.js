/*
 * @lc app=leetcode.cn id=2093 lang=javascript
 *
 * [2093] 前往目标城市的最小费用
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} highways
 * @param {number} discounts
 * @return {number}
 */
var minimumCost = function(n, highways, discounts) {
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b, t] of highways) {
        adj[a].push([b, t]);
        adj[b].push([a, t]);
    }
    const dist = Array.from({ length: n }, () => new Float64Array(discounts + 1).fill(Infinity));
    dist[0][discounts] = 0;
    const heap = [[0, 0, discounts]]; // [cost, city, d]
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
    while (heap.length) {
        const [cost, c, d] = pop();
        if (cost > dist[c][d]) continue;
        if (c === n - 1) return cost;
        for (const [u, t] of adj[c]) {
            if (cost + t < dist[u][d]) {
                dist[u][d] = cost + t;
                push([cost + t, u, d]);
            }
            if (d > 0) {
                const half = t >> 1;
                if (cost + half < dist[u][d - 1]) {
                    dist[u][d - 1] = cost + half;
                    push([cost + half, u, d - 1]);
                }
            }
        }
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(minimumCost(5, [[0,1,4],[2,1,3],[1,4,11],[3,2,3],[3,4,2]], 1)); // 9
console.log(minimumCost(4, [[1,3,17],[1,2,7],[3,2,5],[0,1,6],[3,0,20]], 20)); // 8
console.log(minimumCost(4, [[0,1,3],[2,3,2]], 0)); // -1
console.log(minimumCost(2, [[0,1,9]], 1)); // 4 (floor(9/2))
console.log(minimumCost(3, [[0,1,5],[1,2,5]], 2)); // 4 (both edges discounted: 2+2)
