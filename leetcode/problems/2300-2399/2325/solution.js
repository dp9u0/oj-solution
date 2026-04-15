/*
 * @lc app=leetcode id=2325 lang=javascript
 *
 * [2325] Decode the Message
 */

// @lc code=start
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  const map = new Map();
  let idx = 0;
  for (const c of key) {
    if (c !== ' ' && !map.has(c)) {
      map.set(c, String.fromCharCode(97 + idx));
      idx++;
    }
  }
  let res = '';
  for (const c of message) {
    res += c === ' ' ? ' ' : map.get(c);
  }
  return res;
};
// @lc code=end

// TEST:
console.log(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv')); // 'this is a secret'
console.log(decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb')); // 'the five boxing wizards jump quickly'
