/*
 * @lc app=leetcode.cn id=2267 lang=javascript
 *
 * [2267] 检查是否有合法括号字符串路径
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const maxBalance = m + n;
  if (grid[0][0] === ')') return false;

  const dp = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => new Uint8Array(maxBalance))
  );
  dp[0][0][1] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      const delta = grid[i][j] === '(' ? 1 : -1;
      const cur = dp[i][j];
      const fromTop = i > 0 ? dp[i - 1][j] : null;
      const fromLeft = j > 0 ? dp[i][j - 1] : null;
      for (let b = 0; b < maxBalance; b++) {
        const nb = b + delta;
        if (nb < 0 || nb >= maxBalance) continue;
        if ((fromTop && fromTop[b]) || (fromLeft && fromLeft[b])) cur[nb] = 1;
      }
    }
  }
  return dp[m - 1][n - 1][0] === 1;
};
// @lc code=end

// TEST:
console.log(hasValidPath([["(", "(", "("], [")", "(", ")"], ["(", "(", ")"], ["(", "(", ")"]]) === true);
console.log(hasValidPath([[")", ")"], ["(", "("]]) === false);
console.log(hasValidPath([["(", ")"]]) === true);
console.log(hasValidPath([["("]]) === false);
console.log(hasValidPath([[")"]]) === false);
console.log(hasValidPath([["(", "("], [")", ")"]]) === false);
console.log(hasValidPath([["(", ")"], ["(", ")"]]) === false);
