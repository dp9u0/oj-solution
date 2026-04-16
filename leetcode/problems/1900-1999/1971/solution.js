/*
 * @lc app=leetcode id=1971 lang=javascript
 *
 * [1971] Find if Path Exists in Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = new Array(n).fill(0);

    const find = (x) => {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    };

    const union = (a, b) => {
        const pa = find(a), pb = find(b);
        if (pa === pb) return;
        if (rank[pa] < rank[pb]) parent[pa] = pb;
        else if (rank[pa] > rank[pb]) parent[pb] = pa;
        else { parent[pb] = pa; rank[pa]++; }
    };

    for (const [u, v] of edges) union(u, v);
    return find(source) === find(destination);
};
// @lc code=end

// TEST:
console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2)); // true
console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5)); // false
console.log(validPath(1, [], 0, 0)); // true
console.log(validPath(2, [[0,1]], 0, 1)); // true
console.log(validPath(2, [], 0, 1)); // false
