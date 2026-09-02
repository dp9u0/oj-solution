/*
 * @lc app=leetcode.cn id=LCP 23 lang=javascript
 *
 * [LCP 23] 魔术排列
 */

// @lc code=start
/**
 * @param {number[]} target
 * @return {boolean}
 */
var isMagic = function(target) {
  const n = target.length;

  const shuffleOnce = (arr) => {
    // even positions (1-based) first, then odd positions, each stable
    const evens = [];
    const odds = [];
    for (let i = 0; i < arr.length; i++) {
      if ((i + 1) % 2 === 0) evens.push(arr[i]);
      else odds.push(arr[i]);
    }
    return evens.concat(odds);
  };

  for (let k = 1; k <= n; k++) {
    let cur = [];
    for (let i = 1; i <= n; i++) cur.push(i);
    let drawnLen = 0;
    let ok = true;
    while (cur.length) {
      cur = shuffleOnce(cur);
      const take = Math.min(k, cur.length);
      // check taken segment against target at position drawnLen
      for (let i = 0; i < take; i++) {
        if (cur[i] !== target[drawnLen + i]) { ok = false; break; }
      }
      if (!ok) break;
      drawnLen += take;
      cur = cur.slice(take);
    }
    if (ok && drawnLen === n) return true;
  }
  return false;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(isMagic([2, 4, 3, 1, 5]), true);
assert.strictEqual(isMagic([5, 4, 3, 2, 1]), false);
assert.strictEqual(isMagic([1]), true); // k=1 shuffle [1], take 1
assert.strictEqual(isMagic([2, 1]), true); // k=1: [2,1]? k=2 takes [2,1] too
assert.strictEqual(isMagic([1, 2]), false); // k>=1 shuffle first then take -> [2,1] or for big k single shuffle [2,1]
assert.strictEqual(isMagic([1, 3, 2]), false);
assert.strictEqual(isMagic([2, 1, 3]), true); // k=1: round1 [2,1,3]? no take1 -> 2; rest [1,3]->shuffle [3,1] take... let's verify by run

console.log('All tests passed!');
console.log('isMagic([2,4,3,1,5]) =', isMagic([2, 4, 3, 1, 5]));
