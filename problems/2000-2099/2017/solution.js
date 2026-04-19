/*
 * @lc app=leetcode id=2017 lang=javascript
 *
 * [2017] Grid Game
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    const n = grid[0].length;

    // Prefix sum for bottom row (row 1)
    const bottomPrefix = new Array(n).fill(0);
    bottomPrefix[0] = grid[1][0];
    for (let i = 1; i < n; i++) {
        bottomPrefix[i] = bottomPrefix[i - 1] + grid[1][i];
    }

    // Suffix sum for top row (row 0)
    const topSuffix = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        topSuffix[i] = topSuffix[i + 1] + grid[0][i];
    }

    let result = Infinity;
    for (let k = 0; k < n; k++) {
        const topRight = topSuffix[k + 1];
        const bottomLeft = k > 0 ? bottomPrefix[k - 1] : 0;
        result = Math.min(result, Math.max(topRight, bottomLeft));
    }

    return result;
};
// @lc code=end

// TEST:
console.log(gridGame([[2,5,4],[1,5,1]])); // 4
console.log(gridGame([[3,3,1],[8,5,2]])); // 4
console.log(gridGame([[1,3,1,15],[1,3,3,1]])); // 7
