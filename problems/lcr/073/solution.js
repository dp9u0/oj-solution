/*
 * @lc app=leetcode.cn id=LCR 073 lang=javascript
 *
 * [LCR 073] 爱吃香蕉的狒狒
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  const canFinish = (k) => {
    let hours = 0;
    for (const p of piles) {
      hours += Math.ceil(p / k);
      if (hours > h) return false;
    }
    return true;
  };

  let lo = 1;
  let hi = Math.max(...piles);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canFinish(mid)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minEatingSpeed([3, 6, 7, 11], 8), 4);
assert.strictEqual(minEatingSpeed([30, 11, 23, 4, 20], 5), 30);
assert.strictEqual(minEatingSpeed([30, 11, 23, 4, 20], 6), 23);
// single pile
assert.strictEqual(minEatingSpeed([10], 5), 2);
assert.strictEqual(minEatingSpeed([10], 1), 10);
// H equals pile count: eat one pile per hour exactly
assert.strictEqual(minEatingSpeed([5, 7, 9], 3), 9);
// many hours: speed 1 needs sum of piles hours <= H
assert.strictEqual(minEatingSpeed([2, 3, 4], 9), 1);
// speed 1 infeasible here pushes answer up
assert.strictEqual(minEatingSpeed([2, 3, 4], 8), 2);
// large values
assert.strictEqual(minEatingSpeed([1000000000, 1000000000], 3), 1000000000);
assert.strictEqual(minEatingSpeed([1, 1, 1], 3), 1);

console.log('All tests passed!');
console.log('minEatingSpeed([3,6,7,11], 8) =', minEatingSpeed([3, 6, 7, 11], 8));
