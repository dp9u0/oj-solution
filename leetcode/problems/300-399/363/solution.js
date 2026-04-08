/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    let m = matrix.length;
    let n = matrix[0].length;
    let res = -Infinity;

    // To optimize, if rows > cols, we should fix cols as the boundaries.
    // If cols > rows, we fix rows as the boundaries.
    if (m > n) {
        for (let l = 0; l < n; l++) {
            let rowSum = new Array(m).fill(0);
            for (let r = l; r < n; r++) {
                for (let i = 0; i < m; i++) {
                    rowSum[i] += matrix[i][r];
                }
                res = Math.max(res, getMaxSumNoLargerThanK(rowSum, k));
                if (res === k) return k; // optimization
            }
        }
    } else {
        for (let t = 0; t < m; t++) {
            let colSum = new Array(n).fill(0);
            for (let b = t; b < m; b++) {
                for (let j = 0; j < n; j++) {
                    colSum[j] += matrix[b][j];
                }
                res = Math.max(res, getMaxSumNoLargerThanK(colSum, k));
                if (res === k) return k; // optimization
            }
        }
    }
    return res;
};

function getMaxSumNoLargerThanK(arr, k) {
    let max = -Infinity;
    let curSum = 0;
    let sums = [0]; // Include empty prefix sum

    for (let i = 0; i < arr.length; i++) {
        curSum += arr[i];
        
        // Find the smallest prefix sum that is >= curSum - k
        // We can use binary search since `sums` is sorted
        let target = curSum - k;
        let left = 0, right = sums.length - 1;
        let pos = sums.length; // Default if not found
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (sums[mid] >= target) {
                pos = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        if (pos < sums.length) {
            max = Math.max(max, curSum - sums[pos]);
        }

        // Insert curSum into sums to keep it sorted
        // Binary search for insertion position
        left = 0;
        right = sums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (sums[mid] >= curSum) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        sums.splice(left, 0, curSum);
    }
    return max;
}

module.exports = maxSumSubmatrix;

// TEST:
console.log(maxSumSubmatrix([[1,0,1],[0,-2,3]], 2)); // 2
console.log(maxSumSubmatrix([[2,2,-1]], 3)); // 3
