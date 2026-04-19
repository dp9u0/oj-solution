/*
 * @lc app=leetcode id=2565 lang=javascript
 *
 * [2565] Subsequence With the Minimum Score
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minimumScore = function(s, t) {
  const n = s.length, m = t.length;

  // pre[i] = position in s after matching t[0..i-1], n+1 if impossible
  const pre = new Int32Array(m + 1);
  pre[0] = 0;
  for (let i = 0, j = 0; i < m; i++) {
    while (j < n && s[j] !== t[i]) j++;
    pre[i + 1] = j < n ? ++j : n + 1;
  }

  // If t is already a subsequence of s
  if (pre[m] <= n) return 0;

  // suf[i] = max starting position in s for matching t[i..m-1], -1 if impossible
  const suf = new Int32Array(m + 1);
  suf[m] = n;
  for (let i = m - 1, j = n - 1; i >= 0; i--) {
    while (j >= 0 && s[j] !== t[i]) j--;
    suf[i] = j >= 0 ? j-- : -1;
  }

  let best = m;
  for (let left = 0; left <= m; left++) {
    if (pre[left] > n) break;
    // Binary search: min right+1 in [left+1, m] where suf[right+1] >= pre[left]
    let lo = left + 1, hi = m + 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (suf[mid] >= pre[left]) hi = mid;
      else lo = mid + 1;
    }
    if (lo <= m) {
      best = Math.min(best, lo - left);
    }
  }

  return best;
};
// @lc code=end

// TEST:
console.log(minimumScore("abacaba", "bzaa") === 1);
console.log(minimumScore("cde", "xyz") === 3);
console.log(minimumScore("abcde", "ace") === 0);
console.log(minimumScore("a", "a") === 0);
console.log(minimumScore("abc", "def") === 3);
console.log(minimumScore("abacaba", "ax") === 1);
