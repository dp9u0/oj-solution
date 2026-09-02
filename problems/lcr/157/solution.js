/*
 * @lc app=leetcode.cn id=LCR 157 lang=javascript
 *
 * [LCR 157] 套餐内商品的排列顺序
 */

// @lc code=start
/**
 * @param {string} goods
 * @return {string[]}
 */
var goodsOrder = function(goods) {
  const chars = goods.split('').sort();
  const n = chars.length;
  const used = new Array(n).fill(false);
  const res = [];
  const path = [];
  const dfs = () => {
    if (path.length === n) {
      res.push(path.join(''));
      return;
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) continue;
      used[i] = true;
      path.push(chars[i]);
      dfs();
      path.pop();
      used[i] = false;
    }
  };
  dfs();
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(goodsOrder('agew').length, 24);
assert.deepStrictEqual(goodsOrder('a'), ['a']);
assert.strictEqual(goodsOrder('ab').length, 2);
assert.strictEqual(goodsOrder('aba').length, 3);
// unique-ness
assert.strictEqual(new Set(goodsOrder('aba')).size, 3);
assert.strictEqual(new Set(goodsOrder('agew')).size, 24);

console.log('All tests passed!');
