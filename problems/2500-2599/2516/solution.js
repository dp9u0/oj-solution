/*
 * @lc app=leetcode id=2516 lang=javascript
 *
 * [2516] Take K of Each Character From Left and Right
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
  if (k === 0) return 0;
  const total = { a: 0, b: 0, c: 0 };
  for (const ch of s) total[ch]++;
  if (total.a < k || total.b < k || total.c < k) return -1;

  const limit = { a: total.a - k, b: total.b - k, c: total.c - k };
  const cnt = { a: 0, b: 0, c: 0 };
  let maxLen = 0, l = 0;
  for (let r = 0; r < s.length; r++) {
    cnt[s[r]]++;
    while (cnt.a > limit.a || cnt.b > limit.b || cnt.c > limit.c) {
      cnt[s[l]]--;
      l++;
    }
    maxLen = Math.max(maxLen, r - l + 1);
  }
  return s.length - maxLen;
};
// @lc code=end

// TEST:
console.log(takeCharacters('aabaaaacaabc', 2)); // 8
console.log(takeCharacters('a', 1)); // -1
console.log(takeCharacters('aabbcc', 2)); // 6
console.log(takeCharacters('abc', 0)); // 0
