/*
 * @lc app=leetcode id=1267 lang=javascript
 *
 * [1267] Count Servers that Communicate
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const m = grid.length, n = grid[0].length;
    const rowCnt = new Array(m).fill(0);
    const colCnt = new Array(n).fill(0);
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (grid[i][j]) { rowCnt[i]++; colCnt[j]++; }
    let count = 0;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (grid[i][j] && (rowCnt[i] > 1 || colCnt[j] > 1)) count++;
    return count;
};
// @lc code=end

// TEST:
console.log(countServers([[1,0],[0,1]])); // 0
console.log(countServers([[1,0],[1,1]])); // 3
console.log(countServers([[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]])); // 4
console.log(countServers([[1]])); // 0
console.log(countServers([[1,1],[1,1]])); // 4
