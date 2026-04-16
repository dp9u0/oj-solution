/*
 * @lc app=leetcode id=2428 lang=javascript
 *
 * [2428] Maximum Sum of an Hourglass
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(grid) {
    const m = grid.length, n = grid[0].length;
    let ans = 0;
    for (let i = 0; i + 2 < m; i++) {
        for (let j = 0; j + 2 < n; j++) {
            const sum = grid[i][j] + grid[i][j + 1] + grid[i][j + 2]
                      + grid[i + 1][j + 1]
                      + grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
            ans = Math.max(ans, sum);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxSum([[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]])); // 30
console.log(maxSum([[1,2,3],[4,5,6],[7,8,9]])); // 35
console.log(maxSum([[0,0,0],[0,0,0],[0,0,0]])); // 0
console.log(maxSum([[1,1,1],[1,1,1],[1,1,1]])); // 7
console.log(maxSum([[10,20,30,40],[50,60,70,80],[90,100,110,120]])); // 10+20+30+60+90+100+110=420
