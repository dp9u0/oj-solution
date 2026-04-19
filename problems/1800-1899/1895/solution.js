/*
 * @lc app=leetcode id=1895 lang=javascript
 *
 * [1895] Largest Magic Square
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // 2D prefix sum (1-indexed)
    const ps = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ps[i + 1][j + 1] = grid[i][j] + ps[i][j + 1] + ps[i + 1][j] - ps[i][j];
        }
    }

    const rangeSum = (r1, c1, r2, c2) => {
        return ps[r2 + 1][c2 + 1] - ps[r1][c2 + 1] - ps[r2 + 1][c1] + ps[r1][c1];
    };

    const maxK = Math.min(m, n);

    for (let k = maxK; k >= 2; k--) {
        for (let r = 0; r + k <= m; r++) {
            for (let c = 0; c + k <= n; c++) {
                const diag1 = [];
                const diag2 = [];
                let d1 = 0, d2 = 0;
                for (let i = 0; i < k; i++) {
                    d1 += grid[r + i][c + i];
                    d2 += grid[r + i][c + k - 1 - i];
                }
                if (d1 !== d2) continue;

                let valid = true;
                // Check rows
                for (let i = 0; i < k && valid; i++) {
                    if (rangeSum(r + i, c, r + i, c + k - 1) !== d1) valid = false;
                }
                // Check columns
                for (let j = 0; j < k && valid; j++) {
                    if (rangeSum(r, c + j, r + k - 1, c + j) !== d1) valid = false;
                }

                if (valid) return k;
            }
        }
    }

    return 1;
};
// @lc code=end

// TEST:
console.log(largestMagicSquare([[7,1,4,5,6],[2,5,1,6,4],[1,5,4,3,2],[1,2,7,3,4]])); // 3
console.log(largestMagicSquare([[5,1,3,1],[9,3,3,1],[1,3,3,8]])); // 2
