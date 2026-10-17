/*
 * @lc app=leetcode.cn id=面试题 08.12 lang=javascript
 *
 * [面试题 08.12] 八皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];
    const queens = new Array(n); // queens[row] = col
    const cols = new Set();
    const diag1 = new Set(); // r - c
    const diag2 = new Set(); // r + c
    const dfs = row => {
        if (row === n) {
            res.push(queens.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - 1 - c)));
            return;
        }
        for (let c = 0; c < n; c++) {
            if (cols.has(c) || diag1.has(row - c) || diag2.has(row + c)) continue;
            cols.add(c);
            diag1.add(row - c);
            diag2.add(row + c);
            queens[row] = c;
            dfs(row + 1);
            cols.delete(c);
            diag1.delete(row - c);
            diag2.delete(row + c);
        }
    };
    dfs(0);
    return res;
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(eq(solveNQueens(4), [['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]));
console.log(eq(solveNQueens(1), [['Q']]));
console.log(eq(solveNQueens(2), []));
console.log(eq(solveNQueens(3), []));
console.log(solveNQueens(8).length === 92);
