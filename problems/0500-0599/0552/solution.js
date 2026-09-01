/*
 * @lc app=leetcode id=552 lang=javascript
 *
 * [552] Student Attendance Record II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
  const MOD = 1e9 + 7;
  // dp[a][l]: a = count of 'A' used (0/1), l = trailing consecutive 'L' (0..2)
  let dp = [
    [1, 0, 0],
    [0, 0, 0],
  ];
  for (let i = 0; i < n; i++) {
    const next = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    for (let a = 0; a <= 1; a++) {
      const sum = (dp[a][0] + dp[a][1] + dp[a][2]) % MOD;
      // append 'P': resets trailing 'L'
      next[a][0] = (next[a][0] + sum) % MOD;
      // append 'L': extends trailing 'L' run, at most 2
      next[a][1] = (next[a][1] + dp[a][0]) % MOD;
      next[a][2] = (next[a][2] + dp[a][1]) % MOD;
      // append 'A': only allowed when no 'A' used yet
      if (a === 0) {
        next[1][0] = (next[1][0] + sum) % MOD;
      }
    }
    dp = next;
  }
  let ans = 0;
  for (let a = 0; a <= 1; a++) {
    for (let l = 0; l <= 2; l++) {
      ans = (ans + dp[a][l]) % MOD;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(checkRecord(2) === 8);
console.log(checkRecord(1) === 3);
console.log(checkRecord(10101) === 183236316);
console.log(checkRecord(3) === 19);
console.log(checkRecord(4) === 43);
console.log(checkRecord(100000) > 0);
