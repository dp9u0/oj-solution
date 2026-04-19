/*
 * @lc app=leetcode id=882 lang=javascript
 *
 * [882] Reachable Nodes In Subdivided Graph
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function(edges, maxMoves, n) {
    // Build adjacency list
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, cnt] of edges) {
        adj[u].push([v, cnt + 1]);
        adj[v].push([u, cnt + 1]);
    }

    // Dijkstra from node 0
    const dist = new Array(n).fill(Infinity);
    dist[0] = 0;
    // Min-heap: [distance, node]
    const heap = [[0, 0]];
    const visited = new Uint8Array(n);

    while (heap.length) {
        // Extract min
        let minIdx = 0;
        for (let i = 1; i < heap.length; i++) {
            if (heap[i][0] < heap[minIdx][0]) minIdx = i;
        }
        const [d, u] = heap[minIdx];
        heap[minIdx] = heap[heap.length - 1];
        heap.pop();

        if (visited[u]) continue;
        visited[u] = 1;

        for (const [v, w] of adj[u]) {
            if (!visited[v] && d + w < dist[v]) {
                dist[v] = d + w;
                heap.push([dist[v], v]);
            }
        }
    }

    // Count reachable original nodes
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (dist[i] <= maxMoves) result++;
    }

    // Count reachable subdivided nodes on each edge
    for (const [u, v, cnt] of edges) {
        const fromU = Math.max(0, maxMoves - dist[u]);
        const fromV = Math.max(0, maxMoves - dist[v]);
        result += Math.min(cnt, fromU + fromV);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(reachableNodes([[0,1,10],[0,2,1],[1,2,2]], 6, 3)); // 13
console.log(reachableNodes([[0,1,4],[1,2,6],[0,2,8],[1,3,1]], 10, 4)); // 23
console.log(reachableNodes([[1,2,4],[1,4,5],[1,3,1],[2,3,4],[3,4,5]], 17, 5)); // 1
console.log(reachableNodes([], 0, 1)); // 1
console.log(reachableNodes([[0,1,0]], 1, 2)); // 2