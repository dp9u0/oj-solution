/*
 * @lc app=leetcode id=1466 lang=javascript
 *
 * [1466] Reorder Routes to Make All Paths Lead to the City Zero
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of connections) {
        adj[a].push([b, 1]);
        adj[b].push([a, 0]);
    }
    let count = 0;
    const visited = new Set([0]);
    const queue = [0];
    while (queue.length > 0) {
        const node = queue.shift();
        for (const [neighbor, needReverse] of adj[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                count += needReverse;
                queue.push(neighbor);
            }
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(minReorder(6, [[0,1],[1,3],[2,3],[4,0],[4,5]])); // 3
console.log(minReorder(5, [[1,0],[1,2],[3,2],[3,4]])); // 2
console.log(minReorder(3, [[1,0],[2,0]])); // 0
