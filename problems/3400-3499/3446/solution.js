/*
 * @lc app=leetcode id=3446 lang=javascript
 *
 * [3446] Sort Matrix by Diagonals
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
    const n = grid.length;
    const diagonals = new Map();

    // Collect diagonals by key (i - j)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const key = i - j;
            if (!diagonals.has(key)) diagonals.set(key, []);
            diagonals.get(key).push(grid[i][j]);
        }
    }

    // Sort each diagonal
    for (const [key, vals] of diagonals) {
        if (key >= 0) {
            vals.sort((a, b) => b - a); // non-increasing (bottom-left + middle)
        } else {
            vals.sort((a, b) => a - b); // non-decreasing (top-right)
        }
    }

    // Put back
    const result = Array.from({ length: n }, () => new Array(n).fill(0));
    for (const [key, vals] of diagonals) {
        let idx = 0;
        for (let i = 0; i < n; i++) {
            const j = i - key;
            if (j >= 0 && j < n) {
                result[i][j] = vals[idx++];
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sortMatrix([[1,7,3],[9,8,2],[4,5,6]]))); // [[8,2,3],[9,6,7],[4,5,1]]
console.log(JSON.stringify(sortMatrix([[0,1],[1,2]]))); // [[2,1],[1,0]]
console.log(JSON.stringify(sortMatrix([[1]]))); // [[1]]
