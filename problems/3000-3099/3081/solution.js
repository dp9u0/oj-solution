/*
 * @lc app=leetcode id=3081 lang=javascript
 *
 * [3081] Replace Question Marks in String to Minimize Its Value
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minimizeStringValue = function(s) {
  const cnt = new Array(26).fill(0);
  const qMarks = [];

  for (const c of s) {
    if (c !== '?') cnt[c.charCodeAt(0) - 97]++;
  }

  // collect letters to fill
  const toFill = [];
  for (const c of s) {
    if (c === '?') {
      let minIdx = 0;
      for (let i = 1; i < 26; i++) {
        if (cnt[i] < cnt[minIdx]) minIdx = i;
      }
      toFill.push(minIdx);
      cnt[minIdx]++;
    }
  }

  // sort for lexicographically smallest
  toFill.sort((a, b) => a - b);

  const res = s.split('');
  let idx = 0;
  for (let i = 0; i < res.length; i++) {
    if (res[i] === '?') {
      res[i] = String.fromCharCode(toFill[idx++] + 97);
    }
  }
  return res.join('');
};
// @lc code=end

// TEST:
console.log(minimizeStringValue('???')); // 'abc'
console.log(minimizeStringValue('a?a?')); // 'abac'
console.log(minimizeStringValue('abcdefghijklmnopqrstuvwxy??')); // 'abcdefghijklmnopqrstuvwxyab'
