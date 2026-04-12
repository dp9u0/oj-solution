/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let arrowPos = points[0][1];

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > arrowPos) {
            arrows++;
            arrowPos = points[i][1];
        }
    }

    return arrows;
};
// @lc code=end

// TEST:
console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]));
// Expected: 2

console.log(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]));
// Expected: 4

console.log(findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]]));
// Expected: 2
