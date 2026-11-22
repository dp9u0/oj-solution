/*
 * @lc app=leetcode.cn id=2737 lang=javascript
 *
 * [2737] 找到最近的标记节点
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} s
 * @param {number[]} marked
 * @return {number}
 */
var minimumDistance = function(n, edges, s, marked) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) adj[u].push([v, w]);
    const dist = new Array(n).fill(Infinity);
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
    dist[s] = 0;
    push([0, s]);
    while (heap.length) {
        const [cost, u] = pop();
        if (cost > dist[u]) continue;
        for (const [v, w] of adj[u]) {
            if (cost + w < dist[v]) {
                dist[v] = cost + w;
                push([dist[v], v]);
            }
        }
    }
    let ans = Infinity;
    for (const v of marked) ans = Math.min(ans, dist[v]);
    return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minimumDistance(4, [[0,1,1],[1,2,3],[2,3,2],[0,3,4]], 0, [2,3])); // 4
console.log(minimumDistance(5, [[0,1,2],[0,2,4],[1,3,1],[2,3,3],[3,4,2]], 1, [0,4])); // 3
console.log(minimumDistance(4, [[0,1,1],[1,2,3],[2,3,2]], 3, [0,1])); // -1
console.log(minimumDistance(3, [[0,1,5],[0,1,2],[1,2,1]], 0, [2])); // 3
console.log(minimumDistance(2, [[0,1,7]], 0, [1])); // 7
