/*
 * @lc app=leetcode id=1129 lang=javascript
 *
 * [1129] Shortest Path with Alternating Colors
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    // Build adjacency list: [node][color] = list of neighbors
    // color: 0 = red, 1 = blue
    const adj = Array.from({ length: n }, () => [[], []]);
    for (const [u, v] of redEdges) adj[u][0].push(v);
    for (const [u, v] of blueEdges) adj[u][1].push(v);

    const answer = new Array(n).fill(-1);
    answer[0] = 0;

    // BFS: state = [node, lastEdgeColor]
    // Start from both colors at node 0
    const visited = Array.from({ length: n }, () => [false, false]);
    const queue = [[0, 0], [0, 1]]; // [node, lastColor]
    visited[0][0] = true;
    visited[0][1] = true;
    let dist = 0;

    while (queue.length > 0) {
        dist++;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [node, lastColor] = queue.shift();
            const nextColor = 1 - lastColor;
            for (const next of adj[node][nextColor]) {
                if (!visited[next][nextColor]) {
                    visited[next][nextColor] = true;
                    if (answer[next] === -1) answer[next] = dist;
                    queue.push([next, nextColor]);
                }
            }
        }
    }

    return answer;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(shortestAlternatingPaths(3, [[0,1],[1,2]], []))); // [0,1,-1]
console.log(JSON.stringify(shortestAlternatingPaths(3, [[0,1]], [[2,1]]))); // [0,1,-1]
console.log(JSON.stringify(shortestAlternatingPaths(3, [[0,1],[1,2]], [[2,1]]))); // [0,1,2]
console.log(JSON.stringify(shortestAlternatingPaths(5, [[0,1],[1,2],[2,3],[3,4]], [[1,2],[2,3],[3,1]]))); // [0,1,2,3,4] expected... let me check
console.log(JSON.stringify(shortestAlternatingPaths(3, [[0,1],[0,2]], [[1,0]]))); // [0,1,1]
