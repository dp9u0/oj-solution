/*
 * @lc app=leetcode id=2492 lang=javascript
 *
 * [2492] Minimum Score of a Path Between Two Cities
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [a, b, d] of roads) {
        adj[a].push([b, d]);
        adj[b].push([a, d]);
    }
    const visited = new Array(n + 1).fill(false);
    const queue = [1];
    visited[1] = true;
    let result = Infinity;
    while (queue.length > 0) {
        const u = queue.shift();
        for (const [v, d] of adj[u]) {
            result = Math.min(result, d);
            if (!visited[v]) {
                visited[v] = true;
                queue.push(v);
            }
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minScore(4, [[1,2,9],[2,3,6],[2,4,5],[1,4,7]])); // 5
console.log(minScore(4, [[1,2,2],[1,3,4],[3,4,7]])); // 2
