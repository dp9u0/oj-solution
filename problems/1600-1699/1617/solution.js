/*
 * @lc app=leetcode id=1617 lang=javascript
 *
 * [1617] Count Subtrees With Max Distance Between Cities
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var countSubgraphsForEachDiameter = function(n, edges) {
    // build adjacency list (0-indexed)
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u - 1].push(v - 1);
        adj[v - 1].push(u - 1);
    }

    const ans = new Array(n - 1).fill(0);
    const full = (1 << n) - 1;

    for (let mask = 3; mask <= full; mask++) {
        // get nodes in subset
        const nodes = [];
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) nodes.push(i);
        }
        if (nodes.length < 2) continue;

        // BFS to check connectivity and get distances
        const bfs = (start) => {
            const dist = new Array(n).fill(-1);
            dist[start] = 0;
            const q = [start];
            let farthest = start, maxDist = 0;
            for (let qi = 0; qi < q.length; qi++) {
                const u = q[qi];
                for (const v of adj[u]) {
                    if (!(mask & (1 << v)) || dist[v] !== -1) continue;
                    dist[v] = dist[u] + 1;
                    q.push(v);
                    if (dist[v] > maxDist) { maxDist = dist[v]; farthest = v; }
                }
            }
            return { visited: q.length, farthest, maxDist };
        };

        // first BFS from any node to check connectivity and find one endpoint
        const r1 = bfs(nodes[0]);
        if (r1.visited !== nodes.length) continue; // not connected

        // second BFS from farthest to get diameter
        const r2 = bfs(r1.farthest);
        ans[r2.maxDist - 1]++;
    }

    return ans;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', JSON.stringify(result), JSON.stringify(result) === JSON.stringify(expected) ? 'OK' : 'FAIL expected ' + JSON.stringify(expected));
};
test(countSubgraphsForEachDiameter, [4, [[1,2],[2,3],[2,4]]], [3,4,0]);
test(countSubgraphsForEachDiameter, [2, [[1,2]]], [1]);
test(countSubgraphsForEachDiameter, [3, [[1,2],[2,3]]], [2,1]);
test(countSubgraphsForEachDiameter, [5, [[1,2],[2,3],[3,4],[4,5]]], [4,3,2,1]);
