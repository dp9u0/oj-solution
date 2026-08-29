/*
 * @lc app=leetcode id=4027 lang=javascript
 *
 * [4027] Elevator Requests II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @param {number[][]} requests
 * @return {number}
 */
var elevatorRequests = function(n, start, requests) {
  const m = requests.length;
  const full = (1 << m) - 1;
  const INF = Infinity;
  const dp = Array.from({ length: 1 << m }, () => Array(m).fill(INF));
  for (let i = 0; i < m; i++) {
    dp[1 << i][i] = Math.max(Math.abs(start - requests[i][1]), requests[i][0]);
  }
  for (let mask = 1; mask <= full; mask++) {
    for (let i = 0; i < m; i++) {
      if (!(mask & (1 << i)) || dp[mask][i] === INF) continue;
      const t = dp[mask][i];
      const fi = requests[i][1];
      for (let j = 0; j < m; j++) {
        if (mask & (1 << j)) continue;
        const nt = Math.max(t + Math.abs(fi - requests[j][1]), requests[j][0]);
        const nm = mask | (1 << j);
        if (nt < dp[nm][j]) dp[nm][j] = nt;
      }
    }
  }
  let ans = INF;
  for (let i = 0; i < m; i++) {
    if (dp[full][i] < ans) ans = dp[full][i];
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(elevatorRequests(9, 0, [[0, 8], [6, 5]]) === 9);
console.log(elevatorRequests(8, 5, [[1, 7], [7, 3]]) === 7);
console.log(elevatorRequests(7, 3, [[0, 5], [0, 1], [6, 3]]) === 8);
console.log(elevatorRequests(2, 0, [[0, 1]]) === 1);
console.log(elevatorRequests(1000000000, 0, [[1000000000, 999999999]]) === 1000000000);
console.log(elevatorRequests(5, 2, [[10, 2]]) === 10);
