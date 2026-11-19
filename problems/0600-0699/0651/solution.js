/*
 * @lc app=leetcode.cn id=651 lang=javascript
 *
 * [651] 四个键的键盘
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var maxA = function(n) {
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1; // plain print
        // select-all at press x+1, copy at x+2, paste (i - x - 2) times
        for (let x = 1; x <= i - 3; x++) {
            const via = dp[x] * (i - x - 1);
            if (via > dp[i]) dp[i] = via;
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(maxA(1)); // 1
console.log(maxA(2)); // 2
console.log(maxA(3)); // 3
console.log(maxA(7)); // 9
console.log(maxA(10)); // 20
console.log(maxA(50)); // 1327104
