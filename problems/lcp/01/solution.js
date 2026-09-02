/*
 * @lc app=leetcode.cn id=LCP 01 lang=javascript
 *
 * [LCP 01] 猜数字
 */

// @lc code=start
/**
 * 小A 猜三次数字，guess[i] 是小A 第 i 次猜的数，answer[i] 是小B 第 i 次选的数。
 * 统计两者相同的位置个数即为猜对次数。
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
  let count = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) count++;
  }
  return count;
};
// @lc code=end

// TEST:
const assert = require('assert');

// 示例 1：每次都猜对
assert.strictEqual(game([1, 2, 3], [1, 2, 3]), 3);

// 示例 2：只猜对第二次
assert.strictEqual(game([2, 2, 3], [3, 2, 1]), 1);

// 全错
assert.strictEqual(game([1, 2, 3], [3, 3, 1]), 0);

// 长度 3，但某次重复时仍只按位置比对
assert.strictEqual(game([2, 2, 2], [1, 2, 3]), 1);

// 值域含 3，位置敏感：颠倒顺序不得分
assert.strictEqual(game([3, 2, 1], [1, 2, 3]), 1);

// 暴力语义核对：随机长度=3、元素 ∈ {1,2,3}
function brute(g, a) {
  let c = 0;
  for (let i = 0; i < g.length; i++) if (g[i] === a[i]) c++;
  return c;
}
let seed = 20260903;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
for (let t = 0; t < 2000; t++) {
  const g = [], a = [];
  for (let i = 0; i < 3; i++) {
    g.push(1 + Math.floor(rnd() * 3));
    a.push(1 + Math.floor(rnd() * 3));
  }
  assert.strictEqual(game(g, a), brute(g, a));
}

console.log('All tests passed!');
console.log('ex1 =', game([1, 2, 3], [1, 2, 3]));
console.log('ex2 =', game([2, 2, 3], [3, 2, 1]));
