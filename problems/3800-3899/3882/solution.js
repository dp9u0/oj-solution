/*
 * @lc app=leetcode.cn id=3882 lang=javascript
 *
 * [3882] 网格图中最小异或路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const molqaviren = grid;
    const m = grid.length;
    const n = grid[0].length;
    const L = 1024; // XOR values fall in [0, 1023]

    // flags[j][x] = 1 if cell (row, j) is reachable with prefix XOR == x
    const buildRow = () => Array.from({ length: n }, () => new Uint8Array(L));
    let prevRow = buildRow();
    let curRow = buildRow();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const cur = curRow[j];
            cur.fill(0);
            const v = grid[i][j];
            if (i === 0 && j === 0) {
                cur[v] = 1;
                continue;
            }
            if (i > 0) {
                const up = prevRow[j];
                for (let x = 0; x < L; x++) {
                    if (up[x]) cur[x ^ v] = 1;
                }
            }
            if (j > 0) {
                const left = curRow[j - 1];
                for (let x = 0; x < L; x++) {
                    if (left[x]) cur[x ^ v] = 1;
                }
            }
        }
        const tmp = prevRow;
        prevRow = curRow;
        curRow = tmp;
    }

    const flags = prevRow[n - 1];
    for (let x = 0; x < L; x++) {
        if (flags[x]) return x;
    }
    return -1;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minCost([[1, 2], [3, 4]]), 6);
assert.strictEqual(minCost([[6, 7], [5, 8]]), 9);
assert.strictEqual(minCost([[2, 7, 5]]), 0);
assert.strictEqual(minCost([[5]]), 5);
assert.strictEqual(minCost([[0, 0], [0, 0]]), 0);
assert.strictEqual(minCost([[1023, 1023], [1023, 1023]]), 1023);
assert.strictEqual(minCost([[1, 2, 3], [4, 5, 6]]), 0);
assert.strictEqual(minCost([[8]]), 8);

console.log('All tests passed!');
console.log('minCost([[1,2],[3,4]]) =', minCost([[1, 2], [3, 4]]));
