/*
 * @lc app=leetcode id=3111 lang=javascript
 *
 * [3111] Minimum Rectangles to Cover Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} w
 * @return {number}
 */
var minRectanglesToCoverPoints = function(points, w) {
    let xs = [...new Set(points.map(p => p[0]))].sort((a, b) => a - b);
    let count = 0, i = 0;
    while (i < xs.length) {
      let start = xs[i];
      count++;
      while (i < xs.length && xs[i] <= start + w) i++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(minRectanglesToCoverPoints([[2,1],[1,0],[1,4],[1,8],[3,5],[4,6]], 1));
console.log(minRectanglesToCoverPoints([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]], 2));
console.log(minRectanglesToCoverPoints([[2,3],[1,2]], 0));
