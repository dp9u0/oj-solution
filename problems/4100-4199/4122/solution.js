/*
 * @lc app=leetcode.cn id=4122 lang=javascript
 *
 * [4122] 信号激活的最早时刻
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} requiredSignals
 * @return {number[]}
 */
var earliestActivationTimes = function(n, edges, requiredSignals) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, d] of edges) adj[u].push([v, d]);
    const active = new Array(n).fill(false);
    const arrived = new Array(n).fill(0);
    const ans = new Array(n).fill(-1);
    // min-heap of [time, node]
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
    const activate = (v, t) => {
        active[v] = true;
        ans[v] = t;
        for (const [w, d] of adj[v]) push([t + d, w]);
    };
    activate(0, 0);
    while (heap.length) {
        const [t, v] = pop();
        if (active[v]) continue;
        arrived[v]++;
        if (arrived[v] >= requiredSignals[v]) activate(v, t);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(earliestActivationTimes(3, [[0,1,1],[0,2,1]], [1,1,2]))); // [0,1,-1]
console.log(JSON.stringify(earliestActivationTimes(4, [[0,1,1],[0,2,1],[1,3,2],[2,3,2]], [3,1,1,2]))); // [0,1,1,3]
console.log(JSON.stringify(earliestActivationTimes(4, [[0,1,2],[1,2,3],[0,2,5],[2,3,1]], [3,1,2,1]))); // [0,2,5,6]
console.log(JSON.stringify(earliestActivationTimes(4, [[0,1,2],[1,0,1],[1,2,1],[2,3,1],[3,2,1]], [3,1,2,1]))); // [0,2,-1,-1]
