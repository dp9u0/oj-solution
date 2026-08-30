/*
 * @lc app=leetcode id=639 lang=javascript
 *
 * [639] Decode Ways II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const MOD = 1e9 + 7;
  const n = s.length;

  // singleCount(c): ways for char c decoded alone
  const singleCount = (c) => (c === '*' ? 9 : c === '0' ? 0 : 1);

  // dp over prefix: dp[i] = single*dp[i-1] + double*dp[i-2]
  let prev2 = 1; // dp[0]
  let prev1 = singleCount(s[0]); // dp[1]

  for (let i = 2; i <= n; i++) {
    const c1 = s[i - 2];
    const c2 = s[i - 1];

    const single = singleCount(c2);

    // double: ways for s[i-2..i-1] forming a valid two-digit code (10-26)
    let double = 0;
    if (c1 === '*' && c2 === '*') {
      double = 15; // 11-19 (9) + 21-26 (6)
    } else if (c1 === '*') {
      double = c2 <= '6' ? 2 : 1; // d in 0-6: 1d/2d both valid; d in 7-9: only 1d
    } else if (c2 === '*') {
      double = c1 === '1' ? 9 : c1 === '2' ? 6 : 0;
    } else {
      const num = (c1.charCodeAt(0) - 48) * 10 + (c2.charCodeAt(0) - 48);
      double = num >= 10 && num <= 26 ? 1 : 0;
    }

    const cur = (single * prev1 + double * prev2) % MOD;
    prev2 = prev1;
    prev1 = cur;
  }

  return prev1;
};
// @lc code=end

// TEST:
console.log(numDecodings('*')); // 9
console.log(numDecodings('1*')); // 18
console.log(numDecodings('2*')); // 15
console.log(numDecodings('0')); // 0
console.log(numDecodings('**')); // 96 (9*9 + 15)
console.log(numDecodings('1*0')); // 2 ((1)(10), (1)(20))
console.log(numDecodings('1003')); // 0
console.log(numDecodings('*1*1*')); // 3438
