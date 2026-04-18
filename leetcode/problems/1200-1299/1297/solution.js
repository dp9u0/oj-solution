/*
 * @lc app=leetcode id=1297 lang=javascript
 *
 * [1297] Maximum Number of Occurrences of a Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
  const count = new Map();
  const charCount = new Array(26).fill(0);
  let unique = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const idx = s.charCodeAt(i) - 97;
    if (charCount[idx] === 0) unique++;
    charCount[idx]++;

    if (i >= minSize) {
      const remIdx = s.charCodeAt(i - minSize) - 97;
      charCount[remIdx]--;
      if (charCount[remIdx] === 0) unique--;
    }

    if (i >= minSize - 1 && unique <= maxLetters) {
      const sub = s.substring(i - minSize + 1, i + 1);
      const c = (count.get(sub) || 0) + 1;
      count.set(sub, c);
      if (c > result) result = c;
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(maxFreq('aababcaab', 2, 3, 4)); // 2
console.log(maxFreq('aaaa', 1, 3, 3)); // 2
console.log(maxFreq('abcde', 2, 3, 3)); // 0
console.log(maxFreq('aabcabc', 3, 3, 5)); // 2
console.log(maxFreq('ababab', 2, 2, 3)); // 3
