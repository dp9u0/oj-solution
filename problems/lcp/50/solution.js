/*
 * @lc app=leetcode.cn id=LCP 50 lang=javascript
 *
 * [LCP 50] 宝石补给
 */

// @lc code=start
/**
 * @param {number[]} gem
 * @param {number[][]} operations
 * @return {number}
 */
var giveGem = function(gem, operations) {
  for (const [x, y] of operations) {
    const give = Math.floor(gem[x] / 2);
    gem[x] -= give;
    gem[y] += give;
  }
  return Math.max(...gem) - Math.min(...gem);
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(giveGem([3, 1, 2], [[0, 2], [2, 1], [2, 0]]), 2);
assert.strictEqual(giveGem([100, 0, 50, 100], [[0, 2], [0, 1], [3, 0], [3, 0]]), 75);
assert.strictEqual(giveGem([0, 0, 0, 0], [[1, 2], [3, 1], [1, 2]]), 0);
assert.strictEqual(giveGem([5], []), 0);
assert.strictEqual(giveGem([5, 5, 5], [[0, 1], [1, 2]]), 5);

console.log('All tests passed!');
console.log('giveGem([3,1,2], [[0,2],[2,1],[2,0]]) =', giveGem([3, 1, 2], [[0, 2], [2, 1], [2, 0]]));
