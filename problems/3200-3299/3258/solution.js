/*
 * @lc app=leetcode id=3258 lang=javascript
 *
 * [3258] Count Substrings That Satisfy K-Constraint I
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let cnt0 = 0, cnt1 = 0;
    for (let j = i; j < n; j++) {
      if (s[j] === '0') cnt0++;
      else cnt1++;
      if (cnt0 <= k || cnt1 <= k) ans++;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(countKConstraintSubstrings("10101", 1)); // 12
console.log(countKConstraintSubstrings("1010101", 2)); // 25
console.log(countKConstraintSubstrings("11111", 1)); // 15
