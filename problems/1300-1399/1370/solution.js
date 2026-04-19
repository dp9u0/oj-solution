/*
 * @lc app=leetcode id=1370 lang=javascript
 *
 * [1370] Increasing Decreasing String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  const cnt = new Array(26).fill(0);
  for (const ch of s) cnt[ch.charCodeAt(0) - 97]++;
  const result = [];
  const total = s.length;
  while (result.length < total) {
    for (let i = 0; i < 26; i++) {
      if (cnt[i] > 0) {
        result.push(String.fromCharCode(i + 97));
        cnt[i]--;
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (cnt[i] > 0) {
        result.push(String.fromCharCode(i + 97));
        cnt[i]--;
      }
    }
  }
  return result.join('');
};
// @lc code=end

// TEST:
console.log(sortString('aaaabbbbcccc')); // 'abccbaabccba'
console.log(sortString('rat')); // 'art'
console.log(sortString('leetcode')); // 'cdelotee'
