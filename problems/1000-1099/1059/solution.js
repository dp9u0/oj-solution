/*
 * @lc app=leetcode.cn id=1059 lang=javascript
 *
 * [1059] 从起点到终点的所有路径
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function(n, edges, source, destination) {
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) adj[a].push(b);

    const color = new Array(n).fill(0); // 0 unvisited, 1 on stack, 2 verified-good

    function dfs(u) {
        if (adj[u].length === 0) return u === destination; // dead end must be destination
        if (color[u] === 1) return false; // cycle reached
        if (color[u] === 2) return true;
        color[u] = 1;
        for (const v of adj[u]) {
            if (!dfs(v)) return false; // some path through v fails
        }
        color[u] = 2;
        return true;
    }

    return dfs(source);
};
// @lc code=end

// TEST:
console.log(leadsToDestination(3, [[0,1],[0,2]], 0, 2)); // false (1 is a dead end)
console.log(leadsToDestination(4, [[0,1],[0,3],[1,2],[2,1]], 0, 3)); // false (1<->2 cycle)
console.log(leadsToDestination(4, [[0,1],[0,2],[1,3],[2,3]], 0, 3)); // true
console.log(leadsToDestination(1, [], 0, 0)); // true (trivial path)
console.log(leadsToDestination(1, [[0,0]], 0, 0)); // false (self-loop at destination)
console.log(leadsToDestination(5, [[0,1],[1,2],[2,3],[3,4]], 0, 3)); // false (4 dead end past dest)
console.log(leadsToDestination(2, [[0,1],[1,0]], 0, 1)); // false (2-cycle)
console.log(leadsToDestination(3, [[0,1],[0,2],[1,2]], 0, 2)); // true (converging paths)
