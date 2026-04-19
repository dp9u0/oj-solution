/*
 * @lc app=leetcode id=1791 lang=javascript
 *
 * [1791] Find Center of Star Graph
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [a, b] = edges[0];
    const [c, d] = edges[1];
    return a === c || a === d ? a : b;
};
// @lc code=end

// TEST:
console.log(findCenter([[1,2],[2,3],[4,2]])); // 2
console.log(findCenter([[1,2],[5,1],[1,3],[1,4]])); // 1
console.log(findCenter([[3,1],[3,2],[3,4]])); // 3
console.log(findCenter([[1,2],[2,3]])); // 2
console.log(findCenter([[10,5],[5,6],[5,7]])); // 5
