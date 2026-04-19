/*
 * @lc app=leetcode id=1371 lang=javascript
 *
 * [1371] Find the Longest Substring Containing Vowels in Even Counts
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
  const vowels = { a: 0, e: 1, i: 2, o: 3, u: 4 };
  const first = new Map();
  first.set(0, -1);
  let mask = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels[s[i]] !== undefined) {
      mask ^= (1 << vowels[s[i]]);
    }
    if (first.has(mask)) {
      res = Math.max(res, i - first.get(mask));
    } else {
      first.set(mask, i);
    }
  }
  return res;
};
// @lc code=end

// TEST:
console.log(findTheLongestSubstring('eleetminicoworoep')); // 13
console.log(findTheLongestSubstring('leetcodeisgreat')); // 5
console.log(findTheLongestSubstring('bcbcbc')); // 6
