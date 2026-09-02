/*
 * @lc app=leetcode.cn id=LCP 66 lang=javascript
 *
 * [LCP 66] 最小展台数量
 */

// @lc code=start
/**
 * @param {string[]} demand
 * @return {number}
 */
var minNumBooths = function(demand) {
  const maxCount = new Array(26).fill(0);
  for (const day of demand) {
    const cnt = new Array(26).fill(0);
    for (const ch of day) cnt[ch.charCodeAt(0) - 97]++;
    for (let i = 0; i < 26; i++) if (cnt[i] > maxCount[i]) maxCount[i] = cnt[i];
  }
  return maxCount.reduce((a, b) => a + b, 0);
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minNumBooths(['acd', 'bed', 'accd']), 6);
assert.strictEqual(minNumBooths(['abc', 'ab', 'ac', 'b']), 3);
assert.strictEqual(minNumBooths(['a', 'a', 'a']), 1);
assert.strictEqual(minNumBooths(['aaaa', 'aa']), 4);
assert.strictEqual(minNumBooths(['ab', 'cd']), 4);
assert.strictEqual(minNumBooths(['a']), 1);

console.log('All tests passed!');
console.log('minNumBooths(["acd","bed","accd"]) =', minNumBooths(['acd', 'bed', 'accd']));
