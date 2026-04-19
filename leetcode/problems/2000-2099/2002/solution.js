/*
 * @lc app=leetcode id=2002 lang=javascript
 *
 * [2002] Maximum Product of the Length of Two Palindromic Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function(s) {
  const n = s.length;
  const full = (1 << n) - 1;

  // dp[mask] = longest palindromic subsequence length in this mask
  const dp = new Int8Array(1 << n);

  const isPalindrome = (mask) => {
    const chars = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) chars.push(s[i]);
    }
    for (let l = 0, r = chars.length - 1; l < r; l++, r--) {
      if (chars[l] !== chars[r]) return 0;
    }
    return chars.length;
  };

  for (let mask = 1; mask <= full; mask++) {
    dp[mask] = isPalindrome(mask);
  }

  let ans = 0;
  for (let mask = 1; mask < full; mask++) {
    if (dp[mask] === 0) continue;
    const rest = full ^ mask;
    let best = 0;
    for (let sub = rest; sub > 0; sub = (sub - 1) & rest) {
      best = Math.max(best, dp[sub]);
    }
    ans = Math.max(ans, dp[mask] * best);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxProduct("leetcodecom")); // 9
console.log(maxProduct("bb")); // 1
console.log(maxProduct("accbcaxxcxx")); // 25
console.log(maxProduct("ab")); // 1
console.log(maxProduct("aa")); // 1
