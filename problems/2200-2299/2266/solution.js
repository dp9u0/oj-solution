/*
 * @lc app=leetcode id=2266 lang=javascript
 *
 * [2266] Count Number of Texts
 */

// @lc code=start
/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function(pressedKeys) {
    let MOD = 1e9 + 7;
    let n = pressedKeys.length;
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
      dp[i] = dp[i - 1];
      if (i >= 2 && pressedKeys[i - 1] === pressedKeys[i - 2]) {
        dp[i] = (dp[i] + dp[i - 2]) % MOD;
        if (i >= 3 && pressedKeys[i - 2] === pressedKeys[i - 3]) {
          dp[i] = (dp[i] + dp[i - 3]) % MOD;
          let d = pressedKeys[i - 1];
          if ((d === '7' || d === '9') && i >= 4 && pressedKeys[i - 3] === pressedKeys[i - 4]) {
            dp[i] = (dp[i] + dp[i - 4]) % MOD;
          }
        }
      }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(countTexts("22233"));
console.log(countTexts("222222222222222222222222222222222222"));
console.log(countTexts("7777"));
