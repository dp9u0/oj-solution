/*
 * @lc app=leetcode id=2267 lang=javascript
 *
 * [2267]  Check if There Is a Valid Parentheses String Path
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length, n = grid[0].length;
    const len = m + n - 1;
    if (len % 2 !== 0) return false;
    if (grid[0][0] === ')') return false;

    const maxB = len >> 1;

    const makeRow = () => Array.from({ length: n }, () => new Uint8Array(maxB + 1));
    let prev = makeRow();

    // (0,0): '(' → balance = 1
    prev[0][1] = 1;

    // First row (only from left)
    for (let j = 1; j < n; j++) {
        const d = grid[0][j] === '(' ? 1 : -1;
        for (let b = 0; b <= maxB; b++) {
            if (prev[j - 1][b]) {
                const nb = b + d;
                if (nb >= 0 && nb <= maxB) prev[j][nb] = 1;
            }
        }
    }

    for (let i = 1; i < m; i++) {
        const curr = makeRow();

        // First column (only from above)
        const d0 = grid[i][0] === '(' ? 1 : -1;
        for (let b = 0; b <= maxB; b++) {
            if (prev[0][b]) {
                const nb = b + d0;
                if (nb >= 0 && nb <= maxB) curr[0][nb] = 1;
            }
        }

        // Other columns (from above and left)
        for (let j = 1; j < n; j++) {
            const d = grid[i][j] === '(' ? 1 : -1;
            for (let b = 0; b <= maxB; b++) {
                if (prev[j][b] || curr[j - 1][b]) {
                    const nb = b + d;
                    if (nb >= 0 && nb <= maxB) curr[j][nb] = 1;
                }
            }
        }

        prev = curr;
    }

    return prev[n - 1][0] === 1;
};
// @lc code=end

// TEST:
console.log(hasValidPath([["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]));  // true
console.log(hasValidPath([[")",")"],["(","("]]));                                        // false
console.log(hasValidPath([["(",")","("],[")","(",")"]]));                              // true
console.log(hasValidPath([["("]]));                                                       // false (odd)
console.log(hasValidPath([["(",")"],[")",")"]]));                                        // false
console.log(hasValidPath([["(","("],["(",")"]]));                                        // false (odd)
console.log(hasValidPath([["(","(","("],[")",")",")"]]));                              // true
