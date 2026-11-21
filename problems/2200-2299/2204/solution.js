/*
 * @lc app=leetcode.cn id=2204 lang=javascript
 *
 * [2204] 无向图中到环的距离
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var distanceToCycle = function(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    const deg = new Int32Array(n);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
        deg[a]++;
        deg[b]++;
    }
    const removed = new Uint8Array(n);
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (deg[i] === 1) queue.push(i);
    }
    for (let qi = 0; qi < queue.length; qi++) {
        const u = queue[qi];
        removed[u] = 1;
        for (const v of adj[u]) {
            if (!removed[v] && --deg[v] === 1) queue.push(v);
        }
    }
    const dist = new Int32Array(n).fill(-1);
    let frontier = [];
    for (let i = 0; i < n; i++) {
        if (!removed[i]) {
            dist[i] = 0;
            frontier.push(i);
        }
    }
    let d = 0;
    while (frontier.length) {
        d++;
        const next = [];
        for (const u of frontier) {
            for (const v of adj[u]) {
                if (dist[v] === -1) {
                    dist[v] = d;
                    next.push(v);
                }
            }
        }
        frontier = next;
    }
    return [...dist];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(distanceToCycle(7, [[1,2],[2,4],[4,3],[3,1],[0,1],[5,2],[6,5]]))); // [1,0,0,0,0,1,2]
console.log(JSON.stringify(distanceToCycle(9, [[0,1],[1,2],[0,2],[2,6],[6,7],[6,8],[0,3],[3,4],[3,5]]))); // [0,0,0,1,2,2,1,2,2]
console.log(JSON.stringify(distanceToCycle(4, [[0,1],[1,2],[2,3],[3,0]]))); // [0,0,0,0]
console.log(JSON.stringify(distanceToCycle(3, [[0,1],[1,2],[2,0]]))); // [0,0,0]
console.log(JSON.stringify(distanceToCycle(5, [[0,1],[1,2],[2,0],[2,3],[3,4]]))); // [0,0,0,1,2]
