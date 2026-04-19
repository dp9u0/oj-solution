/*
 * @lc app=leetcode id=1610 lang=javascript
 *
 * [1610] Maximum Number of Visible Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function(points, angle, location) {
    const [px, py] = location;
    const angles = [];
    let base = 0;

    for (const [x, y] of points) {
        if (x === px && y === py) {
            base++;
        } else {
            angles.push(Math.atan2(y - py, x - px) * 180 / Math.PI);
        }
    }

    angles.sort((a, b) => a - b);
    const n = angles.length;

    for (let i = 0; i < n; i++) {
        angles.push(angles[i] + 360);
    }

    let maxCount = 0;
    let j = 0;
    for (let i = 0; i < n; i++) {
        while (j < i + n && angles[j] - angles[i] <= angle + 1e-9) {
            j++;
        }
        maxCount = Math.max(maxCount, j - i);
    }

    return maxCount + base;
};
// @lc code=end

// TEST:
console.log(visiblePoints([[2,1],[2,2],[3,3]], 90, [1,1])); // 3
console.log(visiblePoints([[2,1],[2,2],[3,4],[1,1]], 90, [1,1])); // 4
console.log(visiblePoints([[1,0],[2,1]], 13, [1,1])); // 1
console.log(visiblePoints([[1,1],[1,1],[1,1]], 0, [1,1])); // 3
console.log(visiblePoints([[0,0],[0,2]], 90, [1,1])); // 2
