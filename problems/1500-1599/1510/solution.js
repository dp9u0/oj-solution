/*
 * @lc app=leetcode id=1510 lang=javascript
 *
 * [1510] Stone Game IV
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
    const dp = new Array(n + 1).fill(false);
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            if (!dp[i - j * j]) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(winnerSquareGame(1)); // true
console.log(winnerSquareGame(2)); // false
console.log(winnerSquareGame(4)); // true
console.log(winnerSquareGame(7)); // false
console.log(winnerSquareGame(17)); // false
