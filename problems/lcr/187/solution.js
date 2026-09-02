/*
 * @lc app=leetcode.cn id=LCR 187 lang=javascript
 *
 * [LCR 187] 破冰游戏
 */

// @lc code=start
/**
 * @param {number} num
 * @param {number} target
 * @return {number}
 */
var iceBreakingGame = function(num, target) {
  let ans = 0;
  for (let i = 2; i <= num; i++) {
    ans = (ans + target) % i;
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(iceBreakingGame(7, 4), 1);
assert.strictEqual(iceBreakingGame(12, 5), 0);
assert.strictEqual(iceBreakingGame(1, 1000000), 0); // single member stays 0
assert.strictEqual(iceBreakingGame(5, 1), 4); // remove each count 1 -> last is 4
assert.strictEqual(iceBreakingGame(3, 3), 1);
assert.strictEqual(iceBreakingGame(6, 3), 0);

console.log('All tests passed!');
console.log('iceBreakingGame(7,4) =', iceBreakingGame(7, 4));
