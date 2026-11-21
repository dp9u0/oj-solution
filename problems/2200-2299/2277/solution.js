/*
 * @lc app=leetcode.cn id=2277 lang=javascript
 *
 * [2277] 树中最接近路径的节点
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var closestNode = function(n, edges, query) {
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }
    const bfsDist = (src) => {
        const dist = new Int32Array(n).fill(-1);
        dist[src] = 0;
        const q = [src];
        for (let qi = 0; qi < q.length; qi++) {
            const u = q[qi];
            for (const v of adj[u]) {
                if (dist[v] === -1) {
                    dist[v] = dist[u] + 1;
                    q.push(v);
                }
            }
        }
        return dist;
    };
    const bfsParents = (src) => {
        const par = new Int32Array(n).fill(-2);
        par[src] = -1;
        const q = [src];
        for (let qi = 0; qi < q.length; qi++) {
            const u = q[qi];
            for (const v of adj[u]) {
                if (par[v] === -2) {
                    par[v] = u;
                    q.push(v);
                }
            }
        }
        return par;
    };
    return query.map(([start, end, node]) => {
        const dist = bfsDist(node);
        const par = bfsParents(start);
        let best = -1, bestDist = Infinity;
        let cur = end;
        while (cur !== -1) {
            if (dist[cur] < bestDist) {
                bestDist = dist[cur];
                best = cur;
            }
            cur = par[cur];
        }
        return best;
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(closestNode(7, [[0,1],[0,2],[0,3],[1,4],[2,5],[2,6]], [[5,3,4],[5,3,6]]))); // [0,2]
console.log(JSON.stringify(closestNode(3, [[0,1],[1,2]], [[0,1,2]]))); // [1]
console.log(JSON.stringify(closestNode(3, [[0,1],[1,2]], [[0,0,0]]))); // [0]
console.log(JSON.stringify(closestNode(4, [[0,1],[1,2],[2,3]], [[3,0,1]]))); // [1] (path 3-2-1-0; node 1 dist 0)
console.log(JSON.stringify(closestNode(2, [[0,1]], [[1,1,0]]))); // [1]
