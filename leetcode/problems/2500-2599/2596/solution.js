/*
 * @lc app=leetcode id=2596 lang=javascript
 *
 * [2596] Check Knight Tour Configuration
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function(grid) {
    const n = grid.length;
    const pos = new Array(n * n);
    for (let r = 0; r < n; r++)
        for (let c = 0; c < n; c++)
            pos[grid[r][c]] = [r, c];

    if (pos[0][0] !== 0 || pos[0][1] !== 0) return false;

    for (let i = 1; i < n * n; i++) {
        const dr = Math.abs(pos[i][0] - pos[i - 1][0]);
        const dc = Math.abs(pos[i][1] - pos[i - 1][1]);
        if (!((dr === 1 && dc === 2) || (dr === 2 && dc === 1))) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(checkValidGrid([[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]])); // true
console.log(checkValidGrid([[0,3,6],[5,8,1],[2,7,4]])); // false
console.log(checkValidGrid([[0]])); // true
console.log(checkValidGrid([[1,0],[2,3]])); // false (start not at 0,0)
console.log(checkValidGrid([[0,2],[1,3]])); // false (not valid knight move)
