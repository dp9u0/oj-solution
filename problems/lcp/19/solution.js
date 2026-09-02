/*
 * @lc app=leetcode.cn id=LCP 19 lang=javascript
 *
 * [LCP 19] 秋叶收藏集
 */

// @lc code=start
/**
 * @param {string} leaves
 * @return {number}
 */
var minimumOperations = function(leaves) {
  const n = leaves.length;
  const costR = (ch) => (ch === 'y' ? 1 : 0); // make char red
  const costY = (ch) => (ch === 'r' ? 1 : 0); // make char yellow

  // dpA: prefix is all red (part 1); dpB: ends in yellow (part 2 nonempty); dpC: ends in red (part 3 nonempty)
  let dpA = costR(leaves[0]);
  let dpB = Infinity;
  let dpC = Infinity;

  for (let i = 1; i < n; i++) {
    const ch = leaves[i];
    const cR = costR(ch);
    const cY = costY(ch);
    const ndpC = Math.min(dpB + cR, dpC + cR);
    const ndpB = Math.min(dpA + cY, dpB + cY);
    const ndpA = dpA + cR;
    dpA = ndpA;
    dpB = ndpB;
    dpC = ndpC;
  }
  return dpC;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minimumOperations('rrryyyrryyyrr'), 2);
assert.strictEqual(minimumOperations('ryr'), 0);
assert.strictEqual(minimumOperations('rry'), 2); // -> r|y|r
assert.strictEqual(minimumOperations('rrr'), 1);
assert.strictEqual(minimumOperations('yyy'), 2);
assert.strictEqual(minimumOperations('ryrr'), 0);
assert.strictEqual(minimumOperations('ryyy'), 1);

console.log('All tests passed!');
console.log('minimumOperations("rrryyyrryyyrr") =', minimumOperations('rrryyyrryyyrr'));
