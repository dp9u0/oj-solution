/*
 * @lc app=leetcode id=792 lang=javascript
 *
 * [792] Number of Matching Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  const n = s.length;
  // next[i][c] = next position >= i where char c appears, or -1
  const next = new Array(n + 1);
  next[n] = new Int32Array(26).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    next[i] = new Int32Array(next[i + 1]);
    next[i][s.charCodeAt(i) - 97] = i;
  }

  const isSubseq = (word) => {
    let pos = 0;
    for (const c of word) {
      if (pos > n) return false;
      pos = next[pos][c.charCodeAt(0) - 97];
      if (pos === -1) return false;
      pos++;
    }
    return true;
  };

  const cache = new Map();
  let count = 0;
  for (const w of words) {
    if (!cache.has(w)) cache.set(w, isSubseq(w));
    if (cache.get(w)) count++;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(numMatchingSubseq("abcde", ["a","bb","acd","ace"])); // 3
console.log(numMatchingSubseq("dsahjpjauf", ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"])); // 2
console.log(numMatchingSubseq("a", ["a","b","c"])); // 1
console.log(numMatchingSubseq("abc", ["abc","acb","bac"])); // 1
console.log(numMatchingSubseq("aaaaa", ["a","aa","aaa"])); // 3
