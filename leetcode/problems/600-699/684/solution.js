/*
 * @lc app=leetcode id=684 lang=javascript
 *
 * [684] Redundant Connection
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const n = edges.length;
    const parent = Array.from({ length: n + 1 }, (_, i) => i);
    const rank = new Array(n + 1).fill(0);

    const find = (x) => {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    };

    const union = (a, b) => {
        const pa = find(a), pb = find(b);
        if (pa === pb) return false;
        if (rank[pa] < rank[pb]) parent[pa] = pb;
        else if (rank[pa] > rank[pb]) parent[pb] = pa;
        else { parent[pb] = pa; rank[pa]++; }
        return true;
    };

    for (const [a, b] of edges) {
        if (!union(a, b)) return [a, b];
    }

    return [];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findRedundantConnection([[1,2],[1,3],[2,3]])));
console.log(JSON.stringify(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]])));
console.log(JSON.stringify(findRedundantConnection([[1,2],[2,3],[3,4],[4,1],[1,5]])));
