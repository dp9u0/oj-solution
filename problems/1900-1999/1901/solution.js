/*
 * @lc app=leetcode id=1901 lang=javascript
 *
 * [1901] Find a Peak Element II
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    const m = mat.length, n = mat[0].length;
    let lo = 0, hi = m - 1;

    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        // Find max element in row mid
        let maxCol = 0;
        for (let j = 1; j < n; j++) {
            if (mat[mid][j] > mat[mid][maxCol]) maxCol = j;
        }

        const up = mid > 0 ? mat[mid - 1][maxCol] : -1;
        const down = mid < m - 1 ? mat[mid + 1][maxCol] : -1;
        const cur = mat[mid][maxCol];

        if (cur > up && cur > down) return [mid, maxCol];
        if (up > cur) hi = mid - 1;
        else lo = mid + 1;
    }
    return [-1, -1];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findPeakGrid([[1,4],[3,2]])));           // [0,1] or [1,0]
console.log(JSON.stringify(findPeakGrid([[10,20,15],[21,30,14],[7,16,32]]))); // [1,1] or [2,2]
console.log(JSON.stringify(findPeakGrid([[1]])));                   // [0,0]
console.log(JSON.stringify(findPeakGrid([[1,2,3],[4,5,6],[7,8,9]]))); // [2,2]
console.log(JSON.stringify(findPeakGrid([[9,8,7],[6,5,4],[3,2,1]]))); // [0,0]
