/*
 * @lc app=leetcode id=1252 lang=javascript
 *
 * [1252] Cells with Odd Values in a Matrix
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const rowCnt = new Array(m).fill(0);
    const colCnt = new Array(n).fill(0);

    for (const [r, c] of indices) {
        rowCnt[r]++;
        colCnt[c]++;
    }

    const rOdd = rowCnt.filter(v => v % 2 === 1).length;
    const cOdd = colCnt.filter(v => v % 2 === 1).length;

    return rOdd * (n - cOdd) + (m - rOdd) * cOdd;
};
// @lc code=end

// TEST:
console.log(oddCells(2, 3, [[0,1],[1,1]]));   // 6
console.log(oddCells(2, 2, [[1,1],[0,0]]));   // 0
