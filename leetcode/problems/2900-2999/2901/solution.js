/*
 * @lc app=leetcode id=2901 lang=javascript
 *
 * [2901] Longest Unequal Adjacent Groups Subsequence II
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(words, groups) {
  const n = words.length;

  function hamming(a, b) {
    let d = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) d++;
    }
    return d;
  }

  const dp = new Int32Array(n).fill(1);
  const prev = new Int32Array(n).fill(-1);
  let maxLen = 1, maxIdx = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (groups[j] === groups[i]) continue;
      if (words[j].length !== words[i].length) continue;
      if (hamming(words[j], words[i]) !== 1) continue;
      if (dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      maxIdx = i;
    }
  }

  // Reconstruct path
  const result = [];
  let cur = maxIdx;
  while (cur !== -1) {
    result.push(words[cur]);
    cur = prev[cur];
  }
  return result.reverse();
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getWordsInLongestSubsequence(['bab','dab','cab'], [1,2,2]))); // ['bab','cab'] or ['bab','dab']
console.log(JSON.stringify(getWordsInLongestSubsequence(['a','b','c','d'], [1,2,3,4]))); // ['a','b','c','d']
console.log(JSON.stringify(getWordsInLongestSubsequence(['ab','cd'], [1,1]))); // ['ab']
console.log(JSON.stringify(getWordsInLongestSubsequence(['ab','ac'], [1,2]))); // ['ab','ac']
console.log(JSON.stringify(getWordsInLongestSubsequence(['adc','aec','adc'], [1,1,3]))); // ['adc','adc'] or ['aec','adc'] length 2
