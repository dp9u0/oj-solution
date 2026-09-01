/*
 * @lc app=leetcode id=464 lang=javascript
 *
 * [464] Can I Win
 */

// @lc code=start
/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if (desiredTotal <= 0) return true;
  const m = maxChoosableInteger;
  if (m * (m + 1) / 2 < desiredTotal) return false;
  const memo = new Array(1 << m).fill(-1);
  const dfs = (state, remaining) => {
    if (memo[state] !== -1) return memo[state];
    let res = false;
    for (let i = 1; i <= m; i++) {
      const bit = 1 << (i - 1);
      if (state & bit) continue;
      if (i >= remaining || !dfs(state | bit, remaining - i)) {
        res = true;
        break;
      }
    }
    memo[state] = res;
    return res;
  };
  return dfs(0, desiredTotal);
};
// @lc code=end

// TEST:
console.log(canIWin(10, 11) === false);
console.log(canIWin(10, 0) === true);
console.log(canIWin(10, 1) === true);
console.log(canIWin(4, 6) === true);
console.log(canIWin(20, 210) === false);
console.log(canIWin(20, 300) === false);
console.log(canIWin(5, 50) === false);
console.log(canIWin(10, 40) === false);
