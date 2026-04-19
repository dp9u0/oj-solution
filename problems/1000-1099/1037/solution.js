/*
 * @lc app=leetcode id=1037 lang=javascript
 *
 * [1037] Valid Boomerang
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    let [[x1, y1], [x2, y2], [x3, y3]] = points;
    return (x2 - x1) * (y3 - y1) !== (x3 - x1) * (y2 - y1);
};
// @lc code=end

// TEST:
console.log(isBoomerang([[1,1],[2,3],[3,2]]));
console.log(isBoomerang([[1,1],[2,2],[3,3]]));
console.log(isBoomerang([[0,0],[0,2],[2,1]]));
