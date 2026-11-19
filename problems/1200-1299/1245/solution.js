/*
 * @lc app=leetcode.cn id=1245 lang=javascript
 *
 * [1245] 树的直径
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function(edges) {
    const n = edges.length + 1;
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    const bfsFarthest = (src) => {
        const dist = new Array(n).fill(-1);
        dist[src] = 0;
        const queue = [src];
        let far = src, maxD = 0;
        for (let qi = 0; qi < queue.length; qi++) {
            const u = queue[qi];
            for (const v of adj[u]) {
                if (dist[v] !== -1) continue;
                dist[v] = dist[u] + 1;
                if (dist[v] > maxD) {
                    maxD = dist[v];
                    far = v;
                }
                queue.push(v);
            }
        }
        return [far, maxD];
    };
    const [b] = bfsFarthest(0);
    const [, diameter] = bfsFarthest(b);
    return diameter;
};
// @lc code=end

// TEST:
console.log(treeDiameter([[0,1],[0,2]])); // 2
console.log(treeDiameter([[0,1],[1,2],[2,3],[1,4],[4,5]])); // 4
console.log(treeDiameter([])); // 0 (single node)
console.log(treeDiameter([[0,1]])); // 1
