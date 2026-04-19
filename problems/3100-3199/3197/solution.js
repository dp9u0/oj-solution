/*
 * @lc app=leetcode id=3197 lang=javascript
 *
 * [3197] Find the Minimum Area to Cover All Ones II
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumSum = function(grid) {
    const m = grid.length, n = grid[0].length;
    const calc = (r1, r2, c1, c2) => {
        let minR = m, maxR = -1, minC = n, maxC = -1;
        for (let r = r1; r <= r2; r++) {
            for (let c = c1; c <= c2; c++) {
                if (grid[r][c]) {
                    minR = Math.min(minR, r); maxR = Math.max(maxR, r);
                    minC = Math.min(minC, c); maxC = Math.max(maxC, c);
                }
            }
        }
        return maxR === -1 ? 1e9 : (maxR - minR + 1) * (maxC - minC + 1);
    };
    let res = Infinity;
    // 2 horizontal cuts
    for (let i = 0; i < m - 2; i++) {
        for (let j = i + 1; j < m - 1; j++) {
            res = Math.min(res, calc(0, i, 0, n - 1) + calc(i + 1, j, 0, n - 1) + calc(j + 1, m - 1, 0, n - 1));
        }
    }
    // 2 vertical cuts
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            res = Math.min(res, calc(0, m - 1, 0, i) + calc(0, m - 1, i + 1, j) + calc(0, m - 1, j + 1, n - 1));
        }
    }
    // horizontal then vertical (top)
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            res = Math.min(res, calc(0, i, 0, j) + calc(0, i, j + 1, n - 1) + calc(i + 1, m - 1, 0, n - 1));
        }
    }
    // horizontal then vertical (bottom)
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            res = Math.min(res, calc(0, i, 0, n - 1) + calc(i + 1, m - 1, 0, j) + calc(i + 1, m - 1, j + 1, n - 1));
        }
    }
    // vertical then horizontal (left)
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < m - 1; j++) {
            res = Math.min(res, calc(0, j, 0, i) + calc(j + 1, m - 1, 0, i) + calc(0, m - 1, i + 1, n - 1));
        }
    }
    // vertical then horizontal (right)
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < m - 1; j++) {
            res = Math.min(res, calc(0, m - 1, 0, i) + calc(0, j, i + 1, n - 1) + calc(j + 1, m - 1, i + 1, n - 1));
        }
    }
    return res;
};
// @lc code=end

// TEST:
console.log(minimumSum([[1,0,1],[1,1,1]])); // 5
console.log(minimumSum([[1,0,1,0],[0,1,0,1]])); // 5
