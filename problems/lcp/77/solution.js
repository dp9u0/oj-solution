/*
 * @lc app=leetcode.cn id=LCP 77 lang=javascript
 *
 * [LCP 77] 符文储备
 */

// @lc code=start
/**
 * @param {number[]} runes
 * @return {number}
 */
var runeReserve = function(runes) {
  runes.sort((a, b) => a - b);
  let best = 1;
  let cur = 1;
  for (let i = 1; i < runes.length; i++) {
    if (runes[i] - runes[i - 1] <= 1) {
      cur++;
      if (cur > best) best = cur;
    } else {
      cur = 1;
    }
  }
  return runes.length ? best : 0;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(runeReserve([1, 3, 5, 4, 1, 7]), 3);
assert.strictEqual(runeReserve([1, 1, 3, 3, 2, 4]), 6);
// all equal
assert.strictEqual(runeReserve([5, 5, 5]), 3);
assert.strictEqual(runeReserve([7]), 1);
// gaps break runs
assert.strictEqual(runeReserve([1, 3, 5, 7, 9]), 1);
// duplicates bridge
assert.strictEqual(runeReserve([1, 1, 2, 4, 4, 5, 7, 8, 8, 8]), 4);
// unsorted input
assert.strictEqual(runeReserve([9, 2, 3, 3, 4, 1]), 5);

console.log('All tests passed!');
console.log('runeReserve([1,3,5,4,1,7]) =', runeReserve([1, 3, 5, 4, 1, 7]));
