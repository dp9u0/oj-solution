/*
 * @lc app=leetcode id=1292 lang=javascript
 *
 * [1292] Maximum Side Length of a Square with Sum Less than or Equal to Threshold
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    const m = mat.length;
    const n = mat[0].length;

    const prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            prefix[i + 1][j + 1] = mat[i][j] + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j];
        }
    }

    function squareSum(r, c, k) {
        return prefix[r + k][c + k] - prefix[r][c + k] - prefix[r + k][c] + prefix[r][c];
    }

    let result = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const maxK = Math.min(m - i, n - j);
            if (result < maxK && squareSum(i, j, result + 1) <= threshold) {
                let lo = result + 1, hi = maxK;
                while (lo <= hi) {
                    const mid = Math.floor((lo + hi) / 2);
                    if (squareSum(i, j, mid) <= threshold) {
                        lo = mid + 1;
                    } else {
                        hi = mid - 1;
                    }
                }
                result = Math.max(result, hi);
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maxSideLength([[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], 4)); // 2
console.log(maxSideLength([[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], 1)); // 0
console.log(maxSideLength([[1,1,1],[1,1,1],[1,1,1]], 9)); // 3
