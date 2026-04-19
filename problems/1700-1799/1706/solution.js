/*
 * @lc app=leetcode id=1706 lang=javascript
 *
 * [1706] Where Will the Ball Fall
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const m = grid.length, n = grid[0].length;
    const result = [];

    for (let col = 0; col < n; col++) {
        let c = col;
        for (let r = 0; r < m; r++) {
            const nextCol = c + grid[r][c];
            if (nextCol < 0 || nextCol >= n || grid[r][c] !== grid[r][nextCol]) {
                c = -1;
                break;
            }
            c = nextCol;
        }
        result.push(c);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]])); // [1,-1,-1,-1,-1]
console.log(findBall([[-1]])); // [-1]
console.log(findBall([[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]])); // [0,1,2,3,4,-1]
