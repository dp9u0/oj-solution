/*
 * @lc app=leetcode id=873 lang=javascript
 *
 * [873] Length of Longest Fibonacci Subsequence
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const n = arr.length;
    const index = new Map();
    for (let i = 0; i < n; i++) index.set(arr[i], i);

    const dp = new Array(n).fill(0).map(() => new Array(n).fill(2));
    let maxLen = 0;

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < j; i++) {
            const prev = arr[j] - arr[i];
            if (prev < arr[i] && index.has(prev)) {
                const k = index.get(prev);
                dp[i][j] = dp[k][i] + 1;
                maxLen = Math.max(maxLen, dp[i][j]);
            }
        }
    }
    return maxLen >= 3 ? maxLen : 0;
};
// @lc code=end

// TEST:
console.log(lenLongestFibSubseq([1,2,3,4,5,6,7,8])); // 5
console.log(lenLongestFibSubseq([1,3,7,11,12,14,18])); // 3
console.log(lenLongestFibSubseq([1,2,3])); // 3
