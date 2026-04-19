/*
 * @lc app=leetcode id=847 lang=javascript
 *
 * [847] Shortest Path Visiting All Nodes
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    const n = graph.length;
    const full = (1 << n) - 1;
    const visited = Array.from({ length: n }, () => new Array(1 << n).fill(false));
    const queue = [];

    for (let i = 0; i < n; i++) {
        queue.push([i, 1 << i]);
        visited[i][1 << i] = true;
    }

    let steps = 0;
    while (queue.length > 0) {
        const size = queue.length;
        for (let s = 0; s < size; s++) {
            const [u, mask] = queue.shift();
            if (mask === full) return steps;
            for (const v of graph[u]) {
                const newMask = mask | (1 << v);
                if (!visited[v][newMask]) {
                    visited[v][newMask] = true;
                    queue.push([v, newMask]);
                }
            }
        }
        steps++;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(shortestPathLength([[1,2,3],[0],[0],[0]])); // 4
console.log(shortestPathLength([[1],[0,2,4],[1,3,4],[2],[1,2]])); // 4
console.log(shortestPathLength([[1],[0,2],[1]])); // 2
console.log(shortestPathLength([[1],[0]])); // 1
console.log(shortestPathLength([[]])); // 0
