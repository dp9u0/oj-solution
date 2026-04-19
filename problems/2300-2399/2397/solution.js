/*
 * @lc app=leetcode id=2397 lang=javascript
 *
 * [2397] Maximum Rows Covered by Columns
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} numSelect
 * @return {number}
 */
var maximumRows = function(matrix, numSelect) {
    const m = matrix.length, n = matrix[0].length;
    const rowMasks = matrix.map(row => row.reduce((mask, val, j) => val ? mask | (1 << j) : mask, 0));

    let maxCovered = 0;
    const enumerate = (start, selected, count) => {
        if (count === numSelect) {
            let covered = 0;
            for (const mask of rowMasks) {
                if ((mask & ~selected) === 0) covered++;
            }
            maxCovered = Math.max(maxCovered, covered);
            return;
        }
        for (let j = start; j < n; j++) {
            enumerate(j + 1, selected | (1 << j), count + 1);
        }
    };
    enumerate(0, 0, 0);
    return maxCovered;
};
// @lc code=end

// TEST:
console.log(maximumRows([[0,0,0],[1,0,1],[0,1,1],[0,0,1]], 2));
console.log(maximumRows([[1],[0]], 1));
