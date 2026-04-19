/*
 * @lc app=leetcode id=1301 lang=javascript
 *
 * [1301] Number of Paths with Max Score
 */

// @lc code=start
/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
  const MOD = 1e9 + 7;
  const n = board.length;
  // dp[i][j] = [maxSum, count]
  let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => [0, 0]));
  dp[n - 1][n - 1] = [0, 1];

  const dirs = [[1, 0], [0, 1], [1, 1]];

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (board[i][j] === 'X') {
        dp[i][j] = [0, 0];
        continue;
      }
      if (i === n - 1 && j === n - 1) continue;

      let maxSum = -1;
      let count = 0;
      for (const [di, dj] of dirs) {
        let ni = i + di, nj = j + dj;
        if (ni >= 0 && ni < n && nj >= 0 && nj < n && dp[ni][nj][1] > 0) {
          let s = dp[ni][nj][0];
          if (s > maxSum) {
            maxSum = s;
            count = dp[ni][nj][1];
          } else if (s === maxSum) {
            count = (count + dp[ni][nj][1]) % MOD;
          }
        }
      }
      if (maxSum >= 0) {
        let val = 0;
        if (board[i][j] !== 'E' && board[i][j] !== 'S') {
          val = parseInt(board[i][j]);
        }
        dp[i][j] = [maxSum + val, count];
      } else {
        dp[i][j] = [0, 0];
      }
    }
  }

  if (dp[0][0][1] === 0) return [0, 0];
  return [dp[0][0][0], dp[0][0][1] % MOD];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(pathsWithMaxScore(["E23","2X2","12S"]))); // [7,1]
console.log(JSON.stringify(pathsWithMaxScore(["E12","1X1","21S"]))); // [4,2]
console.log(JSON.stringify(pathsWithMaxScore(["E11","XXX","11S"]))); // [0,0]
console.log(JSON.stringify(pathsWithMaxScore(["E"]))); // [0,1] - edge: just E and S combined
