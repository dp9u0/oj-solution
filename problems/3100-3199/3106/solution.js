/*
 * @lc app=leetcode id=3106 lang=javascript
 *
 * [3106] Lexicographically Smallest String After Operations With Constraint
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(s, k) {
  const chars = [...s];
  for (let i = 0; i < chars.length && k > 0; i++) {
    const pos = chars[i].charCodeAt(0) - 97;
    const d = Math.min(pos, 26 - pos);
    if (d <= k) {
      chars[i] = 'a';
      k -= d;
    } else {
      chars[i] = String.fromCharCode(97 + pos - k);
      k = 0;
    }
  }
  return chars.join('');
};
// @lc code=end

// TEST:
console.log(getSmallestString('zbbz', 3) === 'aaaz');
console.log(getSmallestString('xaxcd', 4) === 'aawcd');
console.log(getSmallestString('lol', 0) === 'lol');
console.log(getSmallestString('abc', 100) === 'aaa');
console.log(getSmallestString('z', 1) === 'a');
console.log(getSmallestString('zzz', 2) === 'aaz');
console.log(getSmallestString('yx', 1) === 'xx');
console.log(getSmallestString('abz', 2) === 'aaa');
