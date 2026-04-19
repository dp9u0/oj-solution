/*
 * @lc app=leetcode id=1781 lang=javascript
 *
 * [1781] Sum of Beauty of All Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
  const n = s.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const cnt = new Array(26).fill(0);
    for (let j = i; j < n; j++) {
      cnt[s.charCodeAt(j) - 97]++;
      let maxF = 0, minF = Infinity;
      for (let k = 0; k < 26; k++) {
        if (cnt[k] > 0) {
          maxF = Math.max(maxF, cnt[k]);
          minF = Math.min(minF, cnt[k]);
        }
      }
      sum += maxF - minF;
    }
  }
  return sum;
};
// @lc code=end

// TEST:
console.log(beautySum("aabcb")); // 5
console.log(beautySum("aabcbaa")); // 17
console.log(beautySum("abc")); // 0
console.log(beautySum("aab")); // 1
console.log(beautySum("aa")); // 0
