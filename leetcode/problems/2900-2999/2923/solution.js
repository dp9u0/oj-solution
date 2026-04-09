/*
 * @lc app=leetcode id=2923 lang=javascript
 *
 * [2923] Find Champion I
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    const n = grid.length;
    for (let i = 0; i < n; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            cnt += grid[i][j];
        }
        if (cnt === n - 1) return i;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(findChampion([[0,1],[0,0]])); // 0
console.log(findChampion([[0,0,1],[1,0,1],[0,0,0]])); // 1
console.log(findChampion([[0,0,0],[1,0,1],[1,0,0]])); // 1
