/*
 * @lc app=leetcode id=1637 lang=javascript
 *
 * [1637] Widest Vertical Area Between Two Points Containing No Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const xs = points.map(p => p[0]).sort((a, b) => a - b);
    let maxGap = 0;
    for (let i = 1; i < xs.length; i++) {
        maxGap = Math.max(maxGap, xs[i] - xs[i - 1]);
    }
    return maxGap;
};
// @lc code=end

// TEST:
console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]]));           // 1
console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]])); // 3
console.log(maxWidthOfVerticalArea([[1,0],[3,0]]));                        // 2
