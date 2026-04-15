/*
 * @lc app=leetcode id=1377 lang=javascript
 *
 * [1377] Frog Position After T Seconds
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
    // Build adjacency list
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    const visited = new Array(n + 1).fill(false);
    const prob = new Array(n + 1).fill(0);
    prob[1] = 1;
    visited[1] = true;

    let queue = [1];
    let step = 0;

    while (queue.length && step <= t) {
        const next = [];
        for (const node of queue) {
            const unvisited = adj[node].filter(neighbor => !visited[neighbor]);
            if (unvisited.length === 0) continue;
            const p = prob[node] / unvisited.length;
            for (const neighbor of unvisited) {
                visited[neighbor] = true;
                prob[neighbor] = p;
                prob[node] = 0; // frog leaves
                next.push(neighbor);
            }
        }
        queue = next;
        step++;
        if (step === t) return prob[target];
    }

    return prob[target];
};
// @lc code=end

// TEST:
console.log(frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], 2, 4)); // 0.16666666666666666
console.log(frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], 1, 7)); // 0.3333333333333333
console.log(frogPosition(3, [[2,1],[3,2]], 1, 2));                          // 1.0
