/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const count = new Array(26).fill(0);
  let left = 0, maxFreq = 0, result = 0;
  for (let right = 0; right < s.length; right++) {
    const idx = s.charCodeAt(right) - 65;
    count[idx]++;
    maxFreq = Math.max(maxFreq, count[idx]);
    while (right - left + 1 - maxFreq > k) {
      count[s.charCodeAt(left) - 65]--;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};
// @lc code=end

// TEST:
console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
console.log(characterReplacement("AAAA", 0)); // 4
