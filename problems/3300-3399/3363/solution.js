/*
 * @lc app=leetcode id=3363 lang=javascript
 *
 * [3363] Find the Maximum Number of Fruits Collected
 */

// @lc code=start
/**
 * @param {number[][]} fruits
 * @return {number}
 */
var maxCollectedFruits = function(fruits) {
    const n = fruits.length;

    // Child 1: fixed diagonal path
    let diag = 0;
    for (let i = 0; i < n; i++) diag += fruits[i][i];

    // Child 2: from (0, n-1) to (n-1, n-1), each step i+1, j +/-1 or 0
    let dp2 = new Array(n).fill(-Infinity);
    dp2[n - 1] = fruits[0][n - 1];
    for (let k = 1; k < n; k++) {
        const next = new Array(n).fill(-Infinity);
        const jLo = Math.max(0, n - 1 - k);
        for (let j = jLo; j < n; j++) {
            let best = -Infinity;
            for (const dj of [-1, 0, 1]) {
                const pj = j + dj;
                if (pj >= 0 && pj < n) best = Math.max(best, dp2[pj]);
            }
            if (best > -Infinity) {
                next[j] = best + (k === j ? 0 : fruits[k][j]);
            }
        }
        dp2 = next;
    }

    // Child 3: from (n-1, 0) to (n-1, n-1), each step j+1, i +/-1 or 0
    let dp3 = new Array(n).fill(-Infinity);
    dp3[n - 1] = fruits[n - 1][0];
    for (let k = 1; k < n; k++) {
        const next = new Array(n).fill(-Infinity);
        const iLo = Math.max(0, n - 1 - k);
        for (let i = iLo; i < n; i++) {
            let best = -Infinity;
            for (const di of [-1, 0, 1]) {
                const pi = i + di;
                if (pi >= 0 && pi < n) best = Math.max(best, dp3[pi]);
            }
            if (best > -Infinity) {
                next[i] = best + (i === k ? 0 : fruits[i][k]);
            }
        }
        dp3 = next;
    }

    return diag + dp2[n - 1] + dp3[n - 1];
};
// @lc code=end

// TEST:
console.log(maxCollectedFruits([[1,2,3,4],[5,6,8,7],[9,10,11,12],[13,14,15,16]])); // 100
console.log(maxCollectedFruits([[1,1],[1,1]])); // 4
