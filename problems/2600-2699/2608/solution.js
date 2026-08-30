/*
 * @lc app=leetcode id=2608 lang=javascript
 *
 * [2608] Shortest Cycle in a Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findShortestCycle = function(n, edges) {
    let adj = Array.from({ length: n }, () => []);
    for (let [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // For each source s, BFS layer by layer; a non-tree edge (x, y) closing
    // a cycle yields candidate dist[x] + dist[y] + 1.
    let ans = Infinity;
    for (let s = 0; s < n; s++) {
        let dist = new Array(n).fill(-1);
        let parent = new Array(n).fill(-1);
        dist[s] = 0;
        let queue = [s];
        for (let head = 0; head < queue.length; head++) {
            let x = queue[head];
            for (let y of adj[x]) {
                if (dist[y] === -1) {
                    dist[y] = dist[x] + 1;
                    parent[y] = x;
                    queue.push(y);
                } else if (parent[x] !== y) {
                    ans = Math.min(ans, dist[x] + dist[y] + 1);
                }
            }
        }
    }
    return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(findShortestCycle(7, [[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,3]]) === 3); // two triangles
console.log(findShortestCycle(4, [[0,1],[0,2]]) === -1); // no cycle
console.log(findShortestCycle(5, [[0,1],[1,2],[2,3],[3,4],[4,0]]) === 5); // 5-cycle itself
console.log(findShortestCycle(4, [[0,1],[1,2],[2,3],[3,0],[0,2]]) === 3); // triangle beats square
console.log(findShortestCycle(6, [[0,1],[1,2],[2,0],[3,4],[4,5]]) === 3); // cycle plus dangling path
console.log(findShortestCycle(2, [[0,1]]) === -1); // single edge, no cycle
console.log(findShortestCycle(6, [[0,1],[1,2],[2,3],[3,0],[4,5],[5,0]]) === 4); // square beats shared-vertex path
