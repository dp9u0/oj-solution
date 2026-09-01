/*
 * @lc app=leetcode.cn id=LCP 18 lang=javascript
 *
 * [LCP 18] 早餐组合
 */

// @lc code=start
/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
var breakfastNumber = function(staple, drinks, x) {
  const MOD = 1e9 + 7;
  staple.sort((a, b) => a - b);
  drinks.sort((a, b) => a - b);

  let ans = 0;
  let j = drinks.length - 1;
  for (let i = 0; i < staple.length; i++) {
    if (staple[i] >= x) break;
    while (j >= 0 && drinks[j] > x - staple[i]) {
      j--;
    }
    if (j < 0) break;
    ans = (ans + j + 1) % MOD;
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');
assert.strictEqual(breakfastNumber([10, 20, 5], [5, 5, 2], 15), 6);
assert.strictEqual(breakfastNumber([2, 1, 1], [8, 9, 5, 1], 9), 8);
// 单个主食 + 单个饮料恰好等于预算
assert.strictEqual(breakfastNumber([3], [3], 6), 1);
// 主食价格已超过预算，无法购买
assert.strictEqual(breakfastNumber([10], [1], 5), 0);
// 全部主食 + 全部饮料均可购买
assert.strictEqual(breakfastNumber([1, 2], [1, 1, 2], 10), 6);
// 边界：多对组合，模数
assert.strictEqual(breakfastNumber([1], [1000000007 - 1], 1000000007), 1);
console.log('All tests passed!');
