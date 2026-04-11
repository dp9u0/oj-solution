/*
 * @lc app=leetcode id=2352 lang=javascript
 *
 * [2352] Equal Row and Column Pairs
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length;
    const rowCount = new Map();
    for (let i = 0; i < n; i++) {
        const key = grid[i].join(',');
        rowCount.set(key, (rowCount.get(key) || 0) + 1);
    }
    let count = 0;
    for (let j = 0; j < n; j++) {
        const col = [];
        for (let i = 0; i < n; i++) {
            col.push(grid[i][j]);
        }
        const key = col.join(',');
        if (rowCount.has(key)) count += rowCount.get(key);
    }
    return count;
};
// @lc code=end

// TEST:
console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]])); // 1
console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])); // 3
