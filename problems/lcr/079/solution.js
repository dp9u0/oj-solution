/*
 * @lc app=leetcode.cn id=LCR 079 lang=javascript
 *
 * [LCR 079] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [[]];
  for (const num of nums) {
    const curLen = res.length;
    for (let i = 0; i < curLen; i++) {
      res.push(res[i].concat(num));
    }
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

const sortSubs = (arr) => arr.map(s => s.join(',')).sort();
const expect = (n) => {
  const a = sortSubs(subsets(n));
  // reconstruct expected via bitmask independently? compare length + include empty & full & all singles
  assert.strictEqual(a.length, 1 << n.length);
  assert.strictEqual(a.includes(''), true);
  assert.strictEqual(a.includes(n.join(',')), true);
  for (const x of n) assert.strictEqual(a.includes(String(x)), true);
  // uniqueness
  assert.strictEqual(new Set(a).size, a.length);
};
expect([1, 2, 3]);
expect([0]);
expect([1, 2, 3, 4]);
assert.deepStrictEqual(sortSubs(subsets([1, 2])), sortSubs([[], [1], [2], [1, 2]]));

console.log('All tests passed!');
console.log('subsets([1,2,3]) length =', subsets([1, 2, 3]).length);
