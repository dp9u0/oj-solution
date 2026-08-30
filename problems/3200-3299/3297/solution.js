/*
 * @lc app=leetcode id=3297 lang=javascript
 *
 * [3297] Count Substrings That Can Be Rearranged to Contain a String I
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function(word1, word2) {
  const need = Array(26).fill(0);
  for (const ch of word2) need[ch.charCodeAt(0) - 97]++;
  let missing = 0;
  for (const c of need) if (c > 0) missing++;
  const n = word1.length;
  const cnt = Array(26).fill(0);
  let ans = 0;
  let r = 0;
  for (let l = 0; l < n; l++) {
    if (r < l) r = l;
    while (r < n && missing > 0) {
      const c = word1.charCodeAt(r) - 97;
      cnt[c]++;
      if (need[c] > 0 && cnt[c] === need[c]) missing--;
      r++;
    }
    if (missing === 0) {
      ans += n - r + 1;
    }
    if (r > l) {
      const c = word1.charCodeAt(l) - 97;
      if (need[c] > 0 && cnt[c] === need[c]) missing++;
      cnt[c]--;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(validSubstringCount('bcca', 'abc') === 1);
console.log(validSubstringCount('abcabc', 'abc') === 10);
console.log(validSubstringCount('abcabc', 'aaabc') === 0);
console.log(validSubstringCount('a', 'a') === 1);
console.log(validSubstringCount('ab', 'b') === 2);
console.log(validSubstringCount('aa', 'a') === 3);
console.log(validSubstringCount('abc', 'd') === 0);
console.log(validSubstringCount('bbaa', 'ab') === 4);
