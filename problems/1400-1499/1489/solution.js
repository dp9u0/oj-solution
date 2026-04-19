/*
 * @lc app=leetcode id=1489 lang=javascript
 *
 * [1489] Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
    const m = edges.length;
    // Add original index to each edge
    const sorted = edges.map((e, i) => [...e, i]);
    sorted.sort((a, b) => a[2] - b[2]);

    const kruskal = (exclude, force) => {
        const parent = Array.from({ length: n }, (_, i) => i);
        const find = (x) => {
            while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }
            return x;
        };
        const union = (a, b) => {
            const ra = find(a), rb = find(b);
            if (ra === rb) return false;
            parent[ra] = rb;
            return true;
        };

        let weight = 0, count = 0;

        if (force >= 0) {
            const [u, v, w] = edges[force];
            union(u, v);
            weight += w;
            count++;
        }

        for (const [u, v, w, idx] of sorted) {
            if (idx === exclude) continue;
            if (union(u, v)) {
                weight += w;
                count++;
            }
        }

        return count === n - 1 ? weight : Infinity;
    };

    const mstWeight = kruskal(-1, -1);
    const critical = [];
    const pseudoCritical = [];

    for (let i = 0; i < m; i++) {
        const without = kruskal(i, -1);
        if (without > mstWeight) {
            critical.push(i);
        } else {
            const withForce = kruskal(-1, i);
            if (withForce === mstWeight) {
                pseudoCritical.push(i);
            }
        }
    }

    return [critical, pseudoCritical];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findCriticalAndPseudoCriticalEdges(5, [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]])));
// [[0,1],[2,3,4,5]]
console.log(JSON.stringify(findCriticalAndPseudoCriticalEdges(4, [[0,1,1],[1,2,1],[2,3,1],[0,3,1]])));
// [[],[0,1,2,3]]
