/*
 * @lc app=leetcode id=1828 lang=javascript
 *
 * [1828] Queries on Number of Points Inside a Circle
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    return queries.map(([cx, cy, r]) => {
        return points.filter(([px, py]) => (px - cx) ** 2 + (py - cy) ** 2 <= r * r).length;
    });
};
// @lc code=end

// TEST:
console.log(countPoints([[1,3],[3,3],[5,3],[2,2]], [[2,3,1],[4,3,1],[1,1,2]]));
console.log(countPoints([[1,1],[2,2],[3,3],[4,4],[5,5]], [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]));
