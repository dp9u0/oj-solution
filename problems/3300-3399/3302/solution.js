/*
 * @lc app=leetcode id=3302 lang=javascript
 *
 * [3302] Find the Lexicographically Smallest Valid Sequence
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function(word1, word2) {
  const n = word1.length, m = word2.length;
  const suf = new Int32Array(n + 1);
  suf[n] = 0;
  for (let i = n - 1, j = m - 1; i >= 0; i--) {
    if (j >= 0 && word1[i] === word2[j]) j--;
    suf[i] = m - 1 - j;
  }
  const res = [];
  let changed = false;
  for (let i = 0, j = 0; j < m; i++) {
    if (i >= n) return [];
    if (word1[i] === word2[j]) {
      res.push(i);
      j++;
    } else if (!changed && suf[i + 1] >= m - j - 1) {
      res.push(i);
      changed = true;
      j++;
    }
  }
  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(validSequence('vbcca', 'abc'))); // [0,1,2]
console.log(JSON.stringify(validSequence('bacdc', 'abc'))); // [1,2,4]
console.log(JSON.stringify(validSequence('aaaaaa', 'aaabc'))); // []
console.log(JSON.stringify(validSequence('abc', 'ab'))); // [0,1]
console.log(JSON.stringify(validSequence('bbeigiibhjafjig', 'iihhj'))); // [3,5,6,8,9]
