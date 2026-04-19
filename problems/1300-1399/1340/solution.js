/*
 * @lc app=leetcode id=1340 lang=javascript
 *
 * [1340] Jump Game V
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
    const n = arr.length;
    const indices = Array.from({length: n}, (_, i) => i);
    indices.sort((a, b) => arr[a] - arr[b]);

    const dp = new Int32Array(n).fill(1);

    for (const i of indices) {
        // Jump left
        for (let j = i - 1; j >= 0 && j >= i - d; j--) {
            if (arr[j] >= arr[i]) break;
            if (dp[j] + 1 > dp[i]) dp[i] = dp[j] + 1;
        }
        // Jump right
        for (let j = i + 1; j < n && j <= i + d; j++) {
            if (arr[j] >= arr[i]) break;
            if (dp[j] + 1 > dp[i]) dp[i] = dp[j] + 1;
        }
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] > ans) ans = dp[i];
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxJumps([6,4,14,6,8,13,9,7,10,6,12], 2)); // 4
console.log(maxJumps([3,3,3,3,3], 3)); // 1
console.log(maxJumps([7,6,5,4,3,2,1], 1)); // 7
console.log(maxJumps([1], 1)); // 1
console.log(maxJumps([6,4,14,6,8,13,9,7,10,6,12], 3)); // 5
