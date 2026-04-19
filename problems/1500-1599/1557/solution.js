/*
 * @lc app=leetcode id=1557 lang=javascript
 *
 * [1557] Minimum Number of Vertices to Reach All Nodes
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const hasIncoming = new Set();
    for (const [, to] of edges) {
        hasIncoming.add(to);
    }
    const result = [];
    for (let i = 0; i < n; i++) {
        if (!hasIncoming.has(i)) result.push(i);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]])); // [0,3]
console.log(findSmallestSetOfVertices(5, [[0,1],[2,1],[3,1],[1,4],[2,4]])); // [0,2,3]
