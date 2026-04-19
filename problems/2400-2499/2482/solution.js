/*
 * @lc app=leetcode id=2482 lang=javascript
 *
 * [2482] Difference Between Ones and Zeros in Row and Column
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const m = grid.length, n = grid[0].length;
    const rowOnes = new Array(m).fill(0);
    const colOnes = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                rowOnes[i]++;
                colOnes[j]++;
            }
        }
    }

    const diff = [];
    for (let i = 0; i < m; i++) {
        const row = new Array(n);
        for (let j = 0; j < n; j++) {
            row[j] = 2 * rowOnes[i] + 2 * colOnes[j] - n - m;
        }
        diff.push(row);
    }
    return diff;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(onesMinusZeros([[0,1,1],[1,0,1],[0,0,1]]))); // [[0,0,4],[0,0,4],[-2,-2,2]]
console.log(JSON.stringify(onesMinusZeros([[1,1,1],[1,1,1]])));           // [[5,5,5],[5,5,5]]
