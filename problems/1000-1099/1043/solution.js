/*
 * @lc app=leetcode id=1043 lang=javascript
 *
 * [1043] Partition Array for Maximum Sum
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        let curMax = 0;
        for (let j = 1; j <= k && i - j >= 0; j++) {
            curMax = Math.max(curMax, arr[i - j]);
            dp[i] = Math.max(dp[i], dp[i - j] + curMax * j);
        }
    }

    return dp[n];
};
// @lc code=end

// TEST:
console.log(maxSumAfterPartitioning([1,15,7,9,2,5,10], 3));
console.log(maxSumAfterPartitioning([1,4,1,5,7,3,6,1,9,9,3], 4));
console.log(maxSumAfterPartitioning([1], 1));
