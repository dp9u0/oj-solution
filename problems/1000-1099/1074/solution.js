/*
 * @lc app=leetcode id=1074 lang=javascript
 *
 * [1074] Number of Submatrices That Sum to Target
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let result = 0;

    for (let top = 0; top < m; top++) {
        const colSum = new Array(n).fill(0);
        for (let bottom = top; bottom < m; bottom++) {
            for (let j = 0; j < n; j++) {
                colSum[j] += matrix[bottom][j];
            }

            const map = new Map();
            map.set(0, 1);
            let prefixSum = 0;
            for (let j = 0; j < n; j++) {
                prefixSum += colSum[j];
                const need = prefixSum - target;
                if (map.has(need)) {
                    result += map.get(need);
                }
                map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(numSubmatrixSumTarget([[0,1,0],[1,1,1],[0,1,0]], 0)); // 4
console.log(numSubmatrixSumTarget([[1,-1],[-1,1]], 0)); // 5
console.log(numSubmatrixSumTarget([[904]], 0)); // 0
