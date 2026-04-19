/*
 * @lc app=leetcode id=3417 lang=javascript
 *
 * [3417] Zigzag Grid Traversal With Skip
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
    const res = [];
    for (let i = 0; i < grid.length; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < grid[i].length; j++) res.push(grid[i][j]);
        } else {
            for (let j = grid[i].length - 1; j >= 0; j--) res.push(grid[i][j]);
        }
    }
    return res.filter((_, i) => i % 2 === 0);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(zigzagTraversal([[1,2],[3,4]])));             // [1,4]
console.log(JSON.stringify(zigzagTraversal([[2,1],[2,1],[2,1]])));       // [2,1,2]
console.log(JSON.stringify(zigzagTraversal([[1,2,3],[4,5,6],[7,8,9]]))); // [1,3,5,7,9]
console.log(JSON.stringify(zigzagTraversal([[1,2],[3,4],[5,6]])));       // [1,4,5]
console.log(JSON.stringify(zigzagTraversal([[1]])));                      // [1]
