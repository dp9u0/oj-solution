/*
 * @lc app=leetcode.cn id=LCP 68 lang=javascript
 *
 * [LCP 68] 美观的花束
 */

// @lc code=start
/**
 * @param {number[]} flowers
 * @param {number} cnt
 * @return {number}
 */
var beautifulBouquet = function(flowers, cnt) {
  const n = flowers.length;
  const freq = new Map();
  let left = 0;
  let ans = 0;
  for (let right = 0; right < n; right++) {
    const v = flowers[right];
    freq.set(v, (freq.get(v) || 0) + 1);
    while (freq.get(v) > cnt) {
      const lv = flowers[left];
      freq.set(lv, freq.get(lv) - 1);
      left++;
    }
    ans += right - left + 1;
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(beautifulBouquet([1, 2, 3, 2], 1), 8);
assert.strictEqual(beautifulBouquet([5, 3, 3, 3], 2), 8);
assert.strictEqual(beautifulBouquet([1], 1), 1);
assert.strictEqual(beautifulBouquet([1, 1, 1], 1), 3);
assert.strictEqual(beautifulBouquet([1, 1, 1], 2), 5); // triple invalid (1 appears 3x)
assert.strictEqual(beautifulBouquet([1, 2, 3], 1), 6);

console.log('All tests passed!');
console.log('beautifulBouquet([1,2,3,2], 1) =', beautifulBouquet([1, 2, 3, 2], 1));
