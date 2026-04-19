/*
 * @lc app=leetcode id=2132 lang=javascript
 *
 * [2132] Stamping the Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} stampHeight
 * @param {number} stampWidth
 * @return {boolean}
 */
var possibleToStamp = function(grid, stampHeight, stampWidth) {
    const m = grid.length, n = grid[0].length;

    // 2D prefix sum of grid (occupied cells)
    const prefix = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            prefix[i + 1][j + 1] = grid[i][j] + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j];
        }
    }

    const rectSum = (r1, c1, r2, c2) =>
        prefix[r2 + 1][c2 + 1] - prefix[r1][c2 + 1] - prefix[r2 + 1][c1] + prefix[r1][c1];

    // 2D difference array for stamp coverage
    const diff = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));

    for (let r = 0; r + stampHeight <= m; r++) {
        for (let c = 0; c + stampWidth <= n; c++) {
            if (rectSum(r, c, r + stampHeight - 1, c + stampWidth - 1) === 0) {
                diff[r][c]++;
                diff[r][c + stampWidth]--;
                diff[r + stampHeight][c]--;
                diff[r + stampHeight][c + stampWidth]++;
            }
        }
    }

    // Prefix sum of diff → coverage, check all empty cells covered
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) diff[i][j] += diff[i - 1][j];
            if (j > 0) diff[i][j] += diff[i][j - 1];
            if (i > 0 && j > 0) diff[i][j] -= diff[i - 1][j - 1];
            if (grid[i][j] === 0 && diff[i][j] === 0) return false;
        }
    }

    return true;
};
// @lc code=end

// TEST:
console.log(possibleToStamp([[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]], 4, 3)); // true
console.log(possibleToStamp([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]], 2, 2)); // false
console.log(possibleToStamp([[1]], 1, 1)); // true
console.log(possibleToStamp([[0]], 1, 1)); // true
console.log(possibleToStamp([[0,0],[0,0]], 3, 3)); // false
