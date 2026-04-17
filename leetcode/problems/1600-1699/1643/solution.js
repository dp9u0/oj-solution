/*
 * @lc app=leetcode id=1643 lang=javascript
 *
 * [1643] Kth Smallest Instructions
 */

// @lc code=start
/**
 * @param {number[]} destination
 * @param {number} k
 * @return {string}
 */
var kthSmallestPath = function(destination, k) {
    const row = destination[0], col = destination[1];
    const total = row + col;

    // Precompute combinations C(n, r)
    const C = Array.from({ length: total + 1 }, () => new Array(total + 1).fill(0n));
    for (let i = 0; i <= total; i++) {
        C[i][0] = 1n;
        C[i][i] = 1n;
        for (let j = 1; j < i; j++) {
            C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
        }
    }

    let result = '';
    let h = col, v = row;
    let kk = BigInt(k);

    for (let i = 0; i < total; i++) {
        // If we place H here, remaining: h-1 H's and v V's
        // Number of strings starting with H = C(h-1+v, v)
        if (h > 0) {
            const cnt = C[h - 1 + v][v];
            if (kk <= cnt) {
                result += 'H';
                h--;
            } else {
                result += 'V';
                kk -= cnt;
                v--;
            }
        } else {
            result += 'V';
            v--;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(kthSmallestPath([2,3], 1)); // "HHHVV"
console.log(kthSmallestPath([2,3], 2)); // "HHVHV"
console.log(kthSmallestPath([2,3], 3)); // "HHVVH"
console.log(kthSmallestPath([2,3], 10)); // "VVHHH"
console.log(kthSmallestPath([1,1], 1)); // "HV"
console.log(kthSmallestPath([1,1], 2)); // "VH"
