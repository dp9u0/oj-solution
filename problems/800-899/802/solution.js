/*
 * @lc app=leetcode id=802 lang=javascript
 *
 * [802] Find Eventual Safe States
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const color = new Int8Array(n);
    const result = [];
    function dfs(u) {
        if (color[u] > 0) return color[u] === 2;
        color[u] = 1;
        for (const v of graph[u]) {
            if (!dfs(v)) return false;
        }
        color[u] = 2;
        return true;
    }
    for (let i = 0; i < n; i++) {
        if (dfs(i)) result.push(i);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]));
console.log(eventualSafeNodes([[1,2,3,4],[1,2],[3,4],[0,4],[]]));
console.log(eventualSafeNodes([[],[]]));
