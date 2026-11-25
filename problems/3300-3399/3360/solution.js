/*
 * @lc app=leetcode.cn id=3360 lang=javascript
 *
 * [3360] 移除石头游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
  let remain = n;
  let need = 10;
  let aliceTurn = true;
  while (remain >= need) {
    remain -= need;
    need -= 1;
    aliceTurn = !aliceTurn;
  }
  // 当前轮到的玩家无法操作即输,Alice 获胜当且仅当轮到 Bob
  return !aliceTurn;
};
// @lc code=end

// TEST:
const assert = require('assert');
assert.strictEqual(canAliceWin(12), true);   // Alice 移 10 剩 2,Bob 移不动
assert.strictEqual(canAliceWin(1), false);   // Alice 移不动 10
assert.strictEqual(canAliceWin(10), true);   // Alice 移 10 剩 0,Bob 移不动 9
assert.strictEqual(canAliceWin(19), false);  // 10+9 剩 0,Alice 移不动 8
assert.strictEqual(canAliceWin(30), true);   // 移 10+9+8 剩 3,Bob 移不动 7
assert.strictEqual(canAliceWin(26), false);  // 移 10+9 剩 7,Alice 移不动 8
assert.strictEqual(canAliceWin(50), true);   // 移 10+...+5 剩 5,Alice 移 4 剩 1,Bob 移不动 3

console.log('All tests passed');
