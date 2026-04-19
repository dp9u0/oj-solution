/*
 * @lc app=leetcode id=2947 lang=javascript
 *
 * [2947] Count Beautiful Substrings I
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
  const n = s.length;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  // Prefix sum of vowel count
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + (vowels.has(s[i]) ? 1 : 0);
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const len = j - i + 1;
      if (len % 2 !== 0) continue;
      const v = prefix[j + 1] - prefix[i];
      const c = len - v;
      if (v === c && (v * c) % k === 0) {
        result++;
      }
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(beautifulSubstrings("baeyh", 2)); // 2
console.log(beautifulSubstrings("abba", 1)); // 3
console.log(beautifulSubstrings("bcdf", 1)); // 0
