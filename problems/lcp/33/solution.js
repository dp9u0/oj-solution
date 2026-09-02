/*
 * @lc app=leetcode.cn id=LCP 33 lang=javascript
 *
 * [LCP 33] 蓄水
 */

// @lc code=start
/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
var storeWater = function(bucket, vat) {
  const n = bucket.length;
  let maxVat = 0;
  for (const v of vat) if (v > maxVat) maxVat = v;
  if (maxVat === 0) return 0;

  let ans = Infinity;
  // try every possible number of pours t
  for (let t = 1; t <= maxVat; t++) {
    let ops = t; // t pours
    for (let i = 0; i < n; i++) {
      if (vat[i] === 0) continue;
      const need = Math.ceil(vat[i] / t);
      if (need > bucket[i]) ops += need - bucket[i];
      if (ops >= ans) break; // prune
    }
    if (ops < ans) ans = ops;
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(storeWater([1, 3], [6, 8]), 4);
assert.strictEqual(storeWater([9, 0, 1], [0, 2, 2]), 3);
// all vats zero -> no ops
assert.strictEqual(storeWater([1, 2], [0, 0]), 0);
// bucket already big enough in one pour
assert.strictEqual(storeWater([10, 10], [5, 5]), 1);
// single vat needs many upgrades or pours
assert.strictEqual(storeWater([1], [100]), 19);
assert.strictEqual(storeWater([100], [1]), 1);
// vat 0 ignored; vat 100 with zero bucket: t + ceil(100/t) minimized at t=10 -> 20
assert.strictEqual(storeWater([0, 0], [0, 100]), 20);

console.log('All tests passed!');
console.log('storeWater([1,3],[6,8]) =', storeWater([1, 3], [6, 8]));
